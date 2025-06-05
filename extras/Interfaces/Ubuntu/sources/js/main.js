let timeInterval;

let skipBoot = true;
let debug = true;

let applicationsOpen = [];

const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

window.onload = function() {
    window.scrollTo(0, 0);
    if(debug) {
        //openApp('base.ubuntu.terminal')
    }

    window.addEventListener('keydown', (e) => {
        if(!document.querySelector('div.lockDateTime').classList.contains('closed')) {
            document.querySelector('div.lockDateTime').classList.add('closed');
        }
    });

    console.log('Hello!\n\elcome to Ubuntu | For The Web!\nThis is a web-based port of Ubuntu 24.04 LTS in pure HTML, JS, and CSS.\n\nMade by ljharnish.\n\nEnjoy!')

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

    document.querySelector('div.lockDateTime').addEventListener('click', () => {
        document.querySelector('div.lockDateTime').classList.add('closed');
    });
    document.querySelector('div.lockLogin input').addEventListener('keydown', (e) => {
        if(e.key == 'Escape') document.querySelector('div.lockDateTime').classList.remove('closed');

        if(e.key == 'Enter') { 
            if(debug) console.log(`Unlocking Ubuntu 24.04 LTS:\nPassword: [${document.getElementById('lockLoginPassword').value}]`);
            document.getElementById('lockLoginThrobber').classList.add('spin');
            setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
        }
    });
    document.querySelector('div.lockLogin button:nth-of-type(2)').addEventListener('click', () => {
        if(debug) console.log(`Unlocking Ubuntu 24.04 LTS:\nPassword: [${document.getElementById('lockLoginPassword').value}]`);
        document.getElementById('lockLoginThrobber').classList.add('spin');
        setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
    });

    if(skipBoot) document.getElementById('bootAnim').classList.add('boot');
    if(skipBoot) document.getElementById('lockScreen').classList.add('unlocked');

    let randBootInterval = Math.floor(Math.random() * 1500) + 2000;
    setTimeout(() => {
        document.getElementById('bootAnim').classList.add('boot');
    }, randBootInterval);
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
        if((e.clientX) <= 75) elmnt.classList.add('left-half');
        else if((e.clientX) >= (window.innerWidth - 6)) elmnt.classList.add('right-half');
        else if(elmnt.classList.contains('maximized')) elmnt.className = 'maximized';
        else elmnt.className = '';
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}

function openApp(appid) {
    document.getElementById('allApps').classList.remove('open');

    if(debug) console.log(`Opening app: '${appid}'`);

    try {
        let appIcons = document.querySelectorAll(`button[data-appid='${appid}']`);
        appIcons.forEach((el) => {
            el.classList.add('openApp');
        });
    } catch (error) {
        
    }
   

    let app = document.createElement('ubuntu-application');
    app.setAttribute('type', appid);

    document.getElementById('mainView').appendChild(app);

    applicationsOpen.push(app);
}

function closeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;

    if(debug) console.log(`Closing app: '${appEl.getAttribute('type')}'\nWindow Index: ${applicationsOpen.indexOf(appEl)>-1?applicationsOpen.indexOf(appEl):'Undefined'}`);

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
            console.error(error)
        }
    }
}

function openAllApps() {
    document.getElementById('allApps').classList.toggle('open');
}

function implementApp(appID, appCode) {
    appLayouts.push({id: appID, layout: appCode});
}

function maximizeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;
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
    app.children[0].src = './sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg';
    appEl.className = appEl.getAttribute('bfS');
    appEl.classList.remove('maximized');

    app.onclick = function () {
        maximizeApp(app)
    }
}