const settingsTable = {
    categories: [
        [
            {
                title: 'Dangerous Options'
            },
            {  
                name: "Reset Saved Settings",
                icon: {
                    color: 'red',
                    glyph: 'gear'
                },
                right: {
                    type: 'button',
                    text: 'Reset',
                    onclick: "setTimeout(()=>{localStorage.removeItem('savedVars');document.dispatchEvent(new CustomEvent('ReloadPage'))},150)"
                }
            }
        ],
        [
            {
                title: "Processing Settings"
            },
            {
                name: "Super Performance Mode",
                id: "superPerformanceMode",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'black',
                    glyph: 'exclamationmark.triangle.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                name: "Performance Mode",
                id: "performanceMode",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'red',
                    glyph: 'exclamationmark.triangle'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                subtitle: "Perfomance Mode will disable new iOS 26 features, such as icon glow, Liquid Glass, and more effects. This may need to be used to get the best performance on devices as HTML is not suited for this.\n\nSuper Performance Mode brings this to another level, disabling all animations, backgrounds, transparency, shadows, transitions, etc."
            }
        ],
        [
            {
                title: "Debug iOS 26 Features"
            },
            {  
                name: "Test Alert (Horizontal)",
                icon: {
                    color: 'orange',
                    glyph: 'app.badge'
                },
                right: {
                    type: 'button',
                    text: 'Show Alert',
                    onclick: "document.dispatchEvent(new CustomEvent('DebugAlert', {detail:{type:0}}))"
                }
            },
            {  
                name: "Test Alert (Vertical)",
                icon: {
                    color: 'orange',
                    glyph: 'app.badge'
                },
                right: {
                    type: 'button',
                    text: 'Show Alert',
                    onclick: "document.dispatchEvent(new CustomEvent('DebugAlert', {detail:{type:1}}))"
                }
            }
        ],
        [
            {
                title: "Testing and Layouts"
            },
            {  
                name: "Show Debug Options",
                id: "showDebug",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'red',
                    glyph: 'wrench.fill'
                },
                right: {
                    type: 'switch',
                    //? Toggle the data[toggleData] value if a boolean
                    toggleData: 'enabled'
                }
            }

        ],
        [
            {
                title: "Home Screen"
            },
            {  
                name: "Home Screen Icon Type",
                id: "debug_hs_icons",
                icon: {
                    color: 'orange',
                    glyph: 'app.badge'
                },
                right: {
                    text: "",
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                name: 'Light',
                                type: 'radio',
                                checked: true
                            },
                            {
                                name: 'Dark',
                                type: 'radio',
                            },
                            {
                                name: 'Clear',
                                type: 'radio',
                            },
                            {
                                name: 'Tinted',
                                type: 'radio',
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Icon Tint",
                id: "iconTint",
                icon: {
                    color: 'rainbow',
                    glyph: 'eyedropper.full'
                },
                right: {
                    type: 'colorpicker'
                }
            },
            {
                id: "iconTint_slider",
                type: 'slider'
            },
            {
                name: "Show Labels",
                id: "showIconLabels",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'blue',
                    glyph: 'textformat.size'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {  
                name: "Show Invalid Icons",
                id: "showInvalidIcons",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'orange',
                    glyph: 'app.gift.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                subtitle: "Shows Icons on the Home Screen regardless of whether they do or do not yet have an app layout associated with them.\n\nThese icons will still be non-interactable and on non-mobile devices, a denial cursor will show."
            }
        ], 
        [
            {
                title: "Hardware"
            },
            {
                subtitle: "Battery Level:"
            },
            {
                id: "battery_level_slider",
                type: 'slider'
            }
        ]
    ]
};

function appSpecificFunction() {
    for (const [key, value] of Object.entries(CONNECTIONVARIABLES.debug)) {
        if(value.enabled) {
            let checkbox = document.getElementById(key + '-switch');
            let slider = checkbox.parentElement.querySelector('.appleSlider');

            checkbox.checked = value.enabled;

            if(slider && checkbox.checked) {
                slider.classList.add("active");
            }
        }
    }
    
    if(CONNECTIONVARIABLES.settings.display_brightness_appearance) {
        if(CONNECTIONVARIABLES.settings.display_brightness_appearance == 'light') {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }
}
const settingsHolder = document.getElementById("settingsHolder");

loadSettings(settingsTable, settingsHolder);

function loadSettings(table, outputDiv, mainSetting) {

    table.categories.forEach(category => {
        if(category.length == 0) return; // Skip empty categories

        const categoryDiv = document.createElement("div");
        categoryDiv.className = "settingsCategory";
        
        category.forEach(setting => {
            if(setting.subtitle) {
                const subtitle = document.createElement('p');
                subtitle.className = 'subtitle';
                subtitle.innerText = setting.subtitle;
                categoryDiv.appendChild(subtitle);
                return;
            }

            if(setting.title) {
                const title = document.createElement('p');
                title.className = 'title';
                title.innerText = setting.title;
                categoryDiv.appendChild(title);
                return;
            }

            const settingDiv = document.createElement("div");
            settingDiv.className = "setting";
            settingDiv.id = setting.id;
            
            const iconSide = document.createElement("div");
            iconSide.className = "iconSide";

            const categoryInner = document.createElement('div');

            if(setting.type == 'slider') {
                const slider = document.createElement('div');
                slider.classList.add('slider');
                slider.innerHTML = '<div class="bar"></div>';

                const sliderFill = document.createElement('div');
                sliderFill.classList.add('barFill');
                slider.children[0].appendChild(sliderFill);


                const circle = document.createElement('div');
                circle.classList.add('circle');

                settingDiv.style.position = 'relative';
                settingDiv.appendChild(slider);
                settingDiv.appendChild(circle);

                const debugInput = document.createElement('input');
                debugInput.type = 'range';
                debugInput.style.display = 'none';

                let callback = () => {};

                categoryDiv.appendChild(settingDiv);
                settingDiv.appendChild(debugInput);

                setTimeout(() => { 
                    switch(setting.id) {
                        case 'battery_level_slider':
                            sliderFill.style.width = CONNECTIONVARIABLES.battery.level + '%'; 
                            circle.style.left = CONNECTIONVARIABLES.battery.level/100*(settingDiv.offsetWidth-75)+15 + 'px';
                            debugInput.value = CONNECTIONVARIABLES.battery.level;
                            sliderFill.style.background = '#27cd41';
                            if(Math.round(CONNECTIONVARIABLES.battery.level) <= 10) {
                                sliderFill.style.background = '#eb3137';
                            } else if(Math.round(CONNECTIONVARIABLES.battery.level) <= 20) {
                                sliderFill.style.background = '#fecd0b';
                            } else {
                                sliderFill.style.background = '#27cd41';
                            }
                            callback = (n) => {
                                window.CONNECTIONVARIABLES.battery.level = Math.round(parseInt(n));
                            }
                            break;
                        case 'iconTint_slider':
                            sliderFill.style.width = CONNECTIONVARIABLES.debug.iconTintOpacity*100 + '%'; 
                            debugInput.value = CONNECTIONVARIABLES.debug.iconTintOpacity;
                            circle.style.left = CONNECTIONVARIABLES.debug.iconTintOpacity*(settingDiv.offsetWidth-75)+15 + 'px';
                            callback = (n) => {
                                circle.innerText = Math.round(parseInt(n)) + '%';
                                window.CONNECTIONVARIABLES.debug.iconTintOpacity = Math.round(parseInt(n))/100;
                            }
                            break;
                        default:
                            break;
                    }

                    dragElement(circle, sliderFill, debugInput, callback, setting.id, settingDiv.offsetWidth);
                }, 120);

                return;
            } else if(setting.type == 'radio') {
                settingDiv.onclick = () => { 
                    window.CONNECTIONVARIABLES.debug[mainSetting.id] = category.indexOf(setting);

                    Array.from(settingDiv.parentElement.children).forEach((e) => {
                        if(e.classList.contains('setting') && e.querySelector('div.rightSide')) e.querySelector('div.rightSide').remove();
                    });

                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "checkmark");
                    arrowIcon.style.filter = 'invert(45%) sepia(90%) saturate(5221%) hue-rotate(199deg) brightness(101%) contrast(108%)';
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);
                };

                const textAndMore = document.createElement("div");
                textAndMore.className = "textAndMore";
                textAndMore.innerHTML = `<p>${setting.name}</p>`;

                let set = (typeof window.CONNECTIONVARIABLES.debug[mainSetting.id] == "number");

                if(window.CONNECTIONVARIABLES.debug[mainSetting.id] == category.indexOf(setting) || (!set && setting.checked)) {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "checkmark");
                    arrowIcon.style.filter = 'invert(45%) sepia(90%) saturate(5221%) hue-rotate(199deg) brightness(101%) contrast(108%)';
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);
                }

                settingDiv.appendChild(textAndMore);
                categoryDiv.appendChild(settingDiv);

                return;
            }
            
            if(setting.icon) {
                const iconInner = document.createElement("div");
                iconInner.className = "icon " + setting.icon.color + "-icon";

                if(!setting.icon.image) { 

                    const iconSymbol = document.createElement("sf-symbol");
                    if(setting.icon.fixedHeight) iconSymbol.style.height = setting.icon.fixedHeight + "%";
                    iconSymbol.setAttribute("glyph", setting.icon.glyph);
                    iconSymbol.setAttribute("color", "white");

                    if(setting.icon.filter) {
                        iconSymbol.style.filter = setting.icon.filter;
                    }

                    iconInner.appendChild(iconSymbol);

                } else {
                    iconInner.style.backgroundImage = `url(${setting.icon.image})`;
                }

                iconSide.appendChild(iconInner);
            }

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
                    switchInput.id = setting.id + "-switch";
                    textAndMore.appendChild(switchInput);

                    if(setting.disabled) {
                        appleSlider.style.pointerEvents = 'none';
                    }

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
                        if(setting.innerSettings) {
                            handleNewCategory(setting, categoryInner);
                        }
                    });
                    
                } else if (setting.right.type === 'button') {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const buttonDiv = document.createElement('div');
                    buttonDiv.classList.add('rightButtonDiv');

                    const button = document.createElement("button");
                    button.setAttribute('onclick', setting.right.onclick);
                    button.className = "settingButton";
                    if(setting.right.text) button.innerText = `${setting.right.text}`;

                    buttonDiv.appendChild(button);
                    rightDiv.appendChild(buttonDiv);
                    textAndMore.appendChild(rightDiv);

                    settingDiv.addEventListener('click', () => {
                        categoryInner.classList.add('open');
                    });
                } else if (setting.right.type === 'colorpicker') {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const picker = document.createElement("input");
                    picker.type = 'color';
    
                    setTimeout(() => { 
                        if(CONNECTIONVARIABLES.debug.iconTint) {
                            picker.value = CONNECTIONVARIABLES.debug.iconTint;
                        }
                    }, 250);

                    if(setting.id == 'iconTint') {
                        picker.onchange = (e) => {
                            CONNECTIONVARIABLES.debug.iconTint = picker.value;
                            document.dispatchEvent(new CustomEvent('SyncVariables', { detail: window.CONNECTIONVARIABLES }))
                        }
                    }

                    rightDiv.appendChild(picker);
                    textAndMore.appendChild(rightDiv);

                    settingDiv.addEventListener('click', () => {
                        categoryInner.classList.add('open');
                    });
                }
            }

            if(setting.disabled) {
                settingDiv.style.opacity = '0.5';
                settingDiv.style.cursor = 'not-allowed';
            }
            
            settingDiv.appendChild(textAndMore);

            categoryDiv.appendChild(settingDiv);
        });

        outputDiv.appendChild(categoryDiv);
    });
}

