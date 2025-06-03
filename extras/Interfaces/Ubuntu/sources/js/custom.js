let validApps = [
    'base.ubuntu.filemanager'
]


class Application extends HTMLElement {
    static observedAttributes = ['type'];

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        let type = this.getAttribute("type") || null;

        if(type == 'base.ubuntu.filemanager') {
            shadow.innerHTML = `
            <link rel="stylesheet" href="./sources/css/apps/filemanager.css">

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
                            <button>
                                <img src="./sources/image/icons/Yaru/scalable/ui/window-maximize-symbolic.svg" alt="">
                            </button>
                            <button onclick='this.closest("div.app").parentNode.host.remove()'>
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
            </div>`;

            dragElement(this);
        } else {
            console.error(`'${type}' is not a valid application ID.`)
        }
    }
}

customElements.define('ubuntu-application', Application);