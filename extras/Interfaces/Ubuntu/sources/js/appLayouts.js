//? This holds all the HTML for app layouts, and nothing else.

let appLayouts = [
    {
        id: 'base.ubuntu.filemanager',
        baseWidth:900,
        baseHeight:560,
        layout: `
        
        <link rel="stylesheet" href="./sources/css/global.css">
        <link rel="stylesheet" href="./sources/css/apps/base.ubuntu.filemanager.css">

            <div class="app app_filemanager">
                <div class="app_handleBar"></div>
                <div class="app_filemanager-sidebar">
                    <div class="app_filemanager-sidebar-header">
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/edit-find-symbolic.svg" alt="">
                        </button>
                        <p>Files</p>
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/open-menu-symbolic.svg" alt="">
                        </button>
                    </div>

                    <div class="app_filemanager-sidebar-items">
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/categories/emoji-recent-symbolic.svg" alt="">
                            <p>Recent</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/status/starred-symbolic.svg" alt="">
                            <p>Starred</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/user-home-symbolic.svg" alt="">
                            <p>Home</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-documents-symbolic.svg" alt="">
                            <p>Documents</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-download-symbolic.svg" alt="">
                            <p>Downloads</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-music-symbolic.svg" alt="">
                            <p>Music</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-pictures-symbolic.svg" alt="">
                            <p>Pictures</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-videos-symbolic.svg" alt="">
                            <p>Video</p>
                        </div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/places/user-trash-symbolic.svg" alt="">
                            <p>Trash</p>
                        </div>
                        <div class="app_filemanager-sidebar-divider"></div>
                        <div class="app_filemanager-sidebar-item">
                            <img src="./sources/image/icons/Yaru/scalable/actions/list-add-symbolic.svg" alt="">
                            <p>Other Locations</p>
                        </div>
                    </div>
                </div>
                <div class="app_filemanager-body">
                    <div class="app_filemanager-body-header">
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/go-previous-symbolic.svg" alt="">
                        </button>
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/go-next-symbolic.svg" alt="">
                        </button>
                        <div class="app_filemanager-location-bar">

                        </div>
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/places/folder-saved-search-symbolic.svg" alt="">
                        </button>

                        <div class="app_filemanager_organizebuttons">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/actions/view-list-symbolic.svg" alt="">
                            </button>
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/pan-down-symbolic.svg" alt="">
                            </button>
                        </div>

                        <div class="app_filemanager_windowbuttons">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="">
                            </button>
                            <button onclick='maximizeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg" alt="">
                            </button>
                            <button onclick='closeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="app_filemanager-body-contents">
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/user-desktop.png" alt="">
                            Desktop
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-documents.png" alt="">
                            Documents
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-download.png" alt="">
                            Downloads
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-music.png" alt="">
                            Music
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-pictures.png" alt="">
                            Pictures
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-publicshare.png" alt="">
                            Public
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder.png" alt="">
                            snap
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-templates.png" alt="">
                            Templates
                        </div>
                        <div class="app_filemanager-body-file">
                            <img src="./sources/image/icons/Yaru/folders/folder-videos.png" alt="">
                            Videos
                        </div>
                        
                    </div>
                </div>
            </div>`
    },
    {
        id: 'base.ubuntu.preferences',
        baseWidth:1000,
        baseHeight:660,
        layout: `<link rel="stylesheet" href="./sources/css/apps/base.ubuntu.preferences.css">
                <link rel="stylesheet" href="./sources/css/global.css">

                <div class="app app_preferences">
                    <div class="app_handleBar">
                        <div class="app_preferences-sidebar-header">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/actions/edit-find-symbolic.svg" alt="">
                            </button>
                            <p>Settings</p>
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/actions/open-menu-symbolic.svg" alt="">
                            </button>
                        </div>
                        <div class="app_preferences-body-header">
                            <div id="settingLabel">
                                <h1>Wi-Fi</h1>
                                <p>Connected</p>
                            </div>
                            <div class="spacer"></div>
                            <div class="app_preferences_windowbuttons">
                                <button>
                                    <img src="./sources/image/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="">
                                </button>
                                <button onclick='maximizeApp(this)'>
                                    <img src="./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg" alt="">
                                </button>
                                <button onclick='closeApp(this)'>
                                    <img src="./sources/image/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app_preferences-sidebar">
                        <div class="app_preferences-sidebar-items">
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/devices/network-wireless-symbolic.svg" alt="">
                                <p>Wi-Fi</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-network-symbolic.svg" alt="">
                                <p>Network</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-bluetooth-symbolic.svg" alt="">
                                <p>Bluetooth</p>
                            </div>
                            <div class="app_preferences-sidebar-divider"></div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-display-symbolic.svg" alt="">
                                <p>Displays</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-sound-symbolic.svg" alt="">
                                <p>Sound</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-power-symbolic.svg" alt="">
                                <p>Power</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-multitasking-symbolic.svg" alt="">
                                <p>Multitasking</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-appearance-symbolic.svg" alt="">
                                <p>Appearance</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/categories/preferences-ubuntu-panel-symbolic.svg" alt="">
                                <p>Ubuntu Desktop</p>
                            </div>
                            <div class="app_preferences-sidebar-divider"></div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-applications-symbolic.svg" alt="">
                                <p>Apps</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-notifications-symbolic.svg" alt="">
                                <p>Notifications</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-search-symbolic.svg" alt="">
                                <p>Search</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-online-accounts-symbolic.svg" alt="">
                                <p>Online Accounts</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-sharing-symbolic.svg" alt="">
                                <p>Sharing</p>
                            </div>
                            <div class="app_preferences-sidebar-divider"></div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-mouse-symbolic.svg" alt="">
                                <p>Mouse & Touchpad</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-keyboard-symbolic.svg" alt="">
                                <p>Keyboard</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-color-symbolic.svg" alt="">
                                <p>Color</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-printers-symbolic.svg" alt="">
                                <p>Printers</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/devices/input-tablet-symbolic.svg" alt="">
                                <p>Wacom Tablet</p>
                            </div>
                            <div class="app_preferences-sidebar-divider"></div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-accessibility-symbolic.svg" alt="">
                                <p>Accessibility</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-privacy-symbolic.svg" alt="">
                                <p>Privacy & Security</p>
                            </div>
                            <div class="app_preferences-sidebar-item">
                                <img src="./sources/image/icons/Yaru/scalable/org.gnome.Settings/org.gnome.Settings-system-symbolic.svg" alt="">
                                <p>System</p>
                            </div>
                        </div>
                    </div>
                    <div class="app_preferences-body">
                        <div class="app_preferences-body-contents">

                            <div class="app_preferences-body-setting-category">
                                <div class="app_preferences-body-setting">
                                    <div class="app_preferences-body-setting-label">
                                        Wi-Fi
                                    </div>
                                    <div class="app_preferences-body-setting-switch">
                                        
                                    </div>
                                </div>
                                <div class="app_preferences-body-setting">
                                    <div class="app_preferences-body-setting-label">
                                        Saved Networks
                                    </div>
                                    <img src="./sources/image/icons/Yaru/scalable/actions/go-next-symbolic.svg" alt="">
                                </div>
                                <div class="app_preferences-body-setting">
                                    <div class="app_preferences-body-setting-label">
                                        Connect to Hidden Network...
                                    </div>
                                    <img src="./sources/image/icons/Yaru/scalable/actions/go-next-symbolic.svg" alt="">
                                </div>

                                <div class="app_preferences-body-setting">
                                    <div class="app_preferences-body-setting-label">
                                        Turn On Wi-Fi Hotspot...
                                    </div>
                                    <img src="./sources/image/icons/Yaru/scalable/actions/go-next-symbolic.svg" alt="">
                                </div>
                            </div>

                            <div class="app_preferences-body-setting-category">
                                <div class="app_preferences-body-setting">
                                    <div class="app_preferences-body-setting-label">
                                        <h1>Airplane Mode</h1>
                                        <p>Disables Wi-Fi, Bluetooth, and mobile broadband</p>
                                    </div>
                                    <div class="app_preferences-body-setting-switch off">

                                    </div>
                                </div>
                            </div>

                            <div class="app_preferences-body-setting-category">
                                <h1>Visible Networks <img src="./sources/image/loading/throbber.svg" class="throbberSpinning"></h1>
                                <div class="app_preferences-body-setting app_preferences-body-setting-iconlabel">
                                    <div class="app_preferences-body-setting-label">
                                        <img src="./sources/image/icons/Yaru/scalable/status/network-wireless-signal-good-secure-symbolic.svg" alt="">
                                        Internet
                                    </div>
                                    <div class="app_preferences-body-setting-info">
                                        <p class="dark">Connected</p>
                                        <button>
                                            <img src="./sources/image/icons/Yaru/scalable/actions/qr-code-symbolic.svg" alt="">
                                        </button>
                                        <button>
                                            <img src="./sources/image/icons/Yaru/scalable/apps/settings-symbolic.svg" alt="">
                                        </button>
                                    </div>
                                </div>
                                <div class="app_preferences-body-setting app_preferences-body-setting-iconlabel">
                                    <div class="app_preferences-body-setting-label">
                                        <img src="./sources/image/icons/Yaru/scalable/status/network-wireless-signal-weak-secure-symbolic.svg" alt="">
                                        Internet-2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    },
    {
        id: 'base.ubuntu.terminal',
        baseWidth:700,
        baseHeight:550,
        layout: `
        
        <link rel="stylesheet" href="./sources/css/global.css">
        <link rel="stylesheet" href="./sources/css/apps/base.ubuntu.terminal.css">

            <div class="app app_terminal">
                <div class="app_handleBar">
                    <div class="app_terminal-body-header">
                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/ui/tab-new-symbolic.svg" alt="">
                        </button>

                        <p>username@ubuntu-web: ~</p>

                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/search-symbolic.svg" alt="">
                        </button>

                        <button>
                            <img src="./sources/image/icons/Yaru/scalable/actions/open-menu-symbolic.svg" alt="">
                        </button>

                        <div class="app_terminal_windowbuttons">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="">
                            </button>
                            <button onclick='maximizeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg" alt="">
                            </button>
                            <button onclick='closeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>

                <div class="app_terminal-body">
                    <div class="app_terminal-body-contents">
                        <span>
                            <p class='green'>username@ubuntu-web</p>
                            <p class='white'>:</p>
                            <p class='blue'>~</p>
                            <p class='white'>$ </p>
                        </span>
                    </div>
                </div>
            </div>`
    },
    {
        id: 'base.ubuntu.terminal.logger',
        baseWidth:700,
        baseHeight:550,
        layout: `
        
        <link rel="stylesheet" href="./sources/css/global.css">
        <link rel="stylesheet" href="./sources/css/apps/base.ubuntu.terminal.css">

            <div class="app app_terminal">
                <div class="app_handleBar">
                    <div class="app_terminal-body-header">
                        <button onclick="this.closest('div.app').querySelector('div.app_terminal-body-contents').innerHTML = ''">
                            <img src="./sources/image/icons/Yaru/scalable/actions/edit-clear-symbolic.svg" alt="">
                        </button>
                        <button onclick="downloadLog()">
                            <img src="./sources/image/icons/Yaru/scalable/actions/document-save-symbolic.svg" alt="">
                        </button>
                        <button onclick='document.getElementById("debugMenu").classList.toggle("hidden");'>
                            <img src="./sources/image/icons/Yaru/scalable/apps/settings-symbolic.svg" alt="">
                        </button>
                        <p>Logger</p>
                        <div class="app_terminal_windowbuttons">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="">
                            </button>
                            <button onclick='maximizeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg" alt="">
                            </button>
                            <button onclick='closeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>

                <div class="app_terminal-body">
                    <div class="app_terminal-body-contents">
                    </div>
                </div>
            </div>`
    },
    {
        id: 'base.ubuntu.softwareupdater',
        resizable: false,
        baseWidth:600,
        baseHeight:150,
        layout: `
        
        <link rel="stylesheet" href="./sources/css/global.css">
        <link rel="stylesheet" href="./sources/css/apps/base.ubuntu.softwareupdater.css">

            <div class="app app_softwareupdater">
                <div class="app_handleBar">
                    <div class="app_softwareupdater-body-header">
                        <div class='spacer'></div>
                        <p>Software Updater</p>
                        <div class="app_softwareupdater_windowbuttons">
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="">
                            </button>
                            <button onclick='closeApp(this)'>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>

                <div class="app_softwareupdater-body">
                    <div class="app_softwareupdater-body-contents">
                        <div class="app_softwareupdater-body-main">
                            <img src='./sources/image/icons/Yaru/apps/software-updater.png'>
                            <p>The software on this computer is up to date.
                        </div>
                        <div class="app_softwareupdater-body-buttons">
                            <button>Settings...</button>
                            <button onclick='closeApp(this)'>OK</button>
                        </div>
                    </div>
                </div>
            </div>`
    }
];