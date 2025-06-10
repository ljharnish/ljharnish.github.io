let logFileContent = '';

//? keyword coloring, manually set up for pain
const keywords = [
    { type: 'red', color: 'red', strings: [
        //? Errors / Separation Characters
        '[error]:',
        'testingerrorlog...',
        '|',
        '│', //? Ascii Terminal Pipe
        '└─┘'
    ]},

    { type: 'l-red', color: 'l-red', strings: [
    ]},
    
    { type: 'orange', color: 'orange', strings: [
        //? Ubuntu Orange

        '[debug]:',
        'testingdebuglog...',
        'ubuntu',
        '24.04',
        'lts:'
    ]},

    { type: 'l-orange', color: 'l-orange', strings: [
    ]},

    { type: 'yellow', color: 'yellow', strings: [
    ]},
    
    { type: 'l-yellow', color: 'l-yellow', strings: [
        //? Variable Names & More

        '[warning]:',
        'testingwarninglog...',
        'app',
        'skipboot:',
        'debug:'
    ]},

    { type: 'green', color: 'green', strings: [
    ]},

    { type: 'l-green', color: 'l-green', strings: [
        //? Brackets and such

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
        //? Digits

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
        //? Booleans
        
        'maximized.',
        'unmaximized.',
        'true',
        'false',
    ]},

    { type: 'teal', color: 'teal', strings: [
        'password:'
    ]},

    { type: 'l-teal', color: 'l-teal', strings: [
        //? Events

        'implementappevent:',

        'openwindowevent:',
        'closewindowevent:',
        'maximizewindowevent:',
        'minimizewindowevent:',
        'activewindowevent:',
        'snapwindowevent:',
        'resizewindowevent:',
        'dragwindowevent:',
    ]},

    { type: 'black', color: 'black', strings: [
    ]},

    { type: 'grey', color: 'grey', strings: [
    ]}
];

//? retrieves a keyword type based on a string 
function getKeyword(string) {
    string = string.toLowerCase()
    return keywords.filter(e => (e.strings.indexOf(string)>-1)).length !== 0 ? keywords.filter(e => (e.strings.indexOf(string)>-1))[0] : undefined;
}

//? Creates a <p> tag for every word and sets styles for its keyword type.
function colorizeKeywords(message) {
    let words = [];
    if(message.includes(`<p class='orange' style="font-family:'customicons';">0 </p>`)) { 
        words = message.split(`<p class='orange' style="font-family:'customicons';">0 </p>`)[1].split(' ');
        words.unshift(`<p class='orange' style="font-family:'customicons';">0 </p>`);
    }
    else { 
        words = message.split(' ');
    }

    let newStr = '';

    words.forEach((word) => {
        let keyword = getKeyword(word) || {type:'unknown', color:''};
        if(`<p class=''><br> </p>` == `<p class='${keyword.color}'>${word} </p>`) newStr += '<br>'
        else if(parseInt(word)) newStr+=`<p class='purple'>${word} </p>`
        else newStr+=`<p class='${keyword.color}'>${word} </p>`
    });

    return newStr
}

let frozenLogs = [];

function unfreezeLogs(){
    frozenLogs.unshift({message:'Logs were frozen here ^', type: 'debug'})
    frozenLogs.forEach((logf)=>log(logf.message,logf.type,true));frozenLogs=[]}

//? Finally, logs the message
const log = function(message, type, freezeBypass = false) {
    if(debugOptions.logsFrozen && !freezeBypass) {
        frozenLogs.push({message:message,type:type});
        return;
    }

    function logger(message, style) {
        //? Message stylized for the built-in Debug Logger
        const loggerMessage = message
            .replaceAll('%c', '')
            .replaceAll('\n','<br>')
            .replaceAll('🟠 ', `<p class='orange' style="font-family:'customicons';">0 </p>`);

        //? Message cut down for the actual console
        //! May be deprecated in the future
        const consolizedMessage = message
            .replaceAll('<br>','\n')
            .replaceAll('</br>', '\n');


        //? Gets all loggers and add events as a <span> tag with <p> inside for keywords.
        //? Blank logs are set as spaces and will create dividers, basically.
        document.querySelectorAll('ubuntu-application[type="base.ubuntu.terminal.logger"]').forEach((terminalWindow) => {
            if(debugOptions.rainbowLogging) {
                //? Sets all messages as rainbows, ignoring keyword coloring.

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

        //? Logs the message to the console (if its not blank, or undefined) with styles.
        if(loggerMessage.length> 0 && loggerMessage !== 'undefined') console.log(consolizedMessage, style);
        if(loggerMessage.length>0&&loggerMessage!=='undefined')logFileContent+=`\n${consolizedMessage.replaceAll('%c','')}`;
    }

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let date = new Date(Date.now());

    console.log(weekdays[date.getDay()])

    let colorfulDate = '('
    + weekdays[date.getDay()]
    + ' '
    + date.getFullYear().toString()
    + '-'
    + (date.getMonth().toString().length>1?date.getMonth():"0"+date.getMonth())
    + "-"
    + (date.getDate().toString().length>1?date.getDate():"0"+date.getDate())
    + ' '
    + (date.getHours().toString().length>1?date.getHours():"0"+date.getHours())
    + ":"
    + (date.getMinutes().toString().length>1?date.getMinutes():"0"+date.getMinutes())
    + ":"
    + (date.getSeconds().toString().length>1?date.getSeconds():"0"+date.getSeconds())
    + ') ';
    
    if(!debugOptions.showDateTime) colorfulDate = '';

    switch(type) {
        case 'info':
            logger(`%c❔ [INFO]: ${colorfulDate}${message}`, "color:white;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'warning':
            logger(`%c⚠️ [WARNING]: ${colorfulDate}${message}`, "color:yellow;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'error':
            logger(`%c❌ [ERROR]: ${colorfulDate}${message}`, "color:red;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        case 'debug':
            logger(`%c🟠 [DEBUG]: ${colorfulDate}${message}`, "color:#e95420;font-size:16px;font-family:'Ubuntu Mono';");
            break;
        default:
            logger(`%c${message}`, "color:white;font-size:16px;font-family:'Ubuntu Mono';");
            break;
    }
}


//? Creates a downloadable log file upon download button pressed.
function downloadLog() {
    const l=document.createElement('a');
    const f=new Blob([logFileContent],{type:'text/plain'});
    l.href=URL.createObjectURL(f);
    let d=new Date(Date.now());
    l.download='UBUNTU24.04_FTW - log-'+d.getFullYear().toString()+(d.getMonth().toString().length>1?d.getMonth():"0"+d.getMonth())+(d.getDate().toString().length>1?d.getDate():"0"+d.getDate()) + '-'+(d.getHours().toString().length>1?d.getHours():"0"+d.getHours())+(d.getMinutes().toString().length>1?d.getMinutes():"0"+d.getMinutes())+(d.getSeconds().toString().length>1?d.getSeconds():"0"+d.getSeconds())+'.log';
    l.click();
    URL.revokeObjectURL(l.href);
}