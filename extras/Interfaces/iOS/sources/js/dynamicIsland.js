const island = document.getElementById("dynamicIsland");
let topLeft = document.querySelector('.topBar-time');
let topRight = document.querySelector('.topBar-right');

let service = document.getElementById('tB_service');
let internet = document.getElementById('tB_internet');
let battery = document.getElementById('tB_battery');

setTimeout(() => {
    service.style.width = service.scrollWidth + 'px';
    internet.style.width = internet.scrollWidth + 'px';
    battery.style.width = battery.scrollWidth + 'px';
}, 200);

function DynamicIslandInteract(type) {
    function hideAndSizeElement(el, hide) {
        if(el.style.display === 'none' && !hide) {
            el.style.display = 'flex';
            el.style.width = el.scrollWidth * 2 + 'px';
            setTimeout(() => { el.style.opacity = 1; }, 300);

        } else if(hide && el.style.display !== 'none') {
            el.style.opacity = 0;
            el.style.width = '0px';
            setTimeout(() => { el.style.display = 'none'; }, 300);
        }
    }

    function hideWhole(el, hide) {
        if(el.style.display === 'none' && !hide) {
            el.style.display = 'flex';
            setTimeout(() => { el.style.width = '100%'; el.style.opacity = 1; }, 300);

        } else if(hide && el.style.display !== 'none') {
            el.style.opacity = 0;
            el.style.width = '0px';
            setTimeout(() => { el.style.display = 'none'; }, 300);
        }
    }

    switch(type) {
        case 'full-width-fat':
            island.classList.add('DYNAMIC_fullwidth_fat_open');
            hideWhole(topLeft, true);
            hideWhole(topRight, true);
            break;

        case 'close-full-width-fat':
            hideWhole(topLeft, false);
            hideWhole(topRight, false);
            island.classList.remove('DYNAMIC_fullwidth_fat_open');
            break;



        case 'full-width-thin':
            island.classList.add('DYNAMIC_fullwidth_thin_open');
            hideWhole(topLeft, true);
            hideWhole(topRight, true);
            break;

        case 'close-full-width-thin':
            hideWhole(topLeft, false);
            hideWhole(topRight, false);
            island.classList.remove('DYNAMIC_fullwidth_thin_open');
            break;





        case 'new-popup':
            hideAndSizeElement(service, true);
            island.classList.add('DYNAMIC_newpopup_open');
            break;

        case 'close-popup':
            hideAndSizeElement(service, false);
            hideAndSizeElement(internet, false);
            hideAndSizeElement(battery, false);
            island.classList.remove('DYNAMIC_newpopup_open');
            break;
    }
}

function DynamicIslandSetup(information) {
    switch(information.type) {
        case 'Empty':
            island.innerHTML = ``;
            break;

        case 'NewCall':
            island.innerHTML = `<div id="DYNAMIC_call_iconname">
								<img src="./sources/image/Profile Pictures/Pwq-1eJc_400x400.jpg" alt="">
								<p>Tim Cook</p>
							</div>

							<div id="DYNAMIC_call_buttons">
								<button id="DYNAMIC_call_decline">
									<sf-symbol glyph="phone.down.fill" color="white"></sf-symbol>
								</button>
								<button id="DYNAMIC_call_accept">
									<sf-symbol glyph="phone.fill" color="white"></sf-symbol>
								</button>
							</div>`
            break;
    }
}