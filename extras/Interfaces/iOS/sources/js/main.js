document.querySelectorAll('img').forEach((el) => {
    el.draggable = false;
    el.style.pointerEvents = 'none';
});

document.querySelectorAll('div.homeIcon').forEach((el) => { 
    el.children[0].addEventListener('click', () => {
        el.classList.add('homeIconClick');

        let newApp = document.createElement('div');
        newApp.classList.add('homeIconShow');
        newApp.innerHTML = `<img src="${el.querySelector('img').src}" alt="">`;
        newApp.style.top = el.offsetTop + 'px';
        newApp.style.left = el.offsetLeft + 'px';
    
        el.appendChild(newApp);

        openNewApp('./sources/html/' + el.getAttribute('app') + 'App.html');

        setTimeout(() => {
            newApp.remove();
        }, 1000);
    });
})

function setTime() {
    let time = new Date(Date.now());

    let hours = time.getHours();
    hours = hours % 12;
    let mins = time.getMinutes();
    if(mins < 10) mins = '0' + mins;

    const timeStr = hours + ":" + mins;

    return timeStr;
}

const timeInterval = setInterval(() => { document.getElementById('topBarTimeP').innerText = setTime() });


function openNewApp(link) {
    let currentApp = document.getElementById('currentApp');
    currentApp.children[0].src = link;
    if(currentApp.classList.contains('noApp')) currentApp.classList.remove('noApp');

    currentApp.children[0].addEventListener('load', () => {
        if(document.getElementById('currentApp').children[0].attributes.src.value == '') return;
        
        let theme = currentApp.children[0].contentDocument.head.querySelector('meta[theme]').getAttribute('theme')
        
        if(theme == 'light') {
            document.getElementById('topBarTimeP').style.color = 'black';
            document.querySelectorAll('.topBar-right > div').forEach((el) => {
                el.style.filter = 'invert(1)';
            });

        } else {
            document.getElementById('topBarTimeP').style.color = 'white';
        }
    });

    setTimeout(()=> { 
        if(currentApp.children[0].contentDocument.body.innerText.includes('Cannot GET')) {
            closeApp();
        } 
    }, 300)
}

function closeApp() {
    let currentApp = document.getElementById('currentApp');
    currentApp.classList.add('noApp');
    setTimeout(() => { currentApp.children[0].src = ''; }, 450);

    document.getElementById('topBarTimeP').style.color = '';
    document.querySelectorAll('.topBar-right > div').forEach((el) => {
        el.style.filter = '';
    });
}