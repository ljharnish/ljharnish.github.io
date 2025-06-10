let timeInterval;

let debugOptions = {
    debug: false, //? Is debug on? (Auto set by cookies.)
    skipBoot: false, //? Skip boot screen and login, essentially FastBoot.
    rainbowLogging: false, //? Enables / Disables rainbow logs in Debug Logger.

    categories: {
        categoriesString: "Log Categories",

        all: true, //? Overrides all other options, enabling all logs.
        builtInMenus: true, //? Enables / Disables logs of opening / closing built in menus.
        eventListeners: true, //? Enables / Disables info logs of event listeners.
        startupLogs: true, //? Enables / Disables logging startup options like skipBoot.

        eventString: "Global Events",

        events: {
            implementAppEvent: true, //? Logs on ImplementAppEvent firing.
        },

        windowString: "Window Events",

        windows: {
            activeWindowEvent: true, //? Logs on ActiveWindowEvent firing.
            closeWindowEvent: true, //? Logs on CloseWindowEvent firing.
            dragWindowEvent: false, //? Logs on DragWindowEvent firing.
            maximizeWindowEvent: true, //? Logs on MaximizeWindowEvent firing.
            minimizeWindowEvent: true, //? Logs on MinimizeWindowEvent firing.
            openWindowEvent: true, //? Logs on OpenWindowEvent firing.

            resizeWindowEvent: true, //? Logs on ResizeWindowEvent firing.
            snapWindowEvent: true, //? Logs on SnapWindowEvent firing.
        },
    },
};

let activeApp;
let applicationsOpen = [];

const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setDebug() {
    let debugMode = getCookie("debug") || "false";

    //? Sets new debugmode by checking old, then refreshes to set it up.
    switch (debugMode) {
        case "false":
            setCookie("debug", true, 365);
            break;
        case "true":
            setCookie("debug", "rainbow", 365);
            break;
        case "rainbow":
            setCookie("debug", false, 365);
            break;
    }

    location.reload();
}

