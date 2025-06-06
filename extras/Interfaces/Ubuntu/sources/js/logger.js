const rainbowClasses = [
    //'black',
    'red',
    'green',
    'yellow',
    //'blue',
    'purple',
    'teal',
    'grey',
    'l-black',
    'l-red',
    'l-green',
    'l-yellow',
    'l-blue',
    'l-purple',
    'l-teal',
    'white',
]

const log = function(message, type) {
    function logger(message, style) {
        const loggerMessage = message
            .replaceAll('%c', '')
            .replaceAll('\n','<br>');

        const consolizedMessage = message
            .replaceAll('<br>','\n')
            .replaceAll('</br>', '\n');


        document.querySelectorAll('ubuntu-application[type="base.ubuntu.terminal.logger"]').forEach((terminalWindow) => {
            if(rainbowLogging) {
                if(loggerMessage == 0) return terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='height:20px;'></div>`;
                let msgArray = loggerMessage.slice(2).trim().split(' ');
                let rainbowMsg = '';
                msgArray.forEach((e) => {
                    let color = rainbowClasses[Math.floor(Math.random() * rainbowClasses.length)]
                    rainbowMsg += `<p style="white-space:break-spaces" class='${color}'>${e} </p>`
                });

                let span = document.createElement('span');
                span.innerHTML = rainbowMsg;

                terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').appendChild(span);

                let body = terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents');
                body.scrollTo(body.scrollLeft, body.scrollHeight);
                return;
            } else {
                if(loggerMessage.length == 0) terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='height:20px;'></div>`;
                else terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<span style='${style}'>${loggerMessage}</span>`;

                let body = terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents');
                body.scrollTo(body.scrollLeft, body.scrollHeight);
            }
        });

        console.log(consolizedMessage, style);
    }
    
    switch(type) {
        case 'info':
            logger(`%c❔ [INFO]: ${message}`, "color:white;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'warning':
            logger(`%c⚠️ [WARNING]: ${message}`, "color:yellow;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'error':
            logger(`%c❌ [ERROR]: ${message}`, "color:red;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'debug':
            logger(`%c🟠 [DEBUG]: ${message}`, "color:#e95420;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        default:
            logger(`%c${message}`, "color:white;font-size:16px;font-family:'Ubuntu Mono';");
            break;
    }
}