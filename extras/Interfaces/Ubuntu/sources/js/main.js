let timeInterval;

let skipBoot = false;
let rainbowLogging = false;
let debug = false;

let applicationsOpen = [];

const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function setDebug() {
    let debugMode = getCookie('debug') || 'false';

    switch(debugMode) {
        case 'false':
            setCookie('debug', true, 365);
            break;
        case 'true':
            setCookie('debug', 'rainbow', 365);
            break;
        case 'rainbow':
            setCookie('debug', false, 365);
            break;
    }

    location.reload();
}

window.onload = function() {
    let debugCookie = getCookie('debug');
    switch(debugCookie) {
        case 'false':
            debug = false;
            break;
        case 'true':
            document.querySelector('button[onclick="setDebug()"]').children[0].src = './sources/image/icons/Yaru/apps/terminal-app.png';
            debug = true;
            break;
        case 'rainbow':
            document.querySelector('button[onclick="setDebug()"]').children[0].src = './sources/image/icons/Yaru/apps/terminal-colored.png';
            debug = true;
            rainbowLogging = true;
            break;
    }

    log('Hello!\nWelcome to Ubuntu | For The Web!\nThis is a web-based port of Ubuntu 24.04 LTS in pure HTML, JS, and CSS.\n\nMade by ljharnish.\n\nEnjoy!')

    appLayouts.forEach((layout) => keywords.filter(e => e.type=='l-blue')[0].strings.push(layout.id))

    if(debug) {
        let appGrid = document.querySelector('#allApps .allApps_appGrid');
        appGrid.innerHTML += `<button data-appid="base.ubuntu.terminal.logger" onclick="openApp('base.ubuntu.terminal.logger')"><img src="./sources/image/icons/Yaru/apps/gksu-root-terminal.png" alt=""><p>Debug Logger</p></button>`

        openApp('base.ubuntu.terminal.logger');

        log()
        log('Testing Info Log...', 'info');
        log('Testing Error Log...', 'error');
        log('Testing Debug Log...', 'debug');
        log('Testing Warning Log...', 'warning');
        log()
        log(`SkipBoot: ${skipBoot} , Debug: ${debugCookie}`, 'debug');
    }

    if(debug) {
        // Build Actions
        // openApp('base.ubuntu.softwareupdater');
    }

    window.scrollTo(0, 0);

    window.addEventListener('keydown', (e) => {
        if(e.key == 'Tab') {
            e.preventDefault();
            log()
        }
            
        if(!document.querySelector('div.lockDateTime').classList.contains('closed')) {
            document.querySelector('div.lockDateTime').classList.add('closed');
        }
    });
    log();
    log('Global Key Down Event Listener Created.', 'info');

    let topBarTime = document.getElementById('dateTime');
    let lockScreenTime = document.getElementById('lockTime');
    let lockScreenDate = document.getElementById('lockDate');

    let dateNow = Date.now();
    let data = new Date(dateNow);

    let topBarStr = `${monthShort[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${(data.getHours().toString().length > 1) ? data.getHours() : ('0' + data.getHours())}:${(data.getMinutes().toString().length > 1) ? data.getMinutes() : ('0' + data.getMinutes())}`;
    let lockTimeStr = `${(data.getHours().toString().length > 1) ? data.getHours() : ('0' + data.getHours())}:${(data.getMinutes().toString().length > 1) ? data.getMinutes() : ('0' + data.getMinutes())}`;
    let lockDateStr = `${dayOfWeek[data.getDay()]} ${months[data.getMonth()]} ${data.getDate()}`;
    topBarTime.innerHTML = topBarStr;
    lockScreenTime.innerHTML = lockTimeStr;
    lockScreenDate.innerHTML = lockDateStr;

    timeInterval = setInterval(() => {
        let dateNow = Date.now();
        let data = new Date(dateNow);

        let topBarStr = `${monthShort[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${(data.getHours().toString().length > 1) ? data.getHours() : ('0' + data.getHours())}:${(data.getMinutes().toString().length > 1) ? data.getMinutes() : ('0' + data.getMinutes())}`;
        topBarTime.innerHTML = topBarStr;
    }, 1000);

    document.addEventListener('mousedown', (e) => {
        document.querySelectorAll('ubuntu-application').forEach((app) => {
            app.shadowRoot.querySelector('div.app').classList.add('inactive');
        });

        try {
            if(e.target.localName == 'ubuntu-application' && e.target.parentNode.lastChild != e.target) e.target.parentNode.appendChild(e.target);
            let app = e.target.shadowRoot.querySelector('div.app');
            app.classList.remove('inactive');
        } catch (error) {
            return;
        }
    });
    log('Global Mouse Down Event Listener Created.', 'info');

    document.querySelector('div.lockDateTime').addEventListener('click', () => {
        document.querySelector('div.lockDateTime').classList.add('closed');
    });

    log('Lock Screen Click Event Listener Created.', 'info');
    
    document.querySelector('div.lockLogin input').addEventListener('keydown', (e) => {
        if(e.key == 'Escape') document.querySelector('div.lockDateTime').classList.remove('closed');

        if(e.key == 'Enter') { 
            log(`Unlocking Ubuntu 24.04 LTS: \n Password: [ ${document.getElementById('lockLoginPassword').value} ]`, 'debug');
            document.getElementById('lockLoginThrobber').classList.add('spin');
            setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
        }
    });

    log('Lock Screen Key Down Event Listener Created.', 'info');

    document.querySelector('div.lockLogin button:nth-of-type(2)').addEventListener('click', () => {
        log(`Unlocking Ubuntu 24.04 LTS: \n Password: [ ${document.getElementById('lockLoginPassword').value} ]`, 'debug');
        document.getElementById('lockLoginThrobber').classList.add('spin');
        setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
    });

    log('Lock Screen Submit Button Click Event Listener Created.', 'info');
    log()

    if(skipBoot) document.getElementById('bootAnim').classList.add('boot');
    if(skipBoot) document.getElementById('lockScreen').classList.add('unlocked');

    let randBootInterval = Math.floor(Math.random() * 1500) + 2000;
    log(`RNG Boot Time: ${randBootInterval / 1000}s`, 'debug');
    if(skipBoot) log(`Boot Screen Skipped...`, 'info');
    log()
    setTimeout(() => {
        document.getElementById('bootAnim').classList.add('boot');
    }, randBootInterval);
}