window.onload = function () {
    // A whole lotta stuff to do on startup

    //? Get debug status from cookies.
    //(TODO) Set up debug options and save them to cookies.
    let debugCookie = getCookie("debug");
    switch (debugCookie) {
        case "false":
            debugOptions.debug = false;
            break;
        case "true":
            document.querySelector('button[onclick="setDebug()"]').children[0].src = "./sources/image/icons/Yaru/apps/terminal-app.png";
            debugOptions.debug = true;
            break;
        case "rainbow":
            document.querySelector('button[onclick="setDebug()"]').children[0].src = "./sources/image/icons/Yaru/apps/terminal-colored.png";
            debugOptions.debug = true;
            debugOptions.rainbowLogging = true;
            break;
    }

    if (localStorage.getItem("debugOptions")) {
        debugOptions.categories = JSON.parse(localStorage.getItem("debugOptions"));
    }

    //! fuckass way of doing this but its wtv (sets all debug options to true upon all set to true)
    if (debugOptions.categories.all) debugOptions.categories = JSON.parse(JSON.stringify(debugOptions.categories).replaceAll("false", "true"));

    log("Hello!\nWelcome to Ubuntu | For The Web!\nThis is a web-based port of Ubuntu 24.04 LTS in pure HTML, JS, and CSS.\n\nMade by ljharnish.\n\nEnjoy!");

    //? Sets all package names as blue in the Debug Logger
    appLayouts.forEach((layout) => keywords.filter((e) => e.type == "l-blue")[0].strings.push(layout.id));

    if (debugOptions.debug) {
        //? Does stuff on debug enabled

        //(TODO) Run after getting user settings
        setDebugCheckboxes();

        let appGrid = document.querySelector("#allApps .allApps_appGrid");
        appGrid.innerHTML += `<button data-appid="base.ubuntu.terminal.logger" onclick="openApp('base.ubuntu.terminal.logger')"><img src="./sources/image/icons/Yaru/apps/gksu-root-terminal.png" alt=""><p>Debug Logger</p></button>`;

        openApp("base.ubuntu.terminal.logger");

        log();
        log("TestingInfoLog...", "info");
        log("TestingErrorLog...", "error");
        log("TestingDebugLog...", "debug");
        log("TestingWarningLog...", "warning");
        log();
        if (debugOptions.categories.startupLogs) {
            if (localStorage.getItem("debugOptions") && debugOptions.categories.startupLogs) log("Saved Debug Options Found and Loaded.", "debug");
            log(`Current Debug Options: ${JSON.stringify(debugOptions)}`, "debug");
        }
        applicationsOpen[0].shadowRoot.querySelector("div.app_terminal-body-contents").scrollTo(0, 0);
    }

    if (debugOptions.debug) {
        // Build Actions
        // openApp('base.ubuntu.softwareupdater');
    }

    //? fuckass fix because it keeps scrolling and pissing me off
    window.scrollTo(0, 0);

    window.addEventListener("keydown", (e) => {
        if (e.key == "Tab") {
            e.preventDefault();
        }

        //? Open lock screen on keydown fix
        if (!document.querySelector("div.lockDateTime").classList.contains("closed")) {
            document.querySelector("div.lockDateTime").classList.add("closed");
        }
    });

    if (debugOptions.categories.eventListeners) log();
    if (debugOptions.categories.eventListeners) log("Global Key Down Event Listener Created.", "info");

    //? Time & Date stuff ----------
    let topBarTime = document.getElementById("dateTime");
    let lockScreenTime = document.getElementById("lockTime");
    let lockScreenDate = document.getElementById("lockDate");

    let dateNow = Date.now();
    let data = new Date(dateNow);

    let topBarStr = `${monthShort[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${data.getHours().toString().length > 1 ? data.getHours() : "0" + data.getHours()}:${data.getMinutes().toString().length > 1 ? data.getMinutes() : "0" + data.getMinutes()}`;
    let lockTimeStr = `${data.getHours().toString().length > 1 ? data.getHours() : "0" + data.getHours()}:${data.getMinutes().toString().length > 1 ? data.getMinutes() : "0" + data.getMinutes()}`;
    let lockDateStr = `${dayOfWeek[data.getDay()]} ${months[data.getMonth()]} ${data.getDate()}`;
    topBarTime.innerHTML = topBarStr;
    lockScreenTime.innerHTML = lockTimeStr;
    lockScreenDate.innerHTML = lockDateStr;

    timeInterval = setInterval(() => {
        let dateNow = Date.now();
        let data = new Date(dateNow);

        let topBarStr = `${monthShort[data.getMonth()]} ${data.getDate()}&nbsp;&nbsp;&nbsp;${data.getHours().toString().length > 1 ? data.getHours() : "0" + data.getHours()}:${data.getMinutes().toString().length > 1 ? data.getMinutes() : "0" + data.getMinutes()}`;
        topBarTime.innerHTML = topBarStr;
    }, 1000);

    //? Time & Date stuff end ----------

    document.addEventListener("mousedown", (e) => {
        //? Sets clicked app as active, and puts above the others

        if(e.target == activeApp) return;

        document.querySelectorAll("ubuntu-application").forEach((app) => {
            if (!app.shadowRoot.querySelector("div.app").classList.contains("inactive") && debugOptions.categories.windows.activeWindowEvent && app !== e.target) log(`ActiveWindowEvent: App [ ${applicationsOpen.indexOf(app)} ] ( ${app.getAttribute("type")} ) became inactive.`, "debug");
            app.shadowRoot.querySelector("div.app").classList.add("inactive");
        });

        try {
            if(e.target.localName == 'ubuntu-application') {
                if (e.target.parentNode.lastChild != e.target) e.target.parentNode.appendChild(e.target);
                activeApp = e.target;
                let app = e.target.shadowRoot.querySelector("div.app");
                if(!app.classList.contains('inactive')) return;
                app.classList.remove("inactive");
                if (debugOptions.categories.windows.activeWindowEvent) log(`ActiveWindowEvent: App [ ${applicationsOpen.indexOf(e.target)} ] ( ${e.target.getAttribute("type")} ) became active.`, "debug");
            }
        } catch (error) {
        }

        let allInactives = Array.from(document.querySelectorAll("ubuntu-application")).filter((e) => e.shadowRoot.querySelector('div.app').classList.contains('inactive'));
        if(document.querySelectorAll("ubuntu-application").length == allInactives.length) activeApp = null;
    });
    
    if (debugOptions.categories.eventListeners) log("Global Mouse Down Event Listener Created.", "info");

    document.querySelector("div.lockDateTime").addEventListener("click", () => {
        document.querySelector("div.lockDateTime").classList.add("closed");
    });

    if (debugOptions.categories.eventListeners) log("Lock Screen Click Event Listener Created.", "info");

    document.querySelector("div.lockLogin input").addEventListener("keydown", (e) => {
        if (e.key == "Escape") document.querySelector("div.lockDateTime").classList.remove("closed");

        if (e.key == "Enter") {
            if (debugOptions.categories.startupLogs) log(`Unlocking Ubuntu 24.04 LTS: \n Password: [ ${document.getElementById("lockLoginPassword").value} ]`, "debug");
            document.getElementById("lockLoginThrobber").classList.add("spin");
            setTimeout(() => {
                document.getElementById("lockScreen").classList.add("unlocked");
            }, 500);
        }
    });

    if (debugOptions.categories.eventListeners) log("Lock Screen Key Down Event Listener Created.", "info");

    document.querySelector("div.lockLogin button:nth-of-type(2)").addEventListener("click", () => {
        if (debugOptions.categories.startupLogs) log(`Unlocking Ubuntu 24.04 LTS: \n Password: [ ${document.getElementById("lockLoginPassword").value} ]`, "debug");
        document.getElementById("lockLoginThrobber").classList.add("spin");
        setTimeout(() => {
            document.getElementById("lockScreen").classList.add("unlocked");
        }, 500);
    });

    if (debugOptions.categories.eventListeners) log("Lock Screen Submit Button Click Event Listener Created.", "info");
    if (debugOptions.categories.eventListeners) log();

    if (debugOptions.skipBoot) document.getElementById("bootAnim").classList.add("boot");
    if (debugOptions.skipBoot) document.getElementById("lockScreen").classList.add("unlocked");

    let randBootInterval = Math.floor(Math.random() * 1500) + 2000;
    if (debugOptions.categories.startupLogs) log(`RNG Boot Time: ${randBootInterval / 1000}s`, "debug");
    if (debugOptions.skipBoot && debugOptions.categories.startupLogs) log(`Boot Screen Skipped...`, "info");
    log();
    setTimeout(() => {
        document.getElementById("bootAnim").classList.add("boot");
    }, randBootInterval);
};

