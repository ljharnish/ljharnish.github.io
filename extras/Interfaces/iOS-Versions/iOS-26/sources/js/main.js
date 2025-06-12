document.querySelector('#HS_Pages').scrollTo(0, 0);

if(window.innerHeight > window.innerWidth) {
    document.body.classList.add('fullscreen');
    function requestFullScreen() {
        document.documentElement.requestFullscreen();
    }
    document.addEventListener('pointerdown', requestFullScreen, { once: true });
}

//! Random Call

setInterval(() => {
    let chance = Math.floor(Math.random() * 100);

    if(chance >= 95) {
        //DynamicIslandShowcase('NewCall');
    }
}, 60_000)

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

let mobileBrowser = window.mobileCheck();

const firefox = window.navigator.userAgent.includes('Firefox');


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
        'Friday',
        'Saturday',
    ]

    const month = months[date.getMonth()];
    const dayOfWeek = days[date.getDay()];

    const dateStr = `${dayOfWeek}, ${month} ${date.getDate()}`;

    return dateStr;
}

document.getElementById('topBarTimeP').innerText = setTime();
document.getElementById('lockTimeDiv').innerText = setTime();
document.getElementById('svgTextPath').children[0].innerHTML = setTime();
document.getElementById('lockDate').innerText = setDate();

const timeInterval = setInterval(() => { 
    document.getElementById('topBarTimeP').innerText = setTime();
    document.getElementById('lockTimeDiv').innerText = setTime();
    document.getElementById('svgTextPath').children[0].innerHTML = setTime();
    document.getElementById('lockDate').innerText = setDate();
}, 1000);

function iframeLoad() {
    let currentApp = document.getElementById('currentApp');
    if(currentApp.children[0].attributes.src.value == '') return;    

    let theme = currentApp.children[0].contentDocument.head.querySelector('meta[theme]').getAttribute('theme');

    if(document.body.classList.contains('dark')) {
        theme = 'dark';
    }
    
    currentApp.style.background = currentApp.children[0].contentWindow.getComputedStyle(currentApp.children[0].contentDocument.body).background;

    if(theme == 'light') {
        document.getElementById('topBarTimeP').style.color = 'black';
        document.querySelectorAll('.topBar-right > div').forEach((el) => {
            el.style.filter = 'invert(1)';
        });

    } else {
        document.getElementById('topBarTimeP').style.color = 'white';
        document.querySelectorAll('.topBar-right > div > sf-symbol').forEach((el) => {
            el.style.filter = 'invert(0)';
        });
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
    //if(!window.CONNECTIONVARIABLES.settings.display_brightness_appearance) return;
    if(window.CONNECTIONVARIABLES.debug.iconTint) {
        document.documentElement.style.setProperty('--iconTint', window.CONNECTIONVARIABLES.debug.iconTint);
    }

    if(window.CONNECTIONVARIABLES.debug.iconTintOpacity) {
        document.documentElement.style.setProperty('--iconTintOpacity', window.CONNECTIONVARIABLES.debug.iconTintOpacity);
    }

    let allVariantIcons = [];
    let darkVariantIcons = [];

    document.querySelectorAll('div.homeIcon > img').forEach((el) => {
        if(el.src.includes('DarkLight/')) {
            //console.log(`${el.alt} has a dark variant.`);
            darkVariantIcons.push(el);
        } else {
            //console.log(`${el.alt} does not have a dark variant.`);
        }
    });

    document.querySelectorAll('div.homeIcon > img').forEach((el) => {
        if(el.src.includes('allVariants/')) {
            //console.log(`${el.alt} has all icon variants.`);
            allVariantIcons.push(el);
        }
    });

    if(window.CONNECTIONVARIABLES.settings.display_brightness_appearance == 'dark') {
        document.body.classList.add('dark');

        darkVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('DarkLight/', 'DarkLight/DarkMode/').replace('DarkMode/DarkMode/', 'DarkMode/');
        });
        allVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('allVariants/', 'allVariants/Dark/').replace('/Dark/Dark/','/Dark/').replace('/Clear', '');
        });
    } else {
        document.body.classList.remove('dark');

        darkVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('DarkLight/DarkMode/', 'DarkLight/');
        });
        allVariantIcons.forEach((icon) => {
            icon.src = icon.src.replace('allVariants/Dark/', 'allVariants/');
        });
    }

    if(window.CONNECTIONVARIABLES.debug.clearIcons.enabled == true) {
        document.body.classList.add('clearIcons');

        allVariantIcons.forEach((icon) => {
            if(document.body.classList.contains('dark')) icon.src = icon.src.replace('allVariants/Dark/', 'allVariants/Clear/').replace('/Clear/Clear/','/Clear/');
            else icon.src = icon.src.replace('allVariants/', 'allVariants/Clear/').replace('/Clear/Clear/','/Clear/');
        });
    } else {
        if(document.body.classList.contains('dark')) {
            allVariantIcons.forEach((icon) => {
                icon.src = icon.src.replace('allVariants/Clear/', 'allVariants/Dark').replace('/Dark/Dark/','/Dark/');
            });
        } else {
            allVariantIcons.forEach((icon) => {
                icon.src = icon.src.replace('allVariants/Clear/', 'allVariants/');
            });
        }
    }

    if(window.CONNECTIONVARIABLES.debug.tintedIcons.enabled == true) {
        document.body.classList.add('tintedIcons');
    } else {
        document.body.classList.remove('tintedIcons')
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
        if(HomeScreen.scrollLeft < (((parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32)/2) * HS_page)) {
            HS_page -= 1;
            fixHSScroll();
        } else {
            fixHSScroll();
        }
    } else {
        if(HomeScreen.scrollLeft > (((parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32)/2) * (HS_page + 1))) {
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
        left: HS_page * (parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32),
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

const canvas = document.getElementById('batteryLabelCanvas');
const ctx = canvas.getContext('2d');
const deg2FDeg = (degrees) => (degrees - 90) * (Math.PI / 180);
const bP2Deg = (percent) => (360 / 100) * percent;

function colorBP(percent) {
    if(percent <= 10) {
        return '#eb3137'
    }
    if(percent <= 20) {
        return '#fecd0b'
    }
    return '#27cd41'
}

let batteryPercent = 23;

const circleSize = 125;
const thickness = 30;

window.addEventListener('load', _ => {
  canvas.width = 300;
  canvas.height = 300; 
  window.requestAnimationFrame(render);

changeBattery(window.CONNECTIONVARIABLES.battery.level);
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const step = 360 / 24;
    
    ctx.fillStyle = 'black';

    for (let i = 0; i < 360; i+=step) {
      const x = Math.cos(i * (Math.PI / 180)) * circleSize;
      const y = Math.sin(i * (Math.PI / 180)) * circleSize;
      
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(360));
      ctx.strokeStyle = '#00000003';
      ctx.lineWidth = thickness;
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(bP2Deg(batteryPercent)));
      ctx.strokeStyle = colorBP(batteryPercent);
      ctx.lineWidth = thickness;
      ctx.lineCap = 'round';
      ctx.stroke();
    } 

  window.requestAnimationFrame(render);
}

function changeBattery(percent) {
    document.querySelector('div.widgetSmall.batteryWidget div.batteryText').innerHTML = `${percent}%`
    batteryPercent = percent;
}

document.addEventListener('fullscreenchange', (e) => {
    if(window.fullScreen == false && window.innerWidth > window.innerHeight) document.body.classList.remove('fullscreen');
})

function toggleLockPhone() {
    document.getElementById('ios26').classList.toggle('locked');

    if(document.getElementById('ios26').classList.contains('locked')) {
        document.getElementById('lockScreen').classList.remove('closed');
    }
}


function unlockPhone() {
    document.getElementById('lockScreen').classList.add('closed');
    document.getElementById('homeScreen').classList.remove('animate');
    setTimeout(() => { document.getElementById('homeScreen').classList.add('animate'); }, 50);
}

class Alert {
    constructor(header='Header', description='Description', buttonsList=[
        {text:'Close',type:'highlight',function:'close'},
        {text:'Open Link',type:'highlight',link:'https://www.youtube.com',mobileLink:'https://m.youtube.com'},
    ], buttonsType=1) {
        this.header = header;
        this.description = description;
        this.buttonsList = buttonsList;
        this.buttonsType = buttonsType;
        
        this.buildAlert();
    }
    
    buildAlert() {
        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.innerHTML = `<div class="text">
							<h1>${this.header}</h1>
							<p>${this.description}</p>
						</div>`;

        let buttonDiv;

        if(this.buttonsType == 0) {
            //! Horizontal Buttons
            buttonDiv = document.createElement('div');
            buttonDiv.classList.add('horiButtons');
        } else {
            //! Vertical Buttons
            buttonDiv = document.createElement('div');
            buttonDiv.classList.add('vertButtons');
        }

        if(this.buttonsList.length <= 0) return;
        else {
            this.buttonsList.forEach((btn) => {
                const button = document.createElement('button');
                button.classList.add('alert_'+btn.type);
                button.innerText = btn.text;

                if(btn.function == 'close') {
                    button.addEventListener('click', ()=>{alert.remove();document.getElementById('alertScreen').classList.remove('alertOpen')});
                } else if(btn.function) {
                    if(typeof btn.function != 'function') return alert.remove();
                    button.addEventListener('click', ()=>{btn.function()});
                } else if(btn.link) {
                    if(mobileBrowser) {
                        button.addEventListener('click', ()=>{
                            window.open(btn.mobileLink, '_blank');
                        });
                    } else {
                        button.addEventListener('click', ()=>{
                            window.open(btn.link, '_blank');
                        });
                    }
                }

                buttonDiv.appendChild(button)
            });
        }

        alert.appendChild(buttonDiv);
        document.getElementById('alertScreen').classList.add('alertOpen');
        document.getElementById('alertScreen').appendChild(alert);
    }
}

if(firefox == false) {
    new Alert(
        'Browser Detection',
        'We detected you are running a browser this site is not designed for. For the best experience, switch to Firefox or Firefox Nightly.',
        [
            {
                text: 'Get Firefox',
                type: 'highlight',
                link:'https://www.mozilla.org/en-US/firefox/new/',
                mobileLink: 'https://www.mozilla.org/en-US/firefox/browsers/mobile/android'
            },

            {
                text: 'Get Firefox Nightly',
                type: 'highlight',
                link: 'https://www.mozilla.org/en-US/firefox/channel/desktop/',
                mobileLink: 'https://www.mozilla.org/en-US/firefox/channel/android/'
            },

            {
                text: 'Proceed Anyway',
                type: 'normal',
                function: 'close'
            }
], 1)
}


let batteryInterval = setInterval(() => {
    CONNECTIONVARIABLES.battery.level -= 1;
    changeBattery(CONNECTIONVARIABLES.battery.level)

    if(CONNECTIONVARIABLES.battery.level == 20) { 
        new Alert(
            'Low Battery',
            '20% battery remaining.',
            [
                {
                    text: 'Low Power Mode',
                    type: 'highlight',
                    function: 'close'
                },
                {
                    text: 'Close',
                    type: 'normal',
                    function: 'close'
                }
        ], 1)
    }

    if(CONNECTIONVARIABLES.battery.level == 0) { 
        clearInterval(batteryInterval);
        document.getElementById("bootScreen").classList.add("black");
        setTimeout(()=>{
            document.getElementById("bootScreen").classList.remove("black");
            document.getElementById("bootScreen").classList.add("deadPhone");

            setTimeout(()=>{
                document.getElementById("ios26").classList.add("locked");
            }, 1500)
        }, 1500)
    }
}, 10000)