const iosHolder = document.getElementById('iosHolder');
const iphoneOverlay = document.getElementById('iphoneOverlay');
const dynamicOverlay = document.getElementById('iphoneDynamicIslandOverlay');

const lockScreen = document.getElementById('lockScreen');

function showAnimation() {
    iosHolder.classList.remove('animate');
    iphoneOverlay.classList.remove('animate');
    dynamicOverlay.classList.remove('animate');

    iosHolder.classList.add('animate');
    iphoneOverlay.classList.add('animate');
    dynamicOverlay.classList.add('animate');
}