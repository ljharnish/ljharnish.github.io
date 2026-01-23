document.querySelector('#HS_Pages').scrollTo(0, 0);

document.addEventListener('keyup', (key) => {
    if(key.key == 'Escape') closeApp();
    return;
});

document.querySelectorAll('img').forEach((el) => {
    el.draggable = false;
    el.style.pointerEvents = 'none';
});

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

    // Check if contentDocument is accessible (may be null due to cross-origin restrictions)
    if(!currentApp.children[0].contentDocument) return;

    let theme = currentApp.children[0].contentDocument.head?.querySelector('meta[theme]')?.getAttribute('theme');

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
    
    // Try to call appSpecificFunction if it exists
    if (typeof currentApp.children[0].contentWindow.appSpecificFunction === 'function') {
        currentApp.children[0].contentWindow.appSpecificFunction();
    }

    // Setup syncing - use both methods for maximum compatibility
    // Method 1: Direct event listener (only works if contentDocument is accessible)
    if (currentApp.children[0].contentDocument) {
        currentApp.children[0].contentDocument.body.setAttribute('onclick', "document.dispatchEvent(new CustomEvent('SyncVariables', { detail: window.CONNECTIONVARIABLES })); window.parent.postMessage({ type: 'SyncVariables', variables: window.CONNECTIONVARIABLES }, '*');");

        currentApp.children[0].contentDocument.addEventListener('SyncVariables', (variables) => {
            syncVariables(variables.detail);
            window.parent.postMessage({ type: 'SyncVariables', variables: variables.detail }, '*');
        });

        currentApp.children[0].contentDocument.addEventListener('ReloadPage', () => {
            location.reload();
        });
    } // Close the contentDocument check block
}

