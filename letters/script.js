let isMouseDown = false;
let firstClickedLetter;

window.onload = () => {
    createHTMLLetters()
    createHTMLInput()


    const letterElement = document.querySelectorAll('.letter')
    letterElement.forEach((element, index) => {
        const letter = document.createElement('h2');
        letter.id = index;
        letter.innerText = 'X'
        element.appendChild(letter);

        // let eventInfo = {
            // isMouseDown: false,
            // firstClickedLetter: undefined
        // }

        addLetterEventListeners(letter, index);
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

function addLetterEventListeners(letter, index) {
    console.log(isMouseDown)
    const brushSize = 2;

    letter.addEventListener('click', ()=> {
        letter.innerText = currentInput
        if(brushSize !== 2)
            return
        changeMultipleLetters(index)
    })

    letter.addEventListener('mousedown', ()=> {
        isMouseDown = true;
        firstClickedLetter = letter;

        console.log("mousedown")
        console.log(firstClickedLetter)
        //logs a letter element correctly
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
        console.log("mouseup")
        console.log(firstClickedLetter)
        //logs undefined??

        firstClickedLetter.innerText = currentInput
    });
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
