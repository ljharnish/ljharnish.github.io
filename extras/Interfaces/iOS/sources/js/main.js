document.querySelectorAll('img').forEach((el) => {
    el.draggable = false;
    el.style.pointerEvents = 'none';
});

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
            glyph = './sources/sf-symbols/glyphs/' + this.getAttribute("glyph") + '.png';
        } else {
            glyph = './sources/sf-symbols/glyphs_white/' + this.getAttribute("glyph") + '.png';
        }

        const showGlyph = document.createElement("img");
        showGlyph.src = glyph;
        showGlyph.style.height = "100%";

        shadow.appendChild(showGlyph);
    }
}

customElements.define('sf-symbol', SFSymbol);


document.querySelectorAll('div.homeIcon').forEach((el) => { 
    el.addEventListener('click', () => {
        el.classList.add('homeIconClick');

        let newApp = document.createElement('div');
        newApp.classList.add('homeIconShow');
        newApp.innerHTML = `<img src="${el.querySelector('img').src}" alt="">`;
        newApp.style.top = el.offsetTop + 'px';
        newApp.style.left = el.offsetLeft + 'px';
    
        el.appendChild(newApp);

        setTimeout(() => {
            newApp.remove();
        }, 600);
    });
})

let details = navigator.userAgent; 
let regexp = /android|iphone|kindle|ipad/i; 
let isMobileDevice = regexp.test(details); 
if (isMobileDevice) { 
    document.body.classList.add('mobile')
}

function setTime() {
    let time = new Date(Date.now());

    let hours = time.getHours();
    hours = hours % 12;
    let mins = time.getMinutes();
    if(mins < 10) mins = '0' + mins;

    const timeStr = hours + ":" + mins;

    return timeStr;
}

const timeInterval = setInterval(() => { document.getElementById('topBarTimeP').innerText = setTime() })