//? Set debugMenu checkboxes
function setDebugCheckboxes() {
    let booleanArray = [];

    function searchObj(obj) {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === "object") {
                //? another object
                searchObj(obj[key]);
            } else if (typeof obj[key] === "string") {
                //? a label
                booleanArray.push({
                    type: "label",
                    text: obj[key],
                });
            } else {
                //? a good value
                booleanArray.push({
                    name: key,
                    value: obj[key],
                });
            }
        });
    }

    function searchObjWithPath(obj, path = [], callback) {
        Object.keys(obj).forEach((key) => {
            const newPath = [...path, key];
            if (typeof obj[key] === "object" && obj[key] !== null) {
                searchObjWithPath(obj[key], newPath, callback);
            } else {
                callback(newPath, obj[key]);
            }
        });
    }

    searchObj(debugOptions.categories);

    booleanArray.forEach((item) => {
        let fullPath = "";
        searchObjWithPath(debugOptions.categories, [], (path) => {
            if (path.includes(item.name)) fullPath = path.join(".");
        });

        let debugMenu = document.getElementById("debugMenu");

        if (item.type == "label") {
            let p = document.createElement("p");
            p.textContent = item.text;
            debugMenu.appendChild(p);
            return;
        }

        let debugOption = document.createElement("div");
        debugOption.className = "debugOption";

        let label = document.createElement("label");
        label.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1) + ":";
        debugOption.appendChild(label);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.value;
        checkbox.setAttribute("onchange", `debugOptions.categories.${fullPath}=!debugOptions.categories.${fullPath};this.checked=debugOptions.categories.${fullPath};debugOptions.categories.all=false;document.querySelector('input[data-all="true"]').checked=false;localStorage.setItem('debugOptions',JSON.stringify(debugOptions.categories));`);

        if (item.name == "all") {
            checkbox.dataset.all = true;
            checkbox.setAttribute("onchange", `debugOptions.categories.${fullPath}=!debugOptions.categories.${fullPath};this.checked=debugOptions.categories.${fullPath};if(this.checked){debugOptions.categories=JSON.parse(JSON.stringify(debugOptions.categories).replaceAll('false', 'true'));document.querySelectorAll('div#debugMenu input[type="checkbox"]').forEach(el=>el.checked=true)}else{debugOptions.categories=JSON.parse(JSON.stringify(debugOptions.categories).replaceAll('true', 'false'));document.querySelectorAll('div#debugMenu input[type="checkbox"]').forEach(el=>el.checked=false)}localStorage.setItem('debugOptions',JSON.stringify(debugOptions.categories))`);
        }

        debugOption.appendChild(checkbox);
        debugMenu.appendChild(debugOption);
    });

    let clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear Saved Options";
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("debugOptions");
        log("Saved Debug Options Cleared.", "debug");
    });
    debugMenu.appendChild(clearButton);

    let openLog = document.createElement("button");
    openLog.innerHTML = "Open Debug Logger";
    openLog.addEventListener("click", () => {openApp('base.ubuntu.terminal.logger')});
    debugMenu.appendChild(openLog);
}

