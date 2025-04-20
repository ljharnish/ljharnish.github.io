class SFSymbol extends HTMLElement {
    static observedAttributes = ['glyph', 'color'];

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const color = this.getAttribute("color") || "black";
        let glyph = this.getAttribute("glyph");

        if(color == 'black') {
            glyph = './sources/sf-symbols/glyphs/' + this.getAttribute("glyph") + '.png';
        } else {
            glyph = './sources/sf-symbols/glyphs_white/' + this.getAttribute("glyph") + '.png';
        }

        console.log(glyph);

        const showGlyph = document.createElement("img");
        showGlyph.src = glyph;
        showGlyph.style.height = "100%";

        shadow.appendChild(showGlyph);
    }
}

customElements.define('sf-symbol', SFSymbol);