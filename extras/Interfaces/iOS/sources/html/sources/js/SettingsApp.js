const settingsTable = {
    categories: [
        [
            {  
                name: "Airplane Mode",
                id: "airplaneMode",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'orange',
                    glyph: 'airplane'
                },
                right: {
                    type: 'switch',
                    //? Toggle the data[toggleData] value if a boolean
                    toggleData: 'enabled'
                }
            },
            {  
                name: "Wi-Fi", 
                id: "wifi",
                data: {
                    enabled: false,
                    connected: false,
                    ssid: ''
                },
                icon: {
                    color: 'blue',
                    glyph: 'wifi'
                },
                right: {
                    enabled: false,
                    text: "GeniusBar-Guest",
                    type: 'arrow'
                }
            },
            {  
                name: "Bluetooth",
                id: "bluetooth",
                data: {
                    enabled: false,
                    connected: false,
                    name: ''
                },
                icon: {
                    color: 'blue',
                    glyph: 'bluetooth'
                },
                right: {
                    text: "On",
                    type: 'arrow'
                }
            },
            {  
                name: "Cellular",
                id: "cellular",
                data: {
                    enabled: false,
                    connected: false,
                    carrier: ''
                },
                icon: {
                    color: 'green',
                    glyph: 'antenna.radiowaves.left.and.right'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Personal Hotspot", 
                id: "hotspot",
                data: {
                    enabled: false,
                    ssid: ''
                },
                icon: {
                    fixedHeight: '75',
                    color: 'green',
                    glyph: 'personalhotspot'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Battery", 
                icon: {
                    fixedHeight: '75',
                    color: 'green',
                    glyph: 'battery.100'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "VPN", 
                id: "vpn",
                data: {
                    connected: false,
                    name: ''
                },
                icon: {
                    color: 'blue',
                    glyph: 'globe'
                },
                right: {
                    text: 'Not Connected',
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "General",
                description: "Manage your overall setup and preferences for iPhone, such as software updates, device language, CarPlay, AirDrop, and more.",
                icon: {
                    color: 'grey',
                    glyph: 'gear'
                },
                right: {
                    type: 'arrow'
                },
                categoryHeader: {
                    icon: {
                        color: 'grey',
                        glyph: 'gear'
                    }
                },
                innerSettings: [
                    {  
                        name: "About",
                        id: "general-about",
                        data: {
                            enabled: false
                        },
                        icon: {
                            color: 'grey',
                            glyph: 'sun.max'
                        },
                        right: {
                            type: 'arrow'
                        }
                    }
                ]
            },
            {  
                name: "Accessibility", 
                icon: {
                    color: 'blue',
                    glyph: 'person.circle'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Camera", 
                icon: {
                    color: 'grey',
                    glyph: 'camera.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Control Center", 
                icon: {
                    color: 'grey',
                    glyph: 'control.center'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Display & Brightness", 
                icon: {
                    color: 'blue',
                    glyph: 'sun.max.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Home Screen & App Library", 
                icon: {
                    color: 'blue',
                    glyph: 'app.badge.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Search", 
                icon: {
                    color: 'grey',
                    glyph: 'magnifyingglass'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Siri", 
                icon: {
                    image: '../image/Siri-Square.jpg',
                },
                right: {
                    type: 'arrow'
                }
            },
            {
                name: "Wallpaper",
                icon: {
                    color: 'light-blue',
                    glyph: 'wand.and.rays.inverse'
                },
                right: {
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "Notifications",

                icon: {
                    color: 'red',
                    glyph: 'bell.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Sounds & Haptics",

                icon: {
                    fixedHeight: '75',
                    color: 'pink',
                    glyph: 'speaker.3.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Focus",

                icon: {
                    color: 'purple',
                    glyph: 'moon.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Screen Time",

                icon: {
                    color: 'purple',
                    glyph: 'hourglass'
                },
                right: {
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "Face ID & Passcode",

                icon: {
                    color: 'green',
                    glyph: 'faceid'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Emergency SOS",

                icon: {
                    color: 'red',
                    glyph: 'staroflife.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Privacy & Security",

                icon: {
                    color: 'blue',
                    glyph: 'hand.raised.fill'
                },
                right: {
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "Assets by Apple",

                icon: {
                    color: 'grey',
                    glyph: 'camera.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Code by ljharnish",

                icon: {
                    color: 'grey',
                    glyph: 'command'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Thanks for coming!",

                icon: {
                    color: 'grey',
                    glyph: 'heart.circle.fill'
                },
                right: {
                    type: 'arrow'
                }
            }
        ]
    ]
};

const settingsHolder = document.getElementById("settingsHolder");

function loadSettings() {
    console.log("Loading settings...");

    let settingNum = 0;

    settingsTable.categories.forEach(category => {
        if(category.length == 0) return; // Skip empty categories
        console.log(category)

        const categoryDiv = document.createElement("div");
        categoryDiv.className = "settingsCategory";
        
        category.forEach(setting => {
            const settingDiv = document.createElement("div");
            settingDiv.className = "setting";
            settingDiv.id = setting.id;
            
            const iconSide = document.createElement("div");
            iconSide.className = "iconSide";

            const categoryInner = document.createElement('div');
            
            if(setting.innerSettings) {
                handleNewCategory(setting, categoryInner);
            }
            
            const iconInner = document.createElement("div");
            iconInner.className = "icon " + setting.icon.color + "-icon";

            if(!setting.icon.image) { 

                const iconSymbol = document.createElement("sf-symbol");
                if(setting.icon.fixedHeight) iconSymbol.style.height = setting.icon.fixedHeight + "%";
                iconSymbol.setAttribute("glyph", setting.icon.glyph);
                iconSymbol.setAttribute("color", "white");
                iconInner.appendChild(iconSymbol);

            } else {
                iconInner.style.backgroundImage = `url(${setting.icon.image})`;
            }

            iconSide.appendChild(iconInner);

            settingDiv.appendChild(iconSide);

            const textAndMore = document.createElement("div");
            textAndMore.className = "textAndMore";
            textAndMore.innerHTML = `<p>${setting.name}</p>`;

            if(setting.right) {
                if (setting.right.type === "switch") {
                    const appleSlider = document.createElement("div");
                    appleSlider.className = "appleSlider";
                    appleSlider.addEventListener('click', () => settingToggle(appleSlider, setting, setting.right.toggleData));

                    const appleSliderInner = document.createElement("div");
                    appleSliderInner.className = "appleSliderInner";

                    const appleSliderValue = document.createElement("div");
                    appleSliderValue.className = "appleSliderValue";

                    appleSliderInner.appendChild(appleSliderValue);
                    appleSlider.appendChild(appleSliderInner);
                    textAndMore.appendChild(appleSlider);

                    const switchInput = document.createElement("input");
                    switchInput.type = "checkbox";
                    textAndMore.appendChild(switchInput);

                    setTimeout(() => { setSlider(appleSlider, window.CONNECTIONVARIABLES.settings[setting.id], setting.right.toggleData) }, 10);

                } else if (setting.right.type === "arrow") {
                    
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    if(setting.right.text) textArrow.innerHTML = `<p>${setting.right.text}</p>`;
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "chevron.right");
                    arrowIcon.setAttribute("color", "white");
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);

                    settingDiv.addEventListener('click', () => {
                        categoryInner.classList.add('open');
                    });
                    
                }
            }

            
            settingDiv.appendChild(textAndMore);

            if(settingNum % 2 == 0) { settingDiv.classList.add("even"); }

            setTimeout(() => { categoryDiv.appendChild(settingDiv); }, 75 * settingNum++);
        });

        settingsHolder.appendChild(categoryDiv);
    });
}

function setSlider(slider, set, toggleData) {
    console.log(slider)

    slider.parentElement.querySelector("input").checked = set[toggleData];
    console.log(set[toggleData])
    
    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function settingToggle(slider, setting, toggleData) {
    console.log("Toggling setting: " + setting.id + " to " + !slider.parentElement.querySelector("input").checked);

    slider.parentElement.querySelector("input").checked = !slider.parentElement.querySelector("input").checked;

    setting.data[toggleData] = slider.parentElement.querySelector("input").checked;
    window.CONNECTIONVARIABLES.settings[setting.id] = setting.data;

    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function handleNewCategory(setting, categoryInner) {
    categoryInner.classList.add('categoryInner');
    categoryInner.id = 'category-' + setting.id;

    const titleBar = document.createElement('div');
    titleBar.classList.add('scrollTitleCategory');

    const backButton = document.createElement('div');
    backButton.classList.add('backButton');

    const backButtonButton = document.createElement('button');
    backButtonButton.addEventListener('click', () => {
        categoryInner.classList.remove('open');
    });
    backButtonButton.innerHTML = `<sf-symbol glyph='chevron.left'></sf-symbol>Settings`;

    backButton.appendChild(backButtonButton);
    titleBar.appendChild(backButton);

    const titleText = document.createElement('div');
    titleText.innerHTML = `<p>${setting.name}</p>`;
    titleBar.appendChild(titleText);

    const titleSpace = document.createElement('div');
    titleSpace.classList.add('spacer');
    titleBar.appendChild(titleSpace);
    categoryInner.appendChild(titleBar);

    const innerElements = document.createElement('div');
    innerElements.classList.add('categoryInnerElements');
    categoryInner.appendChild(innerElements);

    const categoryHeader = document.createElement('div');
    categoryHeader.classList.add('categoryHeader');

    const categoryHeaderIcon = document.createElement('div');
    categoryHeaderIcon.classList.add('icon');
    categoryHeaderIcon.classList.add(setting.icon.color + '-icon');
    categoryHeaderIcon.innerHTML = `<sf-symbol glyph="${setting.icon.glyph}" color="white"></sf-symbol>`

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = setting.name;

    const headerDesc = document.createElement('p');
    headerDesc.innerText = setting.description;

    categoryHeader.appendChild(categoryHeaderIcon);
    categoryHeader.appendChild(headerTitle);
    categoryHeader.appendChild(headerDesc);

    innerElements.appendChild(categoryHeader);

    /*categoryInner.innerHTML = `
    <div class="categoryHeader">
        <div class="icon ${setting.icon.color}-icon">
            <sf-symbol glyph="${setting.icon.glyph}" color="white"></sf-symbol>
        </div>
        <h1>${setting.name}</h1>
        <p>${setting.description}</p>
    </div>`*/

    //categoryInner.innerText = JSON.stringify(setting);
    
    categoryInner.appendChild(innerElements);

    document.body.appendChild(categoryInner);
}