document.querySelector('#HS_Pages').scrollTo(0, 0)

//! Random Call

setInterval(() => {
    let chance = Math.floor(Math.random() * 100);

    if(chance >= 95) {
        //DynamicIslandShowcase('NewCall');
    }
}, 60_000)


document.addEventListener('keyup', (key) => {
    if(key.key == 'Escape') closeApp();
    return;
});

document.querySelectorAll('img').forEach((el) => {
    el.draggable = false;
    el.style.pointerEvents = 'none';
});

document.querySelectorAll('div.homeIcon').forEach((el) => { 
    el.children[0].addEventListener('click', () => {
        el.classList.add('homeIconClick');

        let newApp = document.createElement('div');
        newApp.classList.add('homeIconShow');
        newApp.innerHTML = `<img src="${el.querySelector('img').src}" alt="">`;
        newApp.style.top = el.offsetTop + 'px';
        newApp.style.left = el.offsetLeft + 'px';
    
        el.appendChild(newApp);

        openNewApp('./sources/html/' + el.getAttribute('app') + 'App.html');

        setTimeout(() => {
            newApp.remove();
        }, 500);
    });
})

function setTime() {
    let time = new Date(Date.now());

    let hours = time.getHours();
    hours = hours % 12;
    if(hours == 0) hours = 12;
    let mins = time.getMinutes();
    if(mins < 10) mins = '0' + mins;

    const timeStr = hours + ":" + mins;

    return timeStr;
}


function setDate() {
    const date = new Date(Date.now());

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Firday',
        'Saturday',
    ]

    const month = months[date.getMonth()];
    const dayOfWeek = days[date.getDay()];

    const dateStr = `${dayOfWeek}, ${month} ${date.getDate()}`;

    return dateStr;
}

const timeInterval = setInterval(() => { 
    document.getElementById('topBarTimeP').innerText = setTime();
    document.getElementById('lockTime').innerText = setTime();
    document.getElementById('lockDate').innerText = setDate();
 });

function iframeLoad() {
    let currentApp = document.getElementById('currentApp');
    if(currentApp.children[0].attributes.src.value == '') return;    

    let theme = currentApp.children[0].contentDocument.head.querySelector('meta[theme]').getAttribute('theme')
    
    currentApp.style.background = currentApp.children[0].contentWindow.getComputedStyle(currentApp.children[0].contentDocument.body).background;

    if(theme == 'light') {
        document.getElementById('topBarTimeP').style.color = 'black';
        document.querySelectorAll('.topBar-right > div').forEach((el) => {
            el.style.filter = 'invert(1)';
        });

    } else {
        document.getElementById('topBarTimeP').style.color = 'white';
    }
        
    //? Creates a custom event that can sync all global variables to the main window when the app is clicked,
    //? Check `syncVars.js` for more info.

    currentApp.children[0].contentWindow.CONNECTIONVARIABLES = window.CONNECTIONVARIABLES;
    currentApp.children[0].contentWindow.appSpecificFunction();

    currentApp.children[0].contentDocument.body.setAttribute('onclick', "document.dispatchEvent(new CustomEvent('SyncVariables', { detail: window.CONNECTIONVARIABLES }))");

    currentApp.children[0].contentDocument.addEventListener('SyncVariables', (variables) => {
        syncVariables(variables.detail);
    });
}

function openNewApp(link) {
    let currentApp = document.getElementById('currentApp');
    currentApp.children[0].src = link;

    if(currentApp.classList.contains('noApp')) currentApp.classList.remove('noApp');

    currentApp.children[0].addEventListener('load', iframeLoad, true);


    setTimeout(()=> { 
        if(currentApp.children[0].contentDocument.body.innerText.includes('Cannot GET') || currentApp.children[0].contentDocument.body.innerText.includes('404')) {
            closeApp();
        } 
    }, 300)
}

function closeApp() {
    let currentApp = document.getElementById('currentApp');
    let iframe = currentApp.children[0];
    iframe.removeEventListener('load', iframeLoad, true);
    currentApp.classList.add('noApp');

    currentApp.style.background = 'transparent';
    document.getElementById('topBarTimeP').style.color = '';
    document.querySelectorAll('.topBar-right > div').forEach((el) => {
        el.style.filter = '';
    });





    if(iframe.src.includes('AppleMusic')) {
        if(CONNECTIONVARIABLES.media.audio.playing) {
            DynamicIslandShowcase('MusicNotification');
            //setTimeout(() => { DynamicIslandShowcase('Empty'); }, 5000);
        }
    }





    setTimeout(() => { iframe.src = ''; }, 450);
}


