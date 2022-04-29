let startButton = document.getElementById('startButton');
let gamePlay = document.getElementById('gamePlay');
let exampleWord = document.getElementById('exampleWord')
let wordInput = document.getElementById('answerWord')
let wordArray = words.split(" ");
let outputTimer = document.getElementById('timer')


/**
 * click event to start the game, render a word, start the timer and hide button.
 */
startButton.addEventListener('click', function (event) {
    event.preventDefault();
    // hide start button
    startButton.className = 'hide';
    // show gameplay
    // ?????? figure out how to hide the gameplay untill start-button is pushed
    // focus on word input
    wordInput.focus();
    // show random word
    // outputWord();
    renderNewWord();
    // start the timer
    timer(59);
})

/**
 * on input the lettercheck function will be activated
 */
wordInput.addEventListener('input', letterCheck);




/**
 * get random word from array of 6 letter words
 */
function getWord() {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

/**
 * set text content of div with id of exampleWord to random word
 */
async function renderNewWord() {
    let word = await getWord();
    exampleWord.innerText = ''
    // create a span for each individual character
    word.split('').forEach(character => {
        let characterSpan = document.createElement('span');
        characterSpan.innerText = character
        exampleWord.appendChild(characterSpan)
    });
    // make sure word input is cleared
    wordInput.value = null
}

/**
 * create timer to countdown back from 60, log to div with id of timer 
 */
function timer(seconds) {
    let counter = seconds;
    let interval = setInterval(() => {
        outputTimer.textContent = counter
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            outputTimer.textContent = "You're Time Is Up!"
        }
    }, 1000);
}
/**
 * Compare the example word with the typed input and show correct or incorrect while typing. 
 * When the word is green, a new word will be rendered
 */
function letterCheck() {
    // get all spans of the example word and compare with input value
    let arrayWord = exampleWord.querySelectorAll('span')
    let arrayValue = wordInput.value.split('')

    let correct = true
    arrayWord.forEach((characterSpan, index) => {
        let character = arrayValue[index];
        // If it's not typed, it shows no coloring
        if (character == null) {
            characterSpan.classList.remove('incorrect');
            characterSpan.classList.remove('correct');
            correct = false
        }
        // if it's typed correct, it shows green
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            // if it's typed incorrect, it shows red
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false
        }
    });
    // If the correct answer is given, this renders a new word
    if (correct) {
        renderNewWord();
    }
}

function answerCheck() {

}

function scoreCount() {

}

function endGame() {

}

function emailScore() {

}