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

function DynamicIslandClose() {
    DynamicIslandSetup({ type: 'Empty' });
    switch(island.classList[0]) {
        case 'DYNAMIC_fullwidth_fat_open':
            DynamicIslandInteract('close-full-width-fat');
            break;

        case 'DYNAMIC_fullwidth_thin_open':
            DynamicIslandInteract('close-full-width-thin');
            break;
        
        default:
            DynamicIslandInteract('close-popup');
            break;
    }
}

function DynamicIslandSetup(information) {
    switch(information.type) {
        case 'Empty':
            island.innerHTML = ``;
            break;

        case 'NewNotification':
            island.innerHTML = `<div id="di_left">
								${information.leftHTML}
							</div>
							<div id="di_right">
								${information.rightHTML}
							</div>`;
            break;

        case 'Charging':
            island.innerHTML = `<div id="DYNAMIC_fullwidththin_items">
								<p id="DYNAMIC_fullwidththin_text">Charging</p>
								<div id="DYNAMIC_fullwidththin_icon">
									${information.chargePercent}%
									<div id="DYNAMIC_fullwidththin_icon_battery">
										<div style="width: ${information.chargePercent}%;"></div>
									</div>
								</div>
							</div>`;
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

function DynamicIslandShowcase(type) {
    DynamicIslandClose();
    switch(type) {
        case 'Empty':
            DynamicIslandSetup({ type: 'Empty' });
            break;

        case 'NewNotification':
            DynamicIslandSetup({ type: 'NewNotification', leftHTML: '<img src="./sources/image/App Icons/music.png" alt="Apple Music">', rightHTML: '<sf-symbol glyph="waveform" color="white"></sf-symbol>'});
            DynamicIslandInteract('new-popup')
            break;

        case 'Charging':
            DynamicIslandSetup({ type: 'Charging', chargePercent: 50 });
            DynamicIslandInteract('full-width-thin');
            break;

        case 'NewCall':
            DynamicIslandSetup({ type: 'NewCall' });
            DynamicIslandInteract('full-width-fat');
            break;

    }
}