function switchAppearance() {
    if(!window.CONNECTIONVARIABLES.settings.display_brightness_appearance) return;

    let darkVariantIcons = [];

    document.querySelectorAll('div.homeIcon > img').forEach((el) => {
        if(el.src.includes('DarkLight/')) {
            console.log(`${el.alt} has a dark variant.`);
            darkVariantIcons.push(el);
        } else {
            console.log(`${el.alt} does not have a dark variant.`);
        }
    });

    if(window.CONNECTIONVARIABLES.settings.display_brightness_appearance == 'dark') {
        document.body.classList.add('dark');

        darkVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('DarkLight/', 'DarkLight/DarkMode/').replace('DarkMode/DarkMode/', 'DarkMode/');
        });
    } else {
        document.body.classList.remove('dark');

        darkVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('DarkLight/DarkMode/', 'DarkLight/');
        });
    }
}


//! HomeScreen Scrolling

let HS_page = 0;

document.getElementById('HS_Pages').addEventListener('wheel', (e) => {
    e.preventDefault()
});

document.getElementById('HS_Pages').addEventListener('scroll', (e) => {
    e.preventDefault()
});

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        HS_page -= 1;
        if(HS_page < 0) HS_page = 0;
        fixHSScroll();
        e.preventDefault();
    } else if(e.key === 'ArrowRight') {
        HS_page += 1;
        if(HS_page > (document.querySelectorAll('.HS_Page').length - 1)) HS_page = (document.querySelectorAll('.HS_Page').length - 1);
        fixHSScroll();
        e.preventDefault();
    }
    return;
});

let mouseDown = false;
let directionL = false; //Right
let startX, scrollLeft;
const HomeScreen = document.querySelector('#HS_Pages');

const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - HomeScreen.offsetLeft;
    scrollLeft = HomeScreen.scrollLeft;
}

const stopDragging = (e) => {
    if(!mouseDown) return;
    mouseDown = false;

    if(directionL) {
        if(HomeScreen.scrollLeft < (216 * HS_page)) {
            HS_page -= 1;
            fixHSScroll();
        } else {
            fixHSScroll();
        }
    } else {
        if(HomeScreen.scrollLeft > (216 * (HS_page + 1))) {
            HS_page += 1;
            fixHSScroll();
        } else {
            fixHSScroll();
        }
    }
}

const move = (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - HomeScreen.offsetLeft;
    const scroll = x - startX;
    HomeScreen.scrollLeft = scrollLeft - scroll;

    if(scroll > 0) {
        directionL = true;
    } else {
        directionL = false;
    }
}

HomeScreen.addEventListener('pointermove', move, false);
HomeScreen.addEventListener('pointerdown', startDragging, false);
HomeScreen.addEventListener('pointerup', stopDragging, false);
HomeScreen.addEventListener('pointerleave', stopDragging, false);

document.querySelectorAll('div.pageSelection').forEach((pageSel) => {
    pageSel.addEventListener('click', () => {
        document.querySelectorAll('div.pageSelection').forEach((e) => { e.classList.remove('active')});
        document.querySelector(`div.pageSelection[data-page="${pageSel.dataset.page}"]`).classList.add('active');
        HS_page = pageSel.dataset.page;
        fixHSScroll()
    });
});

function fixHSScroll() {
    document.querySelector('#HS_Pages').scrollTo({
        top: 0,
        left: HS_page * 432,
        behavior: "smooth",
    });

    document.querySelector('div.pageSelection.active').classList.remove('active');

    document.querySelector(`div.pageSelection[data-page='${HS_page}']`).classList.add('active');
}


//! Control Center

const CC_Bar = document.getElementById('controlCenterBar');

let ccOpen = false;

CC_Bar.addEventListener('click', () => {
    ccOpen = !ccOpen;

    if(ccOpen) document.getElementById('controlCenter').classList.add('open'); 
    if(!ccOpen) document.getElementById('controlCenter').classList.remove('open'); 

    if(ccOpen) CC_Bar.innerText = 'Close CC';
    if(!ccOpen) CC_Bar.innerText = 'Open CC';

    if(ccOpen) document.getElementById('topBar').classList.add('ccOpen');
    if(!ccOpen) document.getElementById('topBar').classList.remove('ccOpen');
});