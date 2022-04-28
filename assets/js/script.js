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
    outputWord();
    // start the timer
    timer(60);



})


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


function getWord() {
    return wordArray[Math.floor(Math.random()*wordArray.length)];
    
}

function outputWord () {
    let word = getWord();
    exampleWord.textContent = word;
}

function nextWord() {

}

function letterCheck() {
    
}

function answerCheck() {
    
}

function scoreCount() {
    
}

function emailScore() {
    
}