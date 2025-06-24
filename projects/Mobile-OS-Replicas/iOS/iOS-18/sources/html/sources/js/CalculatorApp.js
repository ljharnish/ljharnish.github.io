const buttons = document.getElementById('buttons');

const symbols = [
    '<sf-symbol glyph="plus" color="white"></sf-symbol>',
    '<sf-symbol glyph="minus" color="white"></sf-symbol>',
    '<sf-symbol glyph="divide" color="white"></sf-symbol>',
    '<sf-symbol glyph="multiply" color="white"></sf-symbol>'
];

let textLastNum = '';
let textCurrNum = '';

let justEqualed = false;

Array.from(buttons.children).forEach((child) => {
    let buttonWhat = child.id.split('_button')[0];
    let bigTextEl = document.getElementById('currentNum');
    let smallTextEl = document.getElementById('lastNum');

    console.log(buttonWhat);

    console.log(parseInt(buttonWhat))

    child.addEventListener('click', () => {
        handleButton(buttonWhat);
    });

    function handleButton(button) {
        switch(button) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(justEqualed)  {
                    textCurrNum = '';
                    justEqualed = false;
                }
                textCurrNum += buttonWhat;
                break;
            
            case 'period':
                if(textCurrNum.length == 0) return;
                if(textCurrNum.toString().includes('.')) {
                    textCurrNum = textCurrNum.replace('.', '');
                    textCurrNum += '.';
                    return;
                }
                textCurrNum += '.';
                break;

            case 'divide':
                if(textCurrNum.length == 0) return;
                if(
                    textCurrNum[textCurrNum.length - 1] == '/' ||
                    textCurrNum[textCurrNum.length - 1] == '*' ||
                    textCurrNum[textCurrNum.length - 1] == '-' ||
                    textCurrNum[textCurrNum.length - 1] == '+'
                ) return;
                textCurrNum += '/';
                justEqualed = false;
                break;

            case 'multiply':
                if(textCurrNum.length == 0) return;
                if(
                    textCurrNum[textCurrNum.length - 1] == '/' ||
                    textCurrNum[textCurrNum.length - 1] == '*' ||
                    textCurrNum[textCurrNum.length - 1] == '-' ||
                    textCurrNum[textCurrNum.length - 1] == '+'
                ) return;
                textCurrNum += '*';
                justEqualed = false;
                break;

            case 'minus':
                if(textCurrNum.length == 0) return;
                if(
                    textCurrNum[textCurrNum.length - 1] == '/' ||
                    textCurrNum[textCurrNum.length - 1] == '*' ||
                    textCurrNum[textCurrNum.length - 1] == '-' ||
                    textCurrNum[textCurrNum.length - 1] == '+'
                ) return;
                textCurrNum += '-';
                justEqualed = false;
                break;

            case 'plus':
                if(textCurrNum.length == 0) return;
                if(
                    textCurrNum[textCurrNum.length - 1] == '/' ||
                    textCurrNum[textCurrNum.length - 1] == '*' ||
                    textCurrNum[textCurrNum.length - 1] == '-' ||
                    textCurrNum[textCurrNum.length - 1] == '+'
                ) return;
                textCurrNum += '+';
                justEqualed = false;
                break;

            case 'equals':
                if(textCurrNum.length == 0) return;
                justEqualed = true;
                textLastNum = textCurrNum.toString();
                textCurrNum = eval(textCurrNum.toString());
                break;

            case 'minus_plus':
                if(textCurrNum.length == 0) return;
                if(textCurrNum[0] == '-') textCurrNum = textCurrNum.slice(1)
                else textCurrNum = '-' + textCurrNum;
                break;

            case 'ac':
                if(textCurrNum.length == 0) return;
                textCurrNum = '0';
                textLastNum = '';
                break;
        }

        showUI();
    }

    function showUI() {
        currentNumHTML = 
        textCurrNum.toString()
        .replaceAll(/(?<!sf)(-)/g, symbols[1])
        .replaceAll(/\/(?!sf)/g, symbols[2])
        .replaceAll('+', symbols[0])
        .replaceAll('*', symbols[3])

        
        lastNumHTML = 
        textLastNum.toString()
        .replaceAll(/(?<!sf)(-)/g, symbols[1])
        .replaceAll(/\/(?!sf)/g, symbols[2])
        .replaceAll('+', symbols[0])
        .replaceAll('*', symbols[3])

        bigTextEl.innerHTML = currentNumHTML;
        smallTextEl.innerHTML = lastNumHTML;
    }
});