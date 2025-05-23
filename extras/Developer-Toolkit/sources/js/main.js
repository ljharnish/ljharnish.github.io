
let favoritedTabs = [];
let mobile = false;
let modern = true;

document.addEventListener('DOMContentLoaded', function() {
    mobileCheck();

	ready();
}, false);

function ready() {
    
    document.querySelectorAll('a.sideItem[href]').forEach((a) => {
        function clickListener(e) {
            if(!e.target.href.includes('#')) return
            document.getElementById('body').scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault();
            history.pushState({}, '', e.target.href);
            newTabAndHighlight({newURL:e.target.href})
        }

        a.addEventListener('click', clickListener);

        if(a.classList.contains('disabled')) {

            a.href = 'javascript:void(0)';
            a.removeEventListener('click', clickListener, true)
        }
    });

    if(getCookie('modern') != 'true') {
        if(getCookie('modern') == '') return; 
        modern = false;
    }

    if(getCookie('favorites').length > 0) {
        favoritedTabs = getCookie('favorites').split('|');
    }

    if(favoritedTabs.length == 0) {
        document.getElementById('favorites').style.display = 'none';
    } else {
        setFavorites();
    }

    newTabAndHighlight({newURL: window.location.href});

    document.querySelectorAll('div.sideCategoryP').forEach((cat) => {
        if(cat.classList.contains('search') || cat.id == 'favorites') return;
        let newCat = cat.cloneNode(true);
        newCat.classList.remove('sideCategoryP');
        newCat.classList.add('sideCategoryM');

        document.getElementById('mobileSearchSettings').appendChild(newCat);
    });
    
    document.getElementById('mobileSearchSettings').innerHTML = document.getElementById('mobileSearchSettings').innerHTML.replaceAll('<a', '<button').replaceAll('a>', 'button>').replaceAll('<div class="newItem">New!</div>', '');

    document.querySelectorAll('button.sideItem').forEach((btn) => {
        let a = document.querySelector(`a[href='${btn.getAttribute('href')}']`);

        btn.addEventListener('click', () => {
            a.click();
            document.getElementById('mobileSearch').classList.remove('open');
        });
    });

    document.querySelectorAll('*').forEach((e) => e.scrollTo(0, 0));
    document.querySelectorAll('code').forEach((e) => e.scrollTo(0, 0));
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    mobileCheck();
    modernOrOld(modern);
}

function setFavorites() {
    let favorites = document.getElementById('favorites');

    favorites.innerHTML='<div class="sideCollapseHeader"><h1>Favorites</h1></div>'

    favoritedTabs.forEach((tab) => {
        let tabEl = document.querySelector(`a[href='#${tab}']:not(.favorited)`);
        let clonedTab = tabEl.cloneNode(true);

        favorites.appendChild(clonedTab);

        clonedTab.classList.add('favorited');
        clonedTab.classList.remove('activeTab');
        if(clonedTab.querySelector('div.newItem')) clonedTab.querySelector('div.newItem').remove();

        function clickListener(e) {
            if(!e.target.href.includes('#')) return
            e.preventDefault();
            history.pushState({}, '', e.target.href);
            newTabAndHighlight({newURL:e.target.href}, clonedTab);
        }

        clonedTab.addEventListener('click', clickListener);
    });
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

if(getCookie('dark') == 'true') {
    document.querySelector('#themeBtn img').src = './sources/image/moon.svg';
    document.getElementById('wrapper').classList.add('dark');
    document.getElementById('hljs-style').href = './sources/js/highlightjs/styles/atom-one-dark.min.css'
}

//! Run mobile detect

window.mobileCheck = (function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

    let mobileWidth = 760;

    if(window.innerWidth<=mobileWidth) check = true;
    
    window.addEventListener('resize', () => {
        if(window.innerWidth <= 760) {
            if(document.getElementById('wrapper').classList.contains('mobile')) return;
            document.getElementById('wrapper').classList.add('mobile');
            document.getElementById('sidebar').style.width = '10px';
        } else {
            if(!document.getElementById('wrapper').classList.contains('mobile')) return;
            document.getElementById('wrapper').classList.remove('mobile');
            document.getElementById('sidebar').style.width = '25%';
        }
    });

    if(check)document.getElementById('wrapper').classList.add('mobile');

    mobile = check;

    return;
});

