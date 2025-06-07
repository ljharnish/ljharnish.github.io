// (TODO) change color based on keywords

const keywords = [
    { type: 'red', color: 'red', strings: [
        '[error]:',
        '|'
    ]},

    { type: 'l-red', color: 'l-red', strings: [
    ]},
    
    { type: 'orange', color: 'orange', strings: [
        '[debug]:',
        'ubuntu',
        '24.04',
        'lts:'
    ]},

    { type: 'l-orange', color: 'l-orange', strings: [
        'false'
    ]},

    { type: 'yellow', color: 'yellow', strings: [
    ]},
    
    { type: 'l-yellow', color: 'l-yellow', strings: [
        '[warning]:',
        'app',
        'resizeevent:',
        'dragevent:',
        'skipboot:',
        'debug:'
    ]},

    { type: 'green', color: 'green', strings: [
    ]},

    { type: 'l-green', color: 'l-green', strings: [
        '[',
        ']',
        '(',
        ')',
        'x'
    ]},

    { type: 'blue', color: 'blue', strings: [
    ]},

    { type: 'l-blue', color: 'l-blue', strings: [
    ]},

    { type: 'purple', color: 'purple', strings: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9', 
    ]},

    { type: 'l-purple', color: 'l-purple', strings: [
        'maximized.',
        'unmaximized.',
        'true',
    ]},

    { type: 'teal', color: 'teal', strings: [
        'password:'
    ]},

    { type: 'l-teal', color: 'l-teal', strings: [
    ]},

    { type: 'black', color: 'black', strings: [
    ]},

    { type: 'grey', color: 'grey', strings: [
    ]}
];

function getKeyword(string) {
    string = string.toLowerCase()
    return keywords.filter(e => (e.strings.indexOf(string)>-1)).length !== 0 ? keywords.filter(e => (e.strings.indexOf(string)>-1))[0] : undefined;
}

function colorizeKeywords(message) {
    let words = [];
    if(message.includes(`<p class='orange' style="font-family:'customicons';white-space:break-spaces">0 </p>`)) { 
        words = message.split(`<p class='orange' style="font-family:'customicons';white-space:break-spaces">0 </p>`)[1].split(' ');
        words.unshift(`<p class='orange' style="font-family:'customicons';white-space:break-spaces">0 </p>`);
    }
    else { 
        words = message.split(' ');
    }

    let newStr = '';

    words.forEach((word) => {
        let keyword = getKeyword(word) || {type:'unknown', color:''};
        if(`<p class='' style='white-space:break-spaces'><br> </p>` == `<p class='${keyword.color}' style='white-space:break-spaces'>${word} </p>`) newStr += '<br>'
        else if(parseFloat(word)) newStr+=`<p class='purple' style='white-space:break-spaces'>${word} </p>`
        else newStr+=`<p class='${keyword.color}' style='white-space:break-spaces'>${word} </p>`
    });

    return newStr
}


const log = function(message, type) {
    function logger(message, style) {
        const loggerMessage = message
            .replaceAll('%c', '')
            .replaceAll('\n','<br>')
            .replaceAll('🟠 ', `<p class='orange' style="font-family:'customicons';white-space:break-spaces">0 </p>`);

        const consolizedMessage = message
            .replaceAll('<br>','\n')
            .replaceAll('</br>', '\n');


        document.querySelectorAll('ubuntu-application[type="base.ubuntu.terminal.logger"]').forEach((terminalWindow) => {
            if(rainbowLogging) {
                if(loggerMessage.length == 0 || loggerMessage == 'undefined') terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='min-height:20px;'></div>`;
                else terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<span class='full' style="font-size:16px;font-family:'Ubuntu Mono';color:transparent;background:linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${loggerMessage}</span>`;

                let body = terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents');
                body.scrollTo(body.scrollLeft, body.scrollHeight);
            } else {
                if(loggerMessage.length == 0 || loggerMessage == 'undefined') terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<div style='min-height:20px;'></div>`;
                else terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents').innerHTML += `<span class='full' style='font-size:16px;font-family:'Ubuntu Mono';'>${colorizeKeywords(loggerMessage)}</span>`;

                let body = terminalWindow.shadowRoot.querySelector('div.app_terminal-body-contents');
                body.scrollTo(body.scrollLeft, body.scrollHeight);
            }
        });

        if(loggerMessage.length > 0 && loggerMessage !== 'undefined') console.log(consolizedMessage, style);
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