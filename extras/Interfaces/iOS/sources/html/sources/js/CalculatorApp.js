const buttons = document.getElementById('buttons');

Array.from(buttons.children).forEach((child) => {
    let buttonWhat = child.id.split('_button')[0];
    let bigTextEl = document.getElementById('currentNum');
    let smallTextEl = document.getElementById('lastNum');

    console.log(buttonWhat);

    child.addEventListener('click', () => {
        console.log(buttonWhat);
        if(buttonWhat == '0' || parseInt(buttonWhat)) {
            bigTextEl.innerText += buttonWhat;
        }

        if(buttonWhat == 'period') {
            if(bigTextEl.innerText.includes('.')) {
                bigTextEl.innerText = bigTextEl.innerText.replace('.', '');
                bigTextEl.innerText += '.';
                return;
            }
            bigTextEl.innerText += '.';
        }

        if()

        if(buttonWhat == 'equals') {
            smallTextEl.innerText = bigTextEl.innerText;
            bigTextEl.innerText = eval(bigTextEl.innerText);
        }
    });

    smallTextEl.innerHTML.replace('+', '<sf-symbol glyph="plus" color="white"></sf-symbol>')
    smallTextEl.innerHTML.replace('-', '<sf-symbol glyph="minus" style="scale: 0.3" color="white"></sf-symbol>')
    smallTextEl.innerHTML.replace('/', '<sf-symbol glyph="divide" color="white"></sf-symbol>')
    smallTextEl.innerHTML.replace('x', '<sf-symbol glyph="multiply" color="white"></sf-symbol>')
});