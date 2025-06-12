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
    changeBattery(window.CONNECTIONVARIABLES.battery.level)
    switchAppearance();

    if(window.CONNECTIONVARIABLES.debug.showDebug.enabled) {
        document.getElementById('debugOptions').classList.remove('hidden');
    } else {
        if(!document.getElementById('debugOptions').classList.contains('hidden')) document.getElementById('debugOptions').classList.add('hidden');
    }
    
    if(window.CONNECTIONVARIABLES.debug.showDebugScreenshots.enabled) {
        document.getElementById('iphoneScreenshots').classList.remove('hidden');
    } else {
        if(!document.getElementById('iphoneScreenshots').classList.contains('hidden')) document.getElementById('iphoneScreenshots').classList.add('hidden');
    }

    if(window.CONNECTIONVARIABLES.debug.experiment_controlCenter.enabled) {
        document.body.classList.add('showControlBtns');
    } else {
        if(document.body.classList.contains('showControlBtns')) document.body.classList.remove('showControlBtns');
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
    

    if(window.CONNECTIONVARIABLES.debug.iconCircles.enabled) {
        document.body.classList.add('iconCircles');
    } else {
        if(document.body.classList.contains('iconCircles')) document.body.classList.remove('iconCircles');
    }
    
    if(window.CONNECTIONVARIABLES.debug.iconGlowOnly.enabled) {
        document.body.classList.add('iconGlowOnly');
    } else {
        if(document.body.classList.contains('iconGlowOnly')) document.body.classList.remove('iconGlowOnly');
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