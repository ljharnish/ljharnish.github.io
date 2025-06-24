window.addEventListener('scroll', () => {
    const nav = document.getElementById('mobileNav');
    nav.style.top = window.scrollY + 'px';

    if(window.scrollY > 110) {
        document.getElementById('scrollUp').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('topScroll');
    } else {
        document.getElementById('scrollUp').classList.add('hidden');
        document.getElementsByTagName('header')[0].classList.remove('topScroll');
    }
});

window.addEventListener('load',()=>{document.getElementById(window.location.hash.split('#')[1]).scrollIntoView()});