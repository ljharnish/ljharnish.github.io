let timeInterval;

let debug = false;
//if(window.location.href.includes('5500')) debug = true;

const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

window.onload = function() {
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
            document.getElementById('lockLoginThrobber').classList.add('spin');
            setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
        }
    });
    document.querySelector('div.lockLogin button:nth-of-type(2)').addEventListener('click', () => {
        document.getElementById('lockLoginThrobber').classList.add('spin');
        setTimeout(() => { document.getElementById('lockScreen').classList.add('unlocked') }, 500);
    });

    if(debug) document.getElementById('bootAnim').classList.add('boot');
    if(debug) document.getElementById('lockScreen').classList.add('unlocked');

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
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
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
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}

function openApp(appid) {
    let appIcon = document.querySelector(`button[data-appid='${appid}']`);
    appIcon.classList.add('openApp');

    let app = document.createElement('ubuntu-application');
    app.setAttribute('type', appid);

    document.getElementById('mainView').appendChild(app);
}