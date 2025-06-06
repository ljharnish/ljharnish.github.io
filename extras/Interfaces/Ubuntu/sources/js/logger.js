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
                if(loggerMessage.length == 0 || loggerMessage == 'undefined') terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='min-height:20px;'></div>`;
                else terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<span class='full' style='${style.replaceAll("'", '"')}color:transparent;background:linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;'>${loggerMessage}</span>`;

                let body = terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents');
                body.scrollTo(body.scrollLeft, body.scrollHeight);
            } else {
                if(loggerMessage.length == 0 || loggerMessage == 'undefined') terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='min-height:20px;'></div>`;
                else terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<span class='full' style='${style.replaceAll("'", '"')}'>${loggerMessage}</span>`;

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