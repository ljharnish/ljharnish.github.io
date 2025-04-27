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
}, 500);

function DynamicIslandStyle(type) {
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
        case 'full-width-open':
            island.className = 'DYNAMIC_fullwidth_open_open';
            hideWhole(topLeft, true);
            hideWhole(topRight, true);
            break;

        case 'close-full-width-open':
            hideWhole(topLeft, false);
            hideWhole(topRight, false);
            island.className = '';
            break;
    

        case 'full-width-fat':
            island.className = 'DYNAMIC_fullwidth_fat_open';
            hideWhole(topLeft, true);
            hideWhole(topRight, true);
            break;

        case 'close-full-width-fat':
            hideWhole(topLeft, false);
            hideWhole(topRight, false);
            island.className = '';
            break;



        case 'full-width-thin':
            island.className = 'DYNAMIC_fullwidth_thin_open';
            hideWhole(topLeft, true);
            hideWhole(topRight, true);
            break;

        case 'close-full-width-thin':
            hideWhole(topLeft, false);
            hideWhole(topRight, false);
            island.className = '';
            break;





        case 'new-popup':
            hideAndSizeElement(service, true);
            island.className = 'DYNAMIC_newpopup_open';
            break;

        case 'close-popup':
            hideAndSizeElement(service, false);
            hideAndSizeElement(internet, false);
            hideAndSizeElement(battery, false);
            island.className = '';
            break;
    }
}

function DynamicIslandClose() {
    DynamicIslandSetup({ type: 'Empty' });
    switch(island.classList[0]) {
        case 'DYNAMIC_fullwidth_fat_open':
            DynamicIslandStyle('close-full-width-fat');
            break;

        case 'DYNAMIC_fullwidth_thin_open':
            DynamicIslandStyle('close-full-width-thin');
            break;

        case 'DYNAMIC_fullwidth_open_open':
            DynamicIslandStyle('close-full-width-open');
            break;
        
        default:
            DynamicIslandStyle('close-popup');
            break;
    }
}

function createMusicCover() {
    if(!window.CONNECTIONVARIABLES.media.audio.data) return './sources/image/unknown-file.png'

    let data = window.CONNECTIONVARIABLES.media.audio.data;

    if(data.tags.picture) {
        let imageData = data.tags.picture.data;
        var base64String = "";
        for (var i = 0; i < imageData.length; i++) {
            base64String += String.fromCharCode(imageData[i]);
        }
        return "data:" + data.tags.picture.format + ";base64," + window.btoa(base64String);
    } else {
        return './sources/image/unknown-file.png'
    }
}

function getMusicData() {
    if(!window.CONNECTIONVARIABLES.media.audio.data) return;

    let data = window.CONNECTIONVARIABLES.media.audio.data.tags;

    return {
        title: data.title,
        cover: createMusicCover(),
        artist: data.artist || "Unknown"
    }
}

function DynamicIslandSetup(information) {
    switch(information.type) {
        case 'Empty':
            island.innerHTML = ``;
            break;

        case 'MusicNotification':
            island.innerHTML = `<div id="di_left">
								${information.leftHTML}
							</div>
							<div id="di_right">
								${information.rightHTML}
							</div>`;
            break;

        case 'MusicNotificationFull':
            island.innerHTML = `
							<div class="dynamicIsland_musicTop">
								<div class="dynamic_musicInfo">
									<img src="${information.data.cover}" alt="" draggable="false" style="pointer-events: none;">
									<div class="dynamic_musicText">
										<p>${information.data.title}</p>
										<p>${information.data.artist}</p>
									</div>
								</div>
								<div class="dynamicIsland_musicWaves">
									<sf-symbol glyph="waveform" color="white"></sf-symbol>
								</div>
							</div>
							<div class="dynamicIsland_musicProgress">
								<p id="dynamicIsland_musicProgress_current">
									1:20
								</p>
								<div class="dynamicIsland_musicProgressBarOuter">
									<div class="dynamicIsland_musicProgressBarInner">
										
									</div>
								</div>
								<p id="dynamicIsland_musicProgress_end">
									-0:15
								</p>
							</div>
							<div class="dynamicIsland_musicControls">
								<div class="spacer"></div>
								<button><sf-symbol glyph="backward.fill" color="white"></sf-symbol></button>
								<button><sf-symbol glyph="pause.fill" color="white"></sf-symbol></button>
								<button><sf-symbol glyph="forward.fill" color="white"></sf-symbol></button>
								<button><sf-symbol glyph="airplayaudio" color="white"></sf-symbol></button>
							</div>
						`
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
								<img src="./sources/image/Profile Pictures/ThugBob.webp" alt="">
								<p>ThugBob CripPants</p>
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

        case 'MusicNotification':
            DynamicIslandSetup({ type: 'MusicNotification', leftHTML: `<img style='border-radius:10px' src="${createMusicCover()}" alt="Apple Music">`, rightHTML: '<sf-symbol glyph="waveform" color="white"></sf-symbol>'});
            DynamicIslandStyle('new-popup')
            break;

        case 'Charging':
            DynamicIslandSetup({ type: 'Charging', chargePercent: 50 });
            DynamicIslandStyle('full-width-thin');
            break;

        case 'NewCall':
            DynamicIslandSetup({ type: 'NewCall' });
            DynamicIslandStyle('full-width-fat');
            break;

    }
}

document.getElementById('dynamicIsland').addEventListener('click', () => {
    let dynamic = document.getElementById('dynamicIsland');
    if(dynamic.innerHTML.trim() == '') return;

    DynamicIslandSetup({
        type: 'MusicNotificationFull',
        data: getMusicData()
    });

    DynamicIslandStyle('full-width-open');

    function disableOnOutClick(e) {
        if(e.target == document.getElementById('dynamicIsland')) return
        DynamicIslandShowcase('MusicNotification');
        document.removeEventListener('click', disableOnOutClick, true);
    }

    document.addEventListener('click', disableOnOutClick, true);
});