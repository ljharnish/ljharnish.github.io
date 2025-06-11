const iosHolder = document.getElementById('iosHolder');
const skipIntro = document.getElementById('skipIntro');
const lockScreen = document.getElementById('lockScreen');
const animatedText = document.getElementById('animatedText');
const animatedTextH1 = document.querySelector('#animatedText h1');
const animatedTextP = document.querySelector('#animatedText p');
const animatedText2 = document.getElementById('animatedText2');

let showAnimation = function () {

    iosHolder.classList.remove('animate');
    lockScreen.classList.remove('animate');

    iosHolder.classList.add('animate');
    lockScreen.classList.add('animate');

    let timeout1 = setTimeout(() => { 
        animatedTextH1.classList.add('show');
    }, 7500);

    let timeout2 = setTimeout(() => { 
        animatedTextP.classList.add('show');
    }, 8500);

    let timeout3 = setTimeout(() => { 
        animatedTextH1.classList.remove('show');
        animatedTextP.classList.remove('show');
    }, 12000);

    let timeout4 = setTimeout(() => { 
        animatedText2.querySelector('h1').style.opacity = 1;
        document.getElementById('credit').style.opacity = 1;
    }, 27500);

    let timeout5 = setTimeout(() => {
        document.getElementById('appleIcon1').style.fill = '#75bd21';
    }, 27750);
    
    let timeout6 = setTimeout(() => {
        document.getElementById('appleIcon2').style.fill = '#75bd21';
    }, 28000);
    
    let timeout7 = setTimeout(() => {
        document.getElementById('appleIcon3').style.fill = '#ffc728';
    }, 28250);
    
    let timeout8 = setTimeout(() => {
        document.getElementById('appleIcon4').style.fill = '#ff661c';
    }, 28500);
    
    let timeout9 = setTimeout(() => {
        document.getElementById('appleIcon5').style.fill = '#cf0f2b';
    }, 28750);
    
    let timeout10 = setTimeout(() => {
        document.getElementById('appleIcon6').style.fill = '#b01cab';
    }, 29000);
    
    let timeout11 = setTimeout(() => {
        document.getElementById('appleIcon7').style.fill = '#00a1de';
    }, 29250);    

    let timeout12 = setTimeout(() => {
        //document.getElementById('appleIcon1').remove();
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
        lockScreen.classList.remove('animate');

        skipIntro.remove();
    }, 32000);

    skipIntro.addEventListener('click', () => { 
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        clearTimeout(timeout6);
        clearTimeout(timeout7);
        clearTimeout(timeout8);
        clearTimeout(timeout9);
        clearTimeout(timeout10);
        clearTimeout(timeout11);
        clearTimeout(timeout12);

        //document.getElementById('appleIcon1').remove();
        document.getElementById('appleIcon2').remove();
        document.getElementById('appleIcon3').remove();
        document.getElementById('appleIcon4').remove();
        document.getElementById('appleIcon5').remove();
        document.getElementById('appleIcon6').remove();
        document.getElementById('appleIcon7').remove();
        document.getElementById('credit').remove();
        animatedText.remove();
        //animatedText2.remove();

        iosHolder.classList.remove('animate');
        lockScreen.classList.remove('animate');

        skipIntro.remove();
    });
}