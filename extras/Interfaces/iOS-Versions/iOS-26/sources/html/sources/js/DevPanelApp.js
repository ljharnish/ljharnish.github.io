const settingsTable = {
    categories: [
        [
            {
                title: "Debug iOS 26 Features"
            },
            {
                name: "Performance Mode",
                id: "performanceMode",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'red',
                    glyph: 'exclamationmark.triangle.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                name: "Circular Icons",
                id: "iconCircles",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'blue',
                    glyph: '26.circle.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                name: "Show Icon Glow Only (Hide Icon)",
                id: "iconGlowOnly",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'orange',
                    glyph: 'burst.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
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
            },
            {  
                name: "Show Layout Screenshots",
                id: "showDebugScreenshots",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'blue',
                    glyph: 'photo.fill.on.rectangle.fill'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },

        ],
        [
            {
                title: "Experiments"
            },
            {
                name: "Show Control Center Button",
                id: "experiment_controlCenter",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'black',
                    glyph: 'control.center'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                name: "Enable Fullscreen",
                id: "experiment_fullscreen",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'black',
                    glyph: 'rectangle.expand.vertical'
                },
                right: {
                    type: 'switch',
                    toggleData: 'enabled'
                }
            },
            {
                subtitle: 'These are experimental beta features. They will not have perfect support across all platforms, nor are they guaranteed to work in all apps.'
            }
        ],
        [
            {
                title: "Home Screen"
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
        ]
    ]
};

function appSpecificFunction() {
    for (const [key, value] of Object.entries(CONNECTIONVARIABLES.debug)) {
        console.log(key)
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

function loadSettings(table, outputdiv) {
    console.log("Loading settings...");

    table.categories.forEach(category => {
        if(category.length == 0) return; // Skip empty categories
        console.log(category)

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

            if(setting.innerSettings) {
                handleNewCategory(setting, categoryInner);
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
                        categoryInner.classList.add('open');
                    });
                    
                } else if (setting.right.type = 'button') {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const button = document.createElement("button");
                    button.setAttribute('onclick', setting.right.onclick);
                    button.className = "settingButton";
                    if(setting.right.text) button.innerText = `${setting.right.text}`;
                    rightDiv.appendChild(button);
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

        outputdiv.appendChild(categoryDiv);
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
    window.CONNECTIONVARIABLES.debug[setting.id] = setting.data;

    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}