let logFixCounter = {
    leftHalf: 0,
    rightHalf: 0,
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.shadowRoot.querySelector('.app_handleBar').onmousedown = dragMouseDown;
    elmnt.shadowRoot.querySelector('.app_handleBar').onpointerdown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        //elmnt.className = '';
        document.onmouseup = closeDragElement;
        document.onpointerup = closeDragElement;
        document.onmousemove = elementDrag;
        document.onpointermove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        /*if((elmnt.offsetTop - pos2) > 0) */elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        /*if((elmnt.offsetLeft - pos1) > 70) */elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute('type')} ) \n | DragEvent: [ ${elmnt.style.left.split('px')[0]}, ${elmnt.style.top.split('px')[0]} ] |`, 'debug');
        
        if((e.clientX) <= 75 && !elmnt.dataset.staticSize == "true") {
            if(logFixCounter.leftHalf == 0) log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute('type')} ) snapped to left-half.`,'debug')
            elmnt.classList.add('left-half');
            logFixCounter.leftHalf = 1;
        } else if((e.clientX) >= (window.innerWidth - 6) && !elmnt.dataset.staticSize == "true") { 
            if(logFixCounter.rightHalf == 0) log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute('type')} ) snapped to right-half.`,'debug')
            elmnt.classList.add('right-half');
            logFixCounter.rightHalf = 1;
        } else if(elmnt.classList.contains('maximized')) {
            elmnt.className = 'maximized'; 
        } else { elmnt.className = ''; 
        logFixCounter.leftHalf = 0;
        logFixCounter.rightHalf = 0;}
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}

function openApp(appid) {
    log('');
    document.getElementById('allApps').classList.remove('open');

    log(`Opening App ( ${appid} )`, 'debug');

    try {
        let appIcons = document.querySelectorAll(`button[data-appid='${appid}']`);
        appIcons.forEach((el) => {
            el.classList.add('openApp');
        });
    } catch (error) {
        
    }
   
    let filteredAppLayouts = appLayouts.filter((a)=>a.id==appid);

    if(filteredAppLayouts.length > 0) {
        let app = document.createElement('ubuntu-application');
        app.setAttribute('type', appid);

        document.getElementById('mainView').appendChild(app);
        if(filteredAppLayouts[0].resizable == false) {
            app.dataset.staticSize = true;
        }
        applicationsOpen.push(app);

        function logResize() {
            log(`App [ ${applicationsOpen.indexOf(app)} ] ( ${appid} ) \n | ResizeEvent: [ ${app.offsetHeight} x ${app.offsetWidth} ] |`, 'debug');
        }

        new ResizeObserver(logResize).observe(app);

        return app;
    } else {
        //! No app in appLayouts array.
        log(`'${appid}' is not a valid application ID.`, 'error')
    }
}

function closeApp(app) {
    log('');
    let appEl = app.closest("div.app").parentNode.host;

    log(`Closing App [ ${applicationsOpen.indexOf(appEl)>-1?applicationsOpen.indexOf(appEl):'Undefined'} ] ( ${appEl.getAttribute('type')} )`, 'debug');

    applicationsOpen.splice(applicationsOpen.indexOf(appEl), 1);
    appEl.remove();

    let amountOfAppsOfType = applicationsOpen.filter((e) => e.getAttribute('type') == appEl.getAttribute('type'));
    if(amountOfAppsOfType == 0) {
        try {
            let appIcons = document.querySelectorAll(`button[data-appid='${appEl.getAttribute('type')}']`);
            appIcons.forEach((el) => {
                el.classList.remove('openApp');
            });
        } catch (error) {
            log(error, 'error')
        }
    }
}

function openAllApps() {
    document.getElementById('allApps').classList.toggle('open');

    if(document.getElementById('allApps').classList.contains('open')) {
        log('All apps menu OPEN.', 'debug');
    } else {
        log('All apps menu CLOSED.', 'debug');
    }
}

function implementApp(appID, appCode) {
    appLayouts.push({id: appID, layout: appCode});
    log(`New app "${appID}" implemented.`, 'debug');
    keywords.filter(e => e.type=='l-green')[0].strings.push(appID);
}

function maximizeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;
    log(`App [ ${applicationsOpen.indexOf(appEl)} ] ( ${appEl.getAttribute('type')} ) maximized.`,'debug');
    appEl.setAttribute('bfS', appEl.className);
    appEl.setAttribute('bW', appEl.style.width);
    appEl.setAttribute('bH', appEl.style.height);
    app.children[0].src = './sources/image/icons/Yaru/scalable/ui/window-restore-symbolic.svg';
    appEl.className = '';
    appEl.classList.add('maximized');

    app.onclick = function () {
        unmaximizeApp(app)
    }
}

function unmaximizeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;
    log(`App [ ${applicationsOpen.indexOf(appEl)} ] ( ${appEl.getAttribute('type')} ) unmaximized. \n Fix bug: no transition on unmaximizing.`,'debug');
    app.children[0].src = './sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg';
    appEl.className = appEl.getAttribute('bfS');
    appEl.classList.remove('maximized');

    app.onclick = function () {
        maximizeApp(app)
    }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
