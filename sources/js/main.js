window.addEventListener('scroll', () => {
    if(window.scrollY > 110) {
        document.getElementById('scrollUp').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('topScroll');
    } else {
        document.getElementById('scrollUp').classList.add('hidden');
        document.getElementsByTagName('header')[0].classList.remove('topScroll');
    }
});