document.querySelector('#searchBox input').addEventListener('keyup', (e) => {
    if(
        e.key != 'Backspace' &&
        e.key != 'Enter' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight' &&
        e.key.length != 1
    ) { e.preventDefault(); return; };
    

    document.querySelectorAll('a.sideItem').forEach((item) => {
        if(item.id == 'searchBox' || item.id == 'searchBtnMobile') return;

        let itemName = item.querySelector('p').innerText;

        if(!itemName.toLowerCase().includes(document.querySelector('#searchBox input').value.toLowerCase())) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });

    document.querySelectorAll('div.sideCategoryP').forEach((cat) => {
        let invisibleItems = [];
        let items = cat.querySelectorAll('a.sideItem');

		Array.from(items).forEach((itm) => { if(itm.id == 'searchBox' || itm.id == 'searchBtnMobile') return; if(itm.style.display == 'none') invisibleItems.push(itm); });

        if(invisibleItems.length == items.length) {
            cat.style.display = 'none';
        } else {
            cat.style.display = 'block';
        }
    });

    let shownCategories = Array.from(document.querySelectorAll('div.sideCategoryP'));

    let hiddenNum = 0;

    Array.from(shownCategories).forEach(el => {
        if(el.classList.contains('search')) shownCategories.splice(shownCategories.indexOf(el), 1);
        if(el.style.display == 'none') hiddenNum++;
    });

    if(hiddenNum == shownCategories.length) document.getElementById('searchNotFound').style.display = 'block';
    else document.getElementById('searchNotFound').style.display = 'none';
});


document.querySelector('#mobileSearchBar input').addEventListener('keyup', (e) => {
    if(
        e.key != 'Backspace' &&
        e.key != 'Enter' &&
        e.key != 'ArrowLeft' &&
        e.key != 'ArrowRight' &&
        e.key.length != 1
    ) { e.preventDefault(); return; };
    

    document.querySelectorAll('button.sideItem').forEach((item) => {
        let itemName = item.querySelector('p').innerText;

        if(!itemName.toLowerCase().includes(document.querySelector('#mobileSearchBar input').value.toLowerCase())) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });

    document.querySelectorAll('div.sideCategoryM').forEach((cat) => {
        let invisibleItems = [];
        let items = cat.querySelectorAll('button.sideItem');

		Array.from(items).forEach((itm) => { if(itm.style.display == 'none') invisibleItems.push(itm); });

        if(invisibleItems.length == items.length) {
            cat.style.display = 'none';
        } else {
            cat.style.display = 'block';
        }
    });

    let shownCategories = Array.from(document.querySelectorAll('div.sideCategoryM'));

    let hiddenNum = 0;

    Array.from(shownCategories).forEach(el => {
        if(el.style.display == 'none') hiddenNum++;
    });

    if(hiddenNum == shownCategories.length) document.getElementById('searchNotFoundM').style.display = 'block';
    else document.getElementById('searchNotFoundM').style.display = 'none';
});

document.getElementById('searchBtnMobile').addEventListener('click', () => {
    //? search box shows up
});

