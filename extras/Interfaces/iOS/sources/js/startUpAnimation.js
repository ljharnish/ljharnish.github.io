const iosHolder = document.getElementById('iosHolder');
const iphoneOverlay = document.getElementById('iphoneOverlay');
const dynamicOverlay = document.getElementById('iphoneDynamicIslandOverlay');
const lockScreen = document.getElementById('lockScreen');
const animatedText = document.getElementById('animatedText');
const animatedTextH1 = document.querySelector('#animatedText h1');
const animatedTextP = document.querySelector('#animatedText p');
const animatedText2 = document.getElementById('animatedText2');

let showAnimation = function () {
    iosHolder.classList.remove('animate');
    iphoneOverlay.classList.remove('animate');
    dynamicOverlay.classList.remove('animate');

    iosHolder.classList.add('animate');
    iphoneOverlay.classList.add('animate');
    dynamicOverlay.classList.add('animate');
    lockScreen.classList.add('animate');

    setTimeout(() => { 
        animatedTextH1.classList.add('show');
    }, 7500);

    setTimeout(() => { 
        animatedTextP.classList.add('show');
    }, 8500);

    setTimeout(() => { 
        animatedTextH1.classList.remove('show');
        animatedTextP.classList.remove('show');
    }, 12000);

    setTimeout(() => { 
        animatedText2.querySelector('h1').style.opacity = 1;
        document.getElementById('credit').style.opacity = 1;
    }, 27500);

    setTimeout(() => {
        document.getElementById('appleIcon1').style.fill = '#75bd21';
    }, 27750);
    
    setTimeout(() => {
        document.getElementById('appleIcon2').style.fill = '#75bd21';
    }, 28000);
    
    setTimeout(() => {
        document.getElementById('appleIcon3').style.fill = '#ffc728';
    }, 28250);
    
    setTimeout(() => {
        document.getElementById('appleIcon4').style.fill = '#ff661c';
    }, 28500);
    
    setTimeout(() => {
        document.getElementById('appleIcon5').style.fill = '#cf0f2b';
    }, 28750);
    
    setTimeout(() => {
        document.getElementById('appleIcon6').style.fill = '#b01cab';
    }, 29000);
    
    setTimeout(() => {
        document.getElementById('appleIcon7').style.fill = '#00a1de';
    }, 29250);    

    setTimeout(() => {
        document.getElementById('appleIcon1').remove();
        document.getElementById('appleIcon2').remove();
        document.getElementById('appleIcon3').remove();
        document.getElementById('appleIcon4').remove();
        document.getElementById('appleIcon5').remove();
        document.getElementById('appleIcon6').remove();
        document.getElementById('appleIcon7').remove();
        document.getElementById('credit').remove();
        animatedText.remove();
        animatedText2.remove();

        iosHolder.classList.remove('animate');
        iphoneOverlay.classList.remove('animate');
        dynamicOverlay.classList.remove('animate');
        lockScreen.classList.remove('animate');
    }, 32000)
}