function setSlider(slider, set, toggleData) {
    slider.parentElement.querySelector("input").checked = set[toggleData];
    
    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function settingToggle(slider, setting, toggleData) {
    slider.parentElement.querySelector("input").checked = !slider.parentElement.querySelector("input").checked;

    setting.data[toggleData] = slider.parentElement.querySelector("input").checked;
    window.CONNECTIONVARIABLES.debug[setting.id] = setting.data;

    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function dragElement(elmnt, barFill, sliderInput, callback, id, sliderLimit) {
    var pos1 = 0,
        pos3 = 0;
    elmnt.onmousedown = dragMouseDown;
    elmnt.onpointerdown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        //e.preventDefault();
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onpointerup = closeDragElement;
        document.onmousemove = elementDrag;
        document.onpointermove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        if(parseInt(elmnt.style.left.split('px')[0]) <= 15) elmnt.style.left = '15px';
        if(parseInt(elmnt.style.left.split('px')[0]) >= (sliderLimit-60)) elmnt.style.left = `${(sliderLimit - 60)}px`;
        
        let percentage = ((parseInt(elmnt.style.left.split('px')[0])-15)/(sliderLimit-75))*100;
        
        if(id == 'battery_level_slider') {
            if(Math.round(percentage) <= 10) {
                barFill.style.background = '#eb3137';
            } else if(Math.round(percentage) <= 20) {
                barFill.style.background = '#fecd0b';
            } else {
                barFill.style.background = '#27cd41';
            }
        }

        barFill.style.width = `${percentage}%`;
        sliderInput.value = Math.round(percentage);
        callback(percentage);
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}

function handleNewCategory(setting, categoryInner) {
    categoryInner.classList.add('categoryInner');
    categoryInner.id = 'category-' + setting.id;

    categoryInner.replaceChildren(); //? Bug fix for closing and opening categories.

    const titleBar = document.createElement('div');
    titleBar.classList.add('scrollTitleCategory');

    const backButton = document.createElement('div');
    backButton.classList.add('backButton');

    const backButtonButton = document.createElement('button');
    backButtonButton.addEventListener('click', () => {
        categoryInner.classList.remove('open');
        setTimeout(() => { categoryInner.remove(); }, 500);
    });
    backButtonButton.innerHTML = `<sf-symbol glyph='chevron.left'></sf-symbol>`;

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

    if(setting.description) {
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('categoryHeader');

        const categoryHeaderIcon = document.createElement('div');
        categoryHeaderIcon.classList.add('icon');
        categoryHeaderIcon.classList.add(setting.icon.color + '-icon');
        categoryHeaderIcon.innerHTML = `<sf-symbol glyph="${setting.icon.glyph}" color="white"></sf-symbol>`

        const headerTitle = document.createElement('h1');
        headerTitle.innerText = setting.name;

        const headerDesc = document.createElement('p');
        headerDesc.innerHTML = setting.description;

        categoryHeader.appendChild(categoryHeaderIcon);
        categoryHeader.appendChild(headerTitle);
        categoryHeader.appendChild(headerDesc);

        innerElements.appendChild(categoryHeader);
    }

    console.log(setting.innerSettings);

    loadSettings(setting.innerSettings, innerElements, setting);
    categoryInner.appendChild(innerElements);
    document.body.appendChild(categoryInner);
    appSpecificFunction();
    setTimeout(() => { categoryInner.classList.add('open'); }, 200);
}