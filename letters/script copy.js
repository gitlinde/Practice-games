window.onload = () => {
    console.log("ok")

    createHTMLLetters()
    createHTMLInput()


    let isMouseDown = false;
    let firstClickedLetter;
    const brushSize = 2;
    const letterElement = document.querySelectorAll('.letter')
    letterElement.forEach((element, index) => {
        const letter = document.createElement('h2');
        letter.innerText = currentInput
        letter.id = index;
        element.appendChild(letter);

        letter.addEventListener('click', ()=> {
            letter.innerText = currentInput
            if(brushSize !== 2)
                return
            changeMultipleLetters(index)
        })

        letter.addEventListener('mousedown', ()=> {
            isMouseDown = true;
            firstClickedLetter = letter;
        })
        letter.addEventListener('mouseover', ()=> {
            if(!isMouseDown)
                return

            letter.innerText = currentInput
            if(brushSize !== 2)
                return
            changeMultipleLetters(index)

        })
        letter.addEventListener('mouseup', () => {
            isMouseDown = false;
            firstClickedLetter.innerText = currentInput
        });
    });
}
function createHTMLLetters() {
    const letterContainer = document.getElementById('letter-container');

    for(let i = 0; i < 1024; ++i) {
        const letterElement = document.createElement('div');
        letterElement.setAttribute('class','letter')
        letterContainer.appendChild(letterElement);
    }
}

function createHTMLInput() {
    const inputElemenet = document.getElementById('input')
    currentInput = 'X';
    inputElemenet.addEventListener('input', ()=> {
        currentInput = inputElemenet.value;
        currentInput = currentInput.toUpperCase();
    })
}
function changeMultipleLetters(index) {
    const rightLetter = document.getElementById(index+1);
    const leftLetter = document.getElementById(index-1);
    const bottomLetter = document.getElementById(index+32);
    const topLetter = document.getElementById(index-32);

    const letters = [rightLetter, leftLetter, bottomLetter, topLetter]
    letters.forEach(letter => {
        if(letter !== null)
            letter.innerText = currentInput
    })
}
