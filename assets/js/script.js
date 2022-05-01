let startGame = document.getElementById('startGame')
let startButton = document.getElementById('startButton');
let gamePlay = document.getElementById('gamePlay');
let exampleWord = document.getElementById('exampleWord');
let wordInput = document.getElementById('answerWord');
let wordArray = words.split(' ');
let outputTimer = document.getElementById('timer');
let score = document.getElementById('score');
let gameOutcome = document.getElementById('gameOutcome')
let emailBox = document.getElementById('emailBox')
let emailSubmit = document.getElementById('submitEmail')



// click event and keydown event to activate start game
startButton.addEventListener('click', playGame);

startButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        playGame();
    };
});

//  on input the wordCheck function will be activated
wordInput.addEventListener('input', wordCheck);




// click event and keydown event to submit email
emailSubmit.addEventListener('click', submitEmail);

emailSubmit.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitEmail();
    }
});




/**
 * click event and keyup event to start the game, render a word, start the timer and hide button.
 */
function playGame(event) {
    event.preventDefault();
    // hide start button
    startGame.className = 'hide';
    // focus on word input
    wordInput.focus();
    // show random word
    // outputWord();
    renderNewWord();
    // start the timer
    timer(4);
}




/**
 * get random word from string of 6 letter words in words.js
 */
function getWord() {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

/**
 * set text content of div with id of exampleWord to random word
 */
async function renderNewWord() {
    let word = await getWord();
    exampleWord.innerText = '';
    // create a span for each individual character
    word.split('').forEach(function (character) {
        let characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        exampleWord.appendChild(characterSpan);
    });
    // make sure word input is cleared
    wordInput.value = '';
}

/**
 * set timer to countdown back from 60 and render in display of timer 
 */
function timer(seconds) {
    let counter = seconds;
    let interval = setInterval(function () {
        outputTimer.textContent = counter;
        counter--;
        if (counter < 0) {
            endGame();
        }
    }, 1000)
}

/**
 * Compare the example word with the typed input and show correct or incorrect while typing. 
 * When the word is green, a new word will be rendered
 */
function wordCheck() {
    // get all spans of the example word and compare with input value
    let arrayWord = exampleWord.querySelectorAll('span');
    let arrayValue = wordInput.value.split('');
    let correct = true;

    arrayWord.forEach(function (characterSpan, index) {
        let character = arrayValue[index];

        // If it's not typed, it shows no coloring
        if (character == null) {
            characterSpan.classList.remove('incorrect');
            characterSpan.classList.remove('correct');
            correct = false;
        }
        // if it's typed correct, it shows green
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            // if it's typed incorrect, it shows red
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    });
    // If the correct answer is given, completely green, this renders a new word
    if (correct) {
        renderNewWord();
        scoreCount();
    }
}

function scoreCount() {
    let oldScore = score.innerText;
    score.innerText = ++oldScore;
}

function endGame() {
    wordInput.blur();
    gamePlay.className = 'hide'
    gameOutcome.textContent = `Congratulations!!! Your score is ${document.getElementById('score').innerText}`;
    textOutcome.textContent = 'If you would like your score to be send to you, please enter your name and email:';
    // emailBox.focus();
}

function submitEmail() {

}