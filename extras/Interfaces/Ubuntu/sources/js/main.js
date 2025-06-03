let timeInterval;

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

window.onload = function() {
    let topBarTime = document.getElementById('dateTime');

    let dateNow = Date.now();
    let data = new Date(dateNow);

    let normalStr = `${months[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${data.getHours()}:${data.getMinutes()}`
    topBarTime.innerHTML = normalStr;

    timeInterval = setInterval(() => {
        let dateNow = Date.now();
        let data = new Date(dateNow);

        let normalStr = `${months[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${(data.getHours().toString().length > 1) ? data.getHours() : ('0' + data.getHours())}:${(data.getMinutes().toString().length > 1) ? data.getMinutes() : ('0' + data.getMinutes())}`
        topBarTime.innerHTML = normalStr;
    }, 1000);

    document.addEventListener('click', (e) => {
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