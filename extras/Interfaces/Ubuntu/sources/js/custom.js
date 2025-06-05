class Application extends HTMLElement {
    static observedAttributes = ['type'];

    constructor() {
        super();
    }

    connectedCallback() {
        let shadow;
        try {
            shadow = this.attachShadow({ mode: "open" });
        } catch (error) {}
        let type = this.getAttribute("type") || null;

        let filteredAppLayouts = appLayouts.filter((a)=>a.id==type);

        if(filteredAppLayouts.length > 0) {
            shadow.innerHTML = filteredAppLayouts[0].layout;
            console.log(this);
            this.style.width = filteredAppLayouts[0].baseWidth + 'px';
            this.style.height = filteredAppLayouts[0].baseHeight + 'px';
            dragElement(this);
        } else {
            //! No app in appLayouts array.
            console.error(`'${type}' is not a valid application ID.`)
        }
    }
}

customElements.define('ubuntu-application', Application);