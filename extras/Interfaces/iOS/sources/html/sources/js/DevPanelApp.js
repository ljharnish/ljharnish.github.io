const settingsTable = {
    categories: [
        [
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
                    //? Toggle the data[toggleData] value if a boolean
                    toggleData: 'enabled'
                }
            }
        ]
    ]
};

function appSpecificFunction() { return; }

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

                    setTimeout(() => { setSlider(appleSlider, window.CONNECTIONVARIABLES.debug[setting.id], setting.right.toggleData) }, 10);

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
    window.CONNECTIONVARIABLES.debug[setting.id] = setting.data;

    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}