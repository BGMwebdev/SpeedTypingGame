let startButton = document.getElementById('startButton'); 
let gamePlay = document.getElementById('gamePlay'); 
let exampleWord = document.getElementById('exampleWord')
let wordInput = document.getElementById('answerWord')
let wordArray = words.split(" ");
let outputTimer = document.getElementById('timer')



startButton.addEventListener('click', function(event) {
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
 * get random word from array of 6 letter words
 */
function getWord() {
    return wordArray[Math.floor(Math.random()*wordArray.length)];
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
        if (counter < 0 ) {
            clearInterval(interval);
            outputTimer.textContent = "You're Time Is Up!"
        }
    }, 1000);
}

function letterCheck() {
    
}

function answerCheck() {
    
}

function scoreCount() {
    
}

// function renderNewWord() {

// }

function endGame() {
    
}

function emailScore() {
    
}