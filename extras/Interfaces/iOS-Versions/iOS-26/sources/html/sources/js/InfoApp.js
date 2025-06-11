const settingsTable = {
    categories: [
        [
            {
                title: "Recommended Browser"
            },
            {
                subtitle: "iOS 26 | For The Web works best and it is highly recommended you use this site on Firefox for the best experience.\n\nBetter yet, using Firefox Nightly or Beta will guarantee it will work as intended."
            }
        ],
        [
            {
                title: "Processing Info"
            },
            {
                subtitle: "Warning:\n\nAs HTML and websites are not meant to be full operating systems, rendering every little detail with new effects and such, iOS 26 | For The Web is VERY resource intensive and may / WILL slow down or lag.\n\nTo mitigate this, options called \"Super Performance Mode\" and regular \"Performance Mode\" were created. These can be accessed from your lock screen and the Developer Panel app anytime."
            }
        ],
        [
            {
                title: "Q & A"
            },
            {
                subtitle: "Q: Why does this everything look off and not work on my browser?\nA: This was built in Firefox to be used on Firefox, and it may not work on other browsers, as it utilizes features other browsers may not yet have.\n\nQ: Why can't I exit fullscreen on mobile?\nA: Mobile devices are forced into fullscreen. This is because the website is only the phone, and it does not always fit on every display so forcing fullscreen is the only way to ensure it works properly on mobile devices."
            }
        ]
    ]
};

function appSpecificFunction() {
    if(CONNECTIONVARIABLES.settings.display_brightness_appearance) {
        if(CONNECTIONVARIABLES.settings.display_brightness_appearance == 'light') {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }
};

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
            if(setting.title) {
                const title = document.createElement('p');
                title.className = 'title';
                title.innerText = setting.title;
                title.style.fontWeight = 'bold';
                categoryDiv.appendChild(title);
                return;
            }

            if(setting.subtitle) {
                const subtitle = document.createElement('p');
                subtitle.className = 'subtitle';
                subtitle.innerText = setting.subtitle;
                categoryDiv.appendChild(subtitle);
                return;
            }
        });

        outputdiv.appendChild(categoryDiv);
    });
}