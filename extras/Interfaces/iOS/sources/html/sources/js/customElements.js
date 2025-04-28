class SFSymbol extends HTMLElement {
    static observedAttributes = ['glyph', 'color'];

    constructor() {
        super();
    }WS

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const color = this.getAttribute("color") || "black";
        let glyph = this.getAttribute("glyph");

        if(color == 'black') {
            glyph = '../sf-symbols/glyphs/' + this.getAttribute("glyph") + '.png';
        } else {
            glyph = '../sf-symbols/glyphs_white/' + this.getAttribute("glyph") + '.png';
        }

        const showGlyph = document.createElement("img");
        showGlyph.src = glyph;
        showGlyph.style.height = "100%";
        showGlyph.draggable = false;

        shadow.appendChild(showGlyph);
    }
}

customElements.define('sf-symbol', SFSymbol);