//? Fix for Debug Logger logging multiple times on window snapping.
let logFixCounter = {
    leftHalf: 0,
    rightHalf: 0,
};

//? Window Dragging, mostly not my code except for logging, and snapping.
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.shadowRoot.querySelector(".app_handleBar").onmousedown = dragMouseDown;
    elmnt.shadowRoot.querySelector(".app_handleBar").onpointerdown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        //elmnt.className = '';
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
        /*if((elmnt.offsetTop - pos2) > 0) */ elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        /*if((elmnt.offsetLeft - pos1) > 70) */ elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        if (debugOptions.categories.windows.dragWindowEvent) log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute("type")} ) \n │ DragWindowEvent: [ ${elmnt.style.left.split("px")[0]}, ${elmnt.style.top.split("px")[0]} ] \n └─┘`, "debug");

        if (e.clientX <= 75 && !elmnt.dataset.staticSize !== "true") {
            if (logFixCounter.leftHalf == 0 && debugOptions.categories.windows.snapWindowEvent) log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute("type")} ) \n │ SnapWindowEvent: LEFT-HALF \n └─┘`, "debug");
            elmnt.classList.add("left-half");
            logFixCounter.leftHalf = 1;
        } else if (e.clientX >= window.innerWidth - 6 && elmnt.dataset.staticSize !== "true") {
            if (logFixCounter.rightHalf == 0 && debugOptions.categories.windows.snapWindowEvent) log(`App [ ${applicationsOpen.indexOf(elmnt)} ] ( ${elmnt.getAttribute("type")} ) \n │ SnapWindowEvent: RIGHT-HALF \n └─┘`, "debug");
            elmnt.classList.add("right-half");
            logFixCounter.rightHalf = 1;
        } else if (elmnt.classList.contains("maximized")) {
            elmnt.className = "maximized";
        } else {
            elmnt.className = "";
            logFixCounter.leftHalf = 0;
            logFixCounter.rightHalf = 0;
        }
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}

//? i shouldn't have to explain this.
function openApp(appid) {
    if (debugOptions.categories.windows.openWindowEvent) log("");
    document.getElementById("allApps").classList.remove("open");

    if (debugOptions.categories.windows.openWindowEvent) log(`OpenWindowEvent: App [ ${applicationsOpen.length + 1} ] ( ${appid} ) opened.`, "debug");

    try {
        let appIcons = document.querySelectorAll(`button[data-appid='${appid}']`);
        appIcons.forEach((el) => {
            el.classList.add("openApp");
        });
    } catch (error) {}

    let filteredAppLayouts = appLayouts.filter((a) => a.id == appid);

    //? make sure this app layout actually exists before pushing it
    if (filteredAppLayouts.length > 0) {
        let app = document.createElement("ubuntu-application");
        app.setAttribute("type", appid);

        document.getElementById("mainView").appendChild(app);
        if (filteredAppLayouts[0].resizable == false) {
            app.dataset.staticSize = true;
        } else {
            app.dataset.staticSize = false;
        }
        applicationsOpen.push(app);

        function logResize() {
            if (applicationsOpen.indexOf(app) < 0) return;
            if (debugOptions.categories.windows.resizeWindowEvent) log(`App [ ${applicationsOpen.indexOf(app)} ] ( ${appid} ) \n │ ResizeWindowEvent: [ ${app.offsetHeight} x ${app.offsetWidth} ] \n └─┘`, "debug");
        }

        new ResizeObserver(logResize).observe(app);

        return app;
    } else {
        //! No app in appLayouts array.
        log(`'${appid}' is not a valid application ID.`, "error");
    }
}

