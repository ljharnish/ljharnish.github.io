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

    if(!window.CONNECTIONVARIABLES.debug.experiment_darkmode.enabled) {
        document.body.classList.remove('dark');
    } else {
        if(!document.getElementById('iphoneScreenshots').classList.contains('dark')) document.body.classList.add('dark');
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