document.getElementById('favoriteBtn').addEventListener('click', (e) => {
    let activeCategory = document.querySelector('div.categoryBody.active');

    if(favoritedTabs.indexOf(activeCategory.id) > -1) {
        favoritedTabs.splice(favoritedTabs.indexOf(activeCategory.id), 1);
        e.target.children[0].src = './sources/image/icons/star-outline.svg';
    } else {
        favoritedTabs.push(activeCategory.id);
        e.target.children[0].src = './sources/image/icons/star.svg';
    }

    let str = favoritedTabs.join('|');
    if(str[0] === '|') {
        str = str.slice(1);
    }

    setFavorites();

    if(favoritedTabs.length == 0) {
        document.getElementById('favorites').style.display = 'none';
    } else {
        document.getElementById('favorites').style.display = 'block';
    }

    setCookie('favorites', str, 365);
});

document.getElementById('themeBtn').addEventListener('click', (e) => {
    let wrapper =  document.getElementById('wrapper');
    
    let innerImg = e.target.querySelector('img');

    wrapper.classList.toggle('dark');

    if(wrapper.classList.contains('dark')) {
        innerImg.src = './sources/image/moon.svg';
        setCookie('dark', 'true', 365);
        document.getElementById('hljs-style').href = './sources/js/highlightjs/styles/atom-one-dark.min.css'
        return;
    }

    innerImg.src = './sources/image/sun.svg';
    setCookie('dark', 'false', 365);
    document.getElementById('hljs-style').href = './sources/js/highlightjs/styles/atom-one-light.min.css'
});

document.getElementById('modernBtn').addEventListener('click', (e) => {
    modern = !modern;
    modernOrOld(modern);
    setCookie('modern', modern, 365);
});

function newTabAndHighlight(e, el) {
    if(e.oldURL) e.preventDefault()
    if(!e.newURL.includes('#')) e.newURL += '#';

    if(document.getElementById('activeCategory')) document.getElementById('activeCategory').remove();

    let itemTab = el || document.querySelector(`a[href="#${e.newURL.split('#')[1]}"]:not(.favorited)`);

    document.querySelectorAll('.activeTab').forEach((e) => {e.classList.remove('activeTab');})

    itemTab.classList.add('activeTab');
    
    if(itemTab.querySelector('div.newItem')) itemTab.querySelector('div.newItem').remove(); 

    if(favoritedTabs.indexOf(e.newURL.split('#')[1]) > -1) {
        document.getElementById('favoriteBtn').children[0].src = './sources/image/icons/star.svg';
    } else { 
        document.getElementById('favoriteBtn').children[0].src = './sources/image/icons/star-outline.svg';
    }

    try {
        document.querySelectorAll('div.categoryBody.active').forEach((e) => {e.classList.remove('active')});


        if(e.newURL.endsWith('#')) {
            document.getElementById('homePage').classList.add('active');
            return;
        }
        
        document.getElementById(e.newURL.split('#')[1]).classList.add('active');

        document.getElementById('body').scrollTop = 0;

    } catch(error) {
        console.error(`Page Not Found | ID: ${e.newURL.split('#')[1]}\n\n` + error)
    }



    if(e.newURL.split('#')[1] == 'cameraView') {
        var video = document.querySelector("#cameraViewVideo");

        if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
        }
    }
}

function mobileSearchBar(a) {
    let searchBar = document.getElementById('mobileSearch');

    if(a) {
        searchBar.classList.add('open');
    } else {
        searchBar.classList.remove('open');
    }
}

function modernOrOld(m) {
    let mS = document.getElementById('stylesheet');
    let lM = document.getElementById('lightSheet');
    let dM = document.getElementById('darkSheet');
    let mO = document.getElementById('mobileSheet');
    let bN = document.getElementById('modernBtn');

    if(m) {
        mS.href = './sources/css/style.css';
        lM.disabled = false;
        dM.disabled = false;
        mO.disabled = false;
        bN.children[0].style.display = 'none';
        bN.children[1].style.display = 'block';
    } else {
        mS.href = './sources/css/oldstyle.css';
        lM.disabled = true;
        dM.disabled = true;
        mO.disabled = true;
        bN.children[0].style.display = 'block';
        bN.children[1].style.display = 'none';
    }
}