//? again, i shouldn't have to explain this
function closeApp(app) {
    if (debugOptions.categories.windows.closeWindowEvent) log("");
    let appEl = app.closest("div.app").parentNode.host;

    if (debugOptions.categories.windows.closeWindowEvent) log(`CloseWindowEvent: App [ ${applicationsOpen.indexOf(appEl) > -1 ? applicationsOpen.indexOf(appEl) : "Undefined"} ] ( ${appEl.getAttribute("type")} ) closed.`, "debug");

    applicationsOpen.splice(applicationsOpen.indexOf(appEl), 1);
    appEl.remove();

    let amountOfAppsOfType = applicationsOpen.filter((e) => e.getAttribute("type") == appEl.getAttribute("type"));

    //? set app buttons to show unopened
    if (amountOfAppsOfType == 0) {
        try {
            let appIcons = document.querySelectorAll(`button[data-appid='${appEl.getAttribute("type")}']`);
            appIcons.forEach((el) => {
                el.classList.remove("openApp");
            });
        } catch (error) {
            log(error, "error");
        }
    }
}

//? the all apps menu
function openAllApps() {
    document.getElementById("allApps").classList.toggle("open");

    if (document.getElementById("allApps").classList.contains("open")) {
        if (debugOptions.categories.builtInMenus) log("All apps menu OPEN.", "debug");
    } else {
        if (debugOptions.categories.builtInMenus) log("All apps menu CLOSED.", "debug");
    }
}

//? Enables custom apps to be implemented in one command.
function implementApp(appID, appCode) {
    appLayouts.push({ id: appID, layout: appCode });
    if (debugOptions.categories.events.implementAppEvent) log(`ImplementAppEvent: "${appID}" implemented.`, "debug");
    keywords.filter((e) => e.type == "l-green")[0].strings.push(appID);
}

//? come on dude you don't need comments...
function maximizeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;
    if (debugOptions.categories.windows.maximizeWindowEvent) log(`App [ ${applicationsOpen.indexOf(appEl)} ] ( ${appEl.getAttribute("type")} ) \n │ MaximizeWindowEvent: true \n └─┘`, "debug");
    appEl.setAttribute("bfS", appEl.className);
    appEl.setAttribute("bW", appEl.style.width);
    appEl.setAttribute("bH", appEl.style.height);
    app.children[0].src = "./sources/image/icons/Yaru/scalable/ui/window-restore-symbolic.svg";
    appEl.className = "";
    appEl.classList.add("maximized");

    app.onclick = function () {
        unmaximizeApp(app);
    };
}

//? the opposite
function unmaximizeApp(app) {
    let appEl = app.closest("div.app").parentNode.host;
    if (debugOptions.categories.windows.maximizeWindowEvent) log(`App [ ${applicationsOpen.indexOf(appEl)} ] ( ${appEl.getAttribute("type")} ) \n │ MaximizeWindowEvent: false \n └─┘ \n Fix bug: no transition on unmaximizing.`, "debug");
    app.children[0].src = "./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg";
    appEl.className = appEl.getAttribute("bfS");
    appEl.classList.remove("maximized");

    app.onclick = function () {
        maximizeApp(app);
    };
}

//? cookie stuff from w3schools
function setCookie(a, b, c) {
    const d = new Date();
    d.setTime(d.getTime() + c * 24 * 60 * 60 * 1000);
    let e = "expires=" + d.toUTCString();
    document.cookie = a + "=" + b + ";" + e + ";path=/";
}
function getCookie(a) {
    let n = a + "=";
    let b = decodeURIComponent(document.cookie);
    let d = b.split(";");
    for (let i = 0; i < d.length; i++) {
        let c = d[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(n) == 0) {
            return c.substring(n.length, c.length);
        }
    }
    return "";
}
