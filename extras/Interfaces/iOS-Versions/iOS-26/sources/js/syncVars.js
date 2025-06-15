//! YOU'RE GOING TO GET CONFUSED! -HEADS UP-
//? What this does:
//?     - On a click in the app, it will get its global variables from inside,
//?     - It will compare the variables inside the app with the ones in the main window,
//?     - If they are different, it will update the main window variables.
//?     - Thus (HOPEFULLY) allowing the app to work with the main window variables.

function syncVariables(variables) {
    let appVariables = variables;
    
    for (const [key, value] of Object.entries(appVariables)) {
        if (window.CONNECTIONVARIABLES[key] !== value) {
            window.CONNECTIONVARIABLES[key] = value;
        }
    }
    
    console.log('Variables synced:', window.CONNECTIONVARIABLES);

    if(window.CONNECTIONVARIABLES.media.audio.playing) handleAudioPlaying(window.CONNECTIONVARIABLES.media.audio);
    handleNewVariables();
}

function handleNewVariables() {
    localStorage.setItem('savedVars', JSON.stringify(window.CONNECTIONVARIABLES));
    switchAppearance();

    if(window.CONNECTIONVARIABLES.debug.showDebug.enabled) {
        document.getElementById('debugOptions').classList.remove('hidden');
    } else {
        if(!document.getElementById('debugOptions').classList.contains('hidden')) document.getElementById('debugOptions').classList.add('hidden');
    }
    
    if(!window.innerHeight > window.innerWidth) {
        if(window.CONNECTIONVARIABLES.debug.experiment_fullscreen.enabled) {
            document.body.classList.add('fullscreen');
            document.documentElement.requestFullscreen();
        } else {
            if(document.body.classList.contains('fullscreen')) {
                document.body.classList.remove('fullscreen');
                document.exitFullscreen();
            }
        }
    }

    if(window.CONNECTIONVARIABLES.debug.showInvalidIcons.enabled) {
        document.body.classList.add('showInvalidIcons');
    } else {
        if(document.body.classList.contains('showInvalidIcons')) document.body.classList.remove('showInvalidIcons');
    }
    
    if(window.CONNECTIONVARIABLES.debug.showIconLabels.enabled) {
        document.body.classList.add('showHSLabels');
    } else {
        if(document.body.classList.contains('showHSLabels')) document.body.classList.remove('showHSLabels');
    }
    
    if(window.CONNECTIONVARIABLES.debug.performanceMode.enabled) {
        document.body.classList.add('performanceMode');
    } else {
        if(document.body.classList.contains('performanceMode')) document.body.classList.remove('performanceMode');
    }
    
    if(window.CONNECTIONVARIABLES.debug.superPerformanceMode.enabled) {
        document.body.classList.add('superPerformanceMode');
    } else {
        if(document.body.classList.contains('superPerformanceMode')) document.body.classList.remove('superPerformanceMode');
    }

    switch(window.CONNECTIONVARIABLES.settings.actionButtonFunction) {
        case 0: //? Open Developer Panel
            document.getElementById('actionButton').setAttribute('onclick', "openNewApp('./sources/html/DevPanelApp.html')");
            break;
        case 1:
            document.getElementById('actionButton').setAttribute('onclick', "if(window.CONNECTIONVARIABLES.settings.display_brightness_appearance=='dark')window.CONNECTIONVARIABLES.settings.display_brightness_appearance='light';else window.CONNECTIONVARIABLES.settings.display_brightness_appearance='dark';handleNewVariables();");
            break;
        case 2:
            document.getElementById('actionButton').setAttribute('onclick', "window.CONNECTIONVARIABLES.debug.debug_hs_icons+=1;if(window.CONNECTIONVARIABLES.debug.debug_hs_icons > 3)window.CONNECTIONVARIABLES.debug.debug_hs_icons=0;handleNewVariables();");
            break;
        case 3:
            document.getElementById('actionButton').setAttribute('onclick', "window.CONNECTIONVARIABLES.debug.performanceMode.enabled=!window.CONNECTIONVARIABLES.debug.performanceMode.enabled;handleNewVariables();");
            break;
        case 4: 
            document.getElementById('actionButton').setAttribute('onclick', "window.CONNECTIONVARIABLES.debug.superPerformanceMode.enabled=!window.CONNECTIONVARIABLES.debug.superPerformanceMode.enabled;handleNewVariables();");
            break;
        case 5: 
            document.getElementById('actionButton').setAttribute('onclick', "document.getElementById('controlCenter').classList.toggle('open');");
            break;
        default:
            document.getElementById('actionButton').setAttribute('onclick', "openNewApp('./sources/html/DevPanelApp.html')");
            break;
    }
}

let playingAudio = {src:''};

function handleAudioPlaying(audioData) {
    if(playingAudio.src == audioData.url) return;
    playingAudio = new Audio(audioData.url);
    playingAudio.controls = false;

    playingAudio.play().catch(error => {
        console.error('Error playing the audio:', error);
    });
}