function openNewApp(link, scale) {
    let currentApp = document.getElementById('currentApp');
    currentApp.children[0].src = link;

    if(currentApp.classList.contains('noApp')) currentApp.classList.remove('noApp');

    currentApp.children[0].addEventListener('load', iframeLoad, true);

    if(scale) currentApp.children[0].style.scale = scale, currentApp.style.background = 'black';
    else currentApp.children[0].style.scale = 1, currentApp.style.background = 'transparent';

    if(link.includes('http')) currentApp.children[0].classList.add('webApp');
    else currentApp.children[0].classList.remove('webApp');

    setTimeout(()=> { 
        const doc = currentApp.children[0].contentDocument;
        if(doc?.body?.innerText?.includes('Cannot GET') || doc?.body?.innerText?.includes('404')) {
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

    setTimeout(() => { iframe.src = ''; }, 450);
}

function switchAppearance() {
    if(window.CONNECTIONVARIABLES.debug.iconTint) {
        document.documentElement.style.setProperty('--iconTint', window.CONNECTIONVARIABLES.debug.iconTint);
    }

    if(window.CONNECTIONVARIABLES.debug.iconTintOpacity) {
        document.documentElement.style.setProperty('--iconTintOpacity', window.CONNECTIONVARIABLES.debug.iconTintOpacity);
    }

    document.body.classList.remove('tintedIcons');
    document.body.classList.remove('clearIcons');
    document.body.classList.remove('dark');

    switch(window.CONNECTIONVARIABLES.debug.debug_hs_icons) {
        case 0: //? Light Icons
            document.querySelectorAll('div.homeIcon > img').forEach((e) => {
                if(e.getAttribute('custom') != 'true') e.src = `./sources/image/App Icons/${e.alt}.png`
            });
            break;
        case 1: //? Dark Icons
            document.querySelectorAll('div.homeIcon > img').forEach((e) => {
                if(e.getAttribute('custom') != 'true') e.src = `./sources/image/App Icons/Dark/${e.alt}.png`
            });
            break;
        case 2: //? Clear Icons
            document.querySelectorAll('div.homeIcon > img').forEach((e) => {
                if(e.getAttribute('custom') != 'true') e.src = `./sources/image/App Icons/Clear/${e.alt}.png`
            });
            break;
        case 3: //? Tinted Icons
            document.body.classList.add('tintedIcons');
            document.querySelectorAll('div.homeIcon > img').forEach((e) => {
                if(e.getAttribute('custom') != 'true') e.src = `./sources/image/App Icons/Clear/${e.alt}.png`
            });
            break;
        default: //? Error - resort to Light Icons
            window.CONNECTIONVARIABLES.debug.debug_hs_icons = 0;
            break;
    }

    if(window.CONNECTIONVARIABLES.settings.display_brightness_appearance == 'dark') document.body.classList.add('dark');
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
let directionU = false; // Down
let startX, 
    startY, 
    scrollX, 
    scrollY, 
    scrollLeft,
    startTime,
    endTime;
const HomeScreen = document.querySelector('#HS_Pages');

const startDragging = (e) => {
    mouseDown = true;
    startTime = new Date(Date.now());
    startX = e.pageX - HomeScreen.offsetLeft;
    startY = e.pageY - HomeScreen.offsetTop;
    scrollLeft = HomeScreen.scrollLeft;
    scrollX = 0;
    scrollY = 0;
}

const stopDragging = (e) => {
    if(!mouseDown) return;
    mouseDown = false;

    let tolerance = 200;

    if(directionL) {
        if(HomeScreen.scrollLeft < (((parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32)/2) * HS_page) + tolerance) {
            HS_page -= 1;
            if(HS_page < 0) HS_page = 0;
            fixHSScroll();
        } else {
            fixHSScroll();
        }
    } else {
        if(HomeScreen.scrollLeft > (((parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32)/2) * (HS_page + 1)) - tolerance) {
            HS_page += 1;
            if(HS_page > (document.querySelectorAll('.HS_Page').length - 1)) HS_page = (document.querySelectorAll('.HS_Page').length - 1);
            fixHSScroll();
        } else { 
            fixHSScroll();
        }
    }

    if(!directionU) {
        if(scrollY > 100) {
            //? open spotlight
        }
    }

    fixHSScroll();
}

const move = (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - HomeScreen.offsetLeft;
    const y = e.pageY - HomeScreen.offsetTop;
    scrollX = x - startX;
    scrollY = y - startY;
    HomeScreen.scrollLeft = scrollLeft - scrollX;

    if(scrollX > 0) {
        directionL = true;
    } else {
        directionL = false;
    }

    if(scrollY < 0) { 
        directionU = true;
    } else {
        directionU = false;
    }
}

HomeScreen.addEventListener('pointermove', move, false);
HomeScreen.addEventListener('pointerdown', startDragging, false);
HomeScreen.addEventListener('pointerup', stopDragging, false);
HomeScreen.addEventListener('pointerleave', stopDragging, false);

function fixHSScroll() {
    document.querySelector('#HS_Pages').scrollTo({
        top: 0,
        left: HS_page * (parseInt(getComputedStyle(document.querySelector('.HS_Page')).width.replace('px', '')) + 32),
        behavior: "smooth",
    });

    document.querySelector('div.pageSelection.active').classList.remove('active');

    document.querySelector(`div.pageSelection[data-page='${HS_page}']`).classList.add('active');
}

function toggleLockPhone() {
    document.getElementById('ios26').classList.toggle('locked');

    if(document.getElementById('ios26').classList.contains('locked')) {
        document.getElementById('lockScreen').classList.remove('closed');
    }
}

function setLockPhone(lock) {
    if(lock) {
        document.getElementById('ios26').classList.add('locked');
    } else {
        document.getElementById('ios26').classList.remove('locked');
    }
}

let alertQueue = [];
let alertOpen = false;

function tryAlert(alertObj) {
    if(!alertOpen && alertQueue.length > 0) {
        document.getElementById('alertScreen').classList.add('alertOpen');
        document.getElementById('alertScreen').appendChild(alertQueue[0]);
        alertQueue.splice(alertQueue.indexOf(alertObj), 1);
        alertOpen = true;
    }
}

function closeAlert(alertObj) {
    alertObj.remove();
    document.getElementById('alertScreen').classList.remove('alertOpen');
    alertOpen = false;
    setTimeout(() => {tryAlert(); }, 500);
}

class Alert {
    constructor(header='Header', description='Description', buttonsList=[
        {text:'Close',type:'highlight',function:'close'}
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
							<p>${this.description.replaceAll('\n', '<br>')}</p>
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
                    button.addEventListener('click', ()=>{closeAlert(alert)});
                } else if(btn.function == 'backpage') {
                    button.addEventListener('click', ()=>{history.back()})
                } else if(btn.function) {
                    if(btn.closeAfterFunc) button.addEventListener('click', ()=>{btn.function();closeAlert(alert)});
                    else button.addEventListener('click', ()=>{btn.function();});
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
        alertQueue.push(alert);
        tryAlert(alert);
    }
}

function unlockPhone() {
    document.getElementById('lockScreen').classList.add('closed');
    document.getElementById('homeScreen').classList.remove('animate');
    setTimeout(() => { document.getElementById('homeScreen').classList.add('animate'); }, 50);
}

let HS_pageArray = [
    [
        {
            type: 'widget',
            widgetSize: {x:2,y:2},
            widgetType: 'health'
        },
        {
            name: 'Developer Panel',
            icon: 'Xcode',
            app: 'DevPanel'
        },
        {
            name: 'Info',
            icon: 'Feedback Assistant',
            app: 'Info'
        },
        {
            name: 'Calculator',
            icon: 'Calculator',
            app: 'Calculator'
        },
        {
            name: 'Formbar',
            customIcon: 'https://raw.githubusercontent.com/csmith1188/Formbar.ts-client/refs/heads/main/public/img/FormbarLogo2.png',
            app: 'https://formbeta.yorktechapps.com'
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'mvUP',
            customIcon: 'https://wumbo.net/symbols/up-arrow/feature_hu_a34562865ae1f118.png',
            event: {
                type: 'moveCharacter',
                direction: 'up'
            }
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'mvLEFT',
            customIcon: 'https://wumbo.net/symbols/up-arrow/feature_hu_a34562865ae1f118.png',
            event: {
                type: 'moveCharacter',
                direction: 'left'
            }
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'mvLEFT',
            customIcon: 'https://wumbo.net/symbols/up-arrow/feature_hu_a34562865ae1f118.png',
            event: {
                type: 'moveCharacter',
                direction: 'right'
            }
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'blank',
            customIcon: '',
        },
        {
            name: 'mvDOWN',
            customIcon: 'https://wumbo.net/symbols/up-arrow/feature_hu_a34562865ae1f118.png',
            event: {
                type: 'moveCharacter',
                direction: 'down'
            }
        },
    ]
];

const dockArray = [
    {
        name: 'Phone',
        icon: 'Phone',
    },
    {
        name: 'Safari',
        icon: 'Safari',
        app: 'Safari'
    },
    {
        name: 'Messages',
        icon: 'Messages'
    },
    {
        name: 'Apple Music',
        icon: 'Apple Music',
    }
]

class Widget {
    constructor(type="", size={x:0,y:0}, hs_icons) {
        this.type = type;
        this.size = size;
        this.hs_icons = hs_icons;
        
        this.buildWidget();
    }
    
    buildWidget() {
        const widgetDiv = document.createElement('div');

        const sizeStr = `${this.size.x}x${this.size.y}`;

        switch(sizeStr) {
            case '2x2':
                widgetDiv.classList.add('widgetSmall');
                break;
            case '4x2':
                break;
            case '4x4':
                break;
            default:
                break;
        }

        switch(this.type) {
            case 'batteryWidget':
                if(this.size.x == 2 && this.size.y == 2) {
                    widgetDiv.classList.add('batteryWidget');
                    widgetDiv.innerHTML = `<div class="batteryLabel"><img src="./sources/image/UI_Elements/phone-icon.png" alt="iPhone Battery Icon"><canvas width="110" height="110"></canvas></div><div class="batteryText">100%</div>`;
                    

                    const canv = widgetDiv.querySelector('canvas');

                    setupSmallBatteryWidget(canv);

                    function setupSmallBatteryWidget(canvas) {
                        canvas.width = 300;
                        canvas.height = 300; 
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

                        const circleSize = 125;
                        const thickness = 30;

                        function render(canvas) {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            const step = 360 / 24;
                            ctx.fillStyle = 'black';
                            for (let i = 0; i < 360; i+=step) {
                                ctx.beginPath();
                                ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(360));
                                ctx.strokeStyle = '#00000003';
                                ctx.lineWidth = thickness;
                                ctx.lineCap = 'round';
                                ctx.stroke();

                                ctx.beginPath();
                                ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(bP2Deg(window.CONNECTIONVARIABLES.battery.level)));
                                ctx.strokeStyle = colorBP(window.CONNECTIONVARIABLES.battery.level);
                                ctx.lineWidth = thickness;
                                ctx.lineCap = 'round';
                                ctx.stroke();
                            } 
                        }
                        render(canvas);
                        setInterval(()=>{render(canvas)},1000);
                    }
                }
                break;
            case 'health':
                if(this.size.x == 2 && this.size.y == 2) {
                    widgetDiv.classList.add('healthWidget');
                    widgetDiv.innerHTML = `
                    <div style="color:white;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;font-size:32px">
                        <h1 id="actor">Hero</h1>
                        <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
"><p>HP:</p>&nbsp;<span id="healthWidgetHP">544</span>
                        </div>
                        <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
"><p>MP:</p>&nbsp;<span id="healthWidgetMP">41</span></div>
                    </div>`;1
                }
                break;    
            default:
                console.log('Undefined Type of Widget');
        }

        this.hs_icons.appendChild(widgetDiv);
    }
}

let playerVariables = {};

function updatePlayerVariables(variables) {
    playerVariables = variables;

    document.getElementById('healthWidgetHP').innerText = playerVariables._hp;
    document.getElementById('healthWidgetMP').innerText = playerVariables._mp;
    document.getElementById('actor').innerText = playerVariables._name;
    // document.getElementById('healthWidgetLevel').innerText = playerVariables.level;
}

//? there HAS to be a better way for this

function updateHomeScreen() {

    document.getElementById('HS_Pages').innerHTML = '';
    document.getElementById('pageSelector').innerHTML = '';
    document.querySelectorAll('div#HS_dockInner div.homeIcon').forEach((i)=>i.remove());

    let rowAmount = Math.floor((window.innerHeight - 282)/112);

    console.log(`A home screen page can hold ${rowAmount * 4} icons at this height.`);

    HS_pageArray.forEach((page) => {
        if(page.length > (rowAmount * 4)) {
            //? Put extras on new page,
            const extras = HS_pageArray[HS_pageArray.indexOf(page)].splice(rowAmount * 4);
            const nextPage = HS_pageArray.indexOf(page) + 1;
            if(HS_pageArray[nextPage] == undefined) {
                HS_pageArray[nextPage] = extras;
            } else {
                extras.forEach((extra) => HS_pageArray[nextPage].unshift(extra));
            }
        }
    })

    HS_pageArray.forEach((page) => {
        if(page.length == 0) return;
        const HS_Page = document.createElement('div');
        HS_Page.className = 'HS_Page';
        const HS_Icons = document.createElement('div');
        HS_Icons.className = 'HS_Icons';

        HS_Page.appendChild(HS_Icons);

        page.forEach((icon) => {
            if(icon.type === 'widget') {
                //? Exceptions for widgets.
                new Widget(icon.widgetType, icon.widgetSize, HS_Icons);
            }
            
            if(icon.icon) {
                //? Exception for apps with different icons.
                const iconEl = document.createElement('div');
                iconEl.className = 'homeIcon';
                if(icon.app) {
                    iconEl.setAttribute('app', icon.app);

                    iconEl.addEventListener('click', () => {
                        iconEl.classList.add('homeIconClick');

                        let newApp = document.createElement('div');
                        newApp.classList.add('homeIconShow');
                        newApp.innerHTML = `<img src="${iconEl.querySelector('img').src}" alt="">`;
                        //newApp.style.top = el.offsetTop + 'px';
                        //newApp.style.left = el.offsetLeft + 'px';
                    
                        document.getElementById('ios26').appendChild(newApp);

                        openNewApp('./sources/html/' + iconEl.getAttribute('app') + 'App.html');

                        setTimeout(() => {
                            newApp.remove();
                        }, 500);
                    });
                } else {
                    iconEl.addEventListener('click', () => {
                        new Alert(
                            `"${icon.name}" App`,
                            `The "${icon.name}" App has not yet been implemented.`,
                            [
                                {
                                    text:'Close',
                                    type:'highlight',
                                    function:'close'
                                }
                            ],
                            1
                        )
                    });
                }

                const iconImg = document.createElement('img');
                iconImg.src = `./sources/image/App Icons/${icon.icon}.png`;
                iconImg.alt = icon.icon;

                const iconLabel = document.createElement('p');
                iconLabel.innerText = icon.name;

                iconEl.appendChild(iconImg);
                iconEl.appendChild(iconLabel);

                HS_Icons.appendChild(iconEl);

                return;
            }
            
            if(icon.customIcon || icon.name == 'blank') {
                //? Exception for custom icon URLs, tested with the Spotify app.
                const iconEl = document.createElement('div');
                iconEl.className = 'homeIcon';
                if(icon.app) {
                    iconEl.setAttribute('app', icon.app);

                    iconEl.addEventListener('click', () => {
                        iconEl.classList.add('homeIconClick');

                        let newApp = document.createElement('div');
                        newApp.classList.add('homeIconShow');
                        newApp.innerHTML = `<img src="${iconEl.querySelector('img').src}" alt="">`;
                        //newApp.style.top = el.offsetTop + 'px';
                        //newApp.style.left = el.offsetLeft + 'px';
                    
                        document.getElementById('ios26').appendChild(newApp);
                        openNewApp(icon.app);

                        setTimeout(() => {
                            newApp.remove();
                        }, 500);
                    });
                }

                const iconImg = document.createElement('img');
                iconImg.setAttribute('custom', true);
                iconImg.src = icon.customIcon;
                iconImg.alt = icon.name;

                const iconLabel = document.createElement('p');
                iconLabel.innerText = icon.name;

                iconEl.appendChild(iconImg);
                iconEl.appendChild(iconLabel);

                HS_Icons.appendChild(iconEl);

                if(icon.event) {
                    iconEl.className = 'homeIcon';
                    iconEl.addEventListener('click', () => {
                        window.parent.postMessage({ type: 'CustomEvent', variables: { type:'CustomEvent', event: icon.event.type, ...icon.event } }, '*');
                    });
                }

                return;
            }

            
        });

        document.getElementById('HS_Pages').appendChild(HS_Page);

        const newPageSel = document.createElement('div');
        newPageSel.classList.add('pageSelection');
        newPageSel.dataset.page = HS_pageArray.indexOf(page);
        
        newPageSel.addEventListener('click', () => {
            document.querySelectorAll('div.pageSelection').forEach((e) => { e.classList.remove('active')});
            document.querySelector(`div.pageSelection[data-page="${newPageSel.dataset.page}"]`).classList.add('active');
            HS_page = parseInt(newPageSel.dataset.page);
            fixHSScroll()
        });

        if(newPageSel.dataset.page == HS_page) newPageSel.classList.add('active');
        document.getElementById('pageSelector').appendChild(newPageSel);
    });

    dockArray.forEach((icon) => {
        if(icon.icon) {
            //? Exception for apps with different icons.
            const iconEl = document.createElement('div');
            iconEl.className = 'homeIcon';
            if(icon.app) {
                iconEl.setAttribute('app', icon.app);

                iconEl.addEventListener('click', () => {
                    iconEl.classList.add('homeIconClick');

                    let newApp = document.createElement('div');
                    newApp.classList.add('homeIconShow');
                    newApp.innerHTML = `<img src="${iconEl.querySelector('img').src}" alt="">`;
                    //newApp.style.top = el.offsetTop + 'px';
                    //newApp.style.left = el.offsetLeft + 'px';
                
                    document.getElementById('ios26').appendChild(newApp);

                    switch(iconEl.getAttribute('app')) {
                        case 'iOS-26':
                            openNewApp('https://ljharnish.github.io/extras/Interfaces/iOS-Versions/iOS-26', 0.95);
                            break;
                        case 'iOS-18':
                            openNewApp('https://ljharnish.github.io/extras/Interfaces/iOS-Versions/iOS-18', 0.95);
                            break;
                        default:
                            openNewApp('./sources/html/' + iconEl.getAttribute('app') + 'App.html');
                            break;
                    }

                    setTimeout(() => {
                        newApp.remove();
                    }, 500);
                });
            } else {
                iconEl.addEventListener('click', () => {
                    new Alert(
                        `"${icon.name}" App`,
                        `The "${icon.name}" App has not yet been implemented.`,
                        [
                            {
                                text:'Close',
                                type:'highlight',
                                function:'close'
                            }
                        ],
                        1
                    )
                });
            }

            const iconImg = document.createElement('img');
            iconImg.src = `./sources/image/App Icons/${icon.icon}.png`;
            iconImg.alt = icon.icon;

            const iconLabel = document.createElement('p');
            iconLabel.innerText = icon.name;

            iconEl.appendChild(iconImg);
            iconEl.appendChild(iconLabel);

            document.getElementById('HS_dockInner').appendChild(iconEl);

            return;
        }
        
        if(icon.customIcon) {
            //? Exception for custom icon URLs, tested with the Spotify app.
        }
    });
}

updateHomeScreen();

document.querySelectorAll('div.homeIcon > img').forEach((e) => {
    e.addEventListener('error', () => {
        
        if(document.body.classList.contains('clearIcons')) {
            e.src = './sources/image/App Icons/Clear/Blank.png';
            return;
        }

        if(document.body.classList.contains('dark')) {
            e.src = './sources/image/App Icons/Dark/Blank.png';
            return;
        }
        
        if(e.alt == 'blank') {
            e.style.display = 'none';
            e.parentElement.style.opacity = '0';
            return;
        }

        e.src = './sources/image/App Icons/Blank.png';
    })
});