const settingsTable = {
    categories: [
        [
            {
                title: 'Patch Notes at the bottom!'
            }
        ],
        [
            {
                title: "Disclaimer"
            },
            {
                subtitle: "This site is NOT, I repeat <strong>NOT</strong>, an official <strong>Apple</strong> site. This is a passion project made to show off my skills and to have fun while doing so. If you assumed this was an official <strong>Apple</strong> site or was sent this thinking it was, it is not. This message also shows up on startup when you boot the phone."
            }
        ],
        [
            {
                title: "Recommended Browser"
            },
            {
                subtitle: "iOS 26 | For The Web works best <i>(and it is highly recommended you use this)</i> on <strong>Firefox</strong> for the best experience.\n\nBetter yet, using Firefox <i>Nightly</i> or Beta will guarantee it will work as intended."
            }
        ],
        [
            {
                title: "Processing Warning"
            },
            {
                subtitle: "<strong>Warning</strong>:\n\nAs HTML and websites are not meant to be full operating systems, rendering every little detail with new effects and such, iOS 26 | For The Web is <strong>VERY</strong> resource intensive and may slow down or lag.\n\nTo mitigate this, options called <strong>\"Super Performance Mode\"</strong> and regular <strong>\"Performance Mode\"</strong> were created. These can be accessed from your lock screen and the Developer Panel app anytime."
            }
        ],
        [
            {
                title: "Q & A"
            },
            {
                subtitle: "Q: <i>Why does this everything look off and not work on my browser?</i>\n\n<strong>A: This was built in Firefox to be used on Firefox and it may not work on other browsers as it utilizes features other browsers may not yet have, and it uses bugs to its advantage in some parts of the styling.</strong>\n\n\nQ: <i>Why can't I exit fullscreen on mobile?</i>\n\n<strong>A: Mobile devices are forced into fullscreen. This is because the website is only the phone, and it does not always fit on every display so forcing fullscreen is the only way to ensure it works properly on mobile devices.</strong>"
            }
        ],
        [
            {
                title: "Patch Notes (v6.14.2025):"
            },
            {
                subtitle: "Version v6.14.2025 brings some quality-of-life updates.<strong>\n\nWork on the Control Center has begun,\nMore Side Buttons were added,\nAlerts are now shown for unavailable apps,\nWork on the \"Phone\" app has begun,\nA \"Google\" app has been added to test functionality of 3rd-party applications,\nWork has begun on Spotlight for the Home Screen.</strong>"
            },
            {
                title: "Patch Notes (v6.13.2025):"
            },
            {
                subtitle: "Version v6.13.2025 Brings some well deserved updates to the site.\n\nThese changes include:<strong>\nPatch Notes,\nSetting Saving,\nAll icon types and images,\nA more Dynamic Home Screen,\nFixed Bugs,\nand basic support for custom icons.</strong>"
            }
        ],
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
                subtitle.innerHTML = setting.subtitle.replaceAll('\n', '<br>');
                categoryDiv.appendChild(subtitle);
                return;
            }
        });

        outputdiv.appendChild(categoryDiv);
    });
}