//? Custom elements for HTML

//? All applications sit in a custom element
//? Syntax: <ubuntu-application type='app.package.id'>
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
            this.style.width = filteredAppLayouts[0].baseWidth + 'px';
            this.style.height = filteredAppLayouts[0].baseHeight + 'px';
            dragElement(this);
        }
    }
}

customElements.define('ubuntu-application', Application);