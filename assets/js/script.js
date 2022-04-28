let startButton = document.getElementById('startButton'); 
let gamePlay = document.getElementById('gamePlay'); 
let wordInput = document.getElementById('answerWord')
// import { words } from './words';
let wordArray = words.split(" ");




startButton.addEventListener('click', function(event) {
    event.preventDefault();
    // hide start button
    startButton.className = 'hide';
    // show gameplay
    // ?????? figure out how to hide the gameplay untill start-button is pushed
    // focus on word input
    wordInput.focus();
    // show random word
    nextWord();
    // start the timer

})


function timer(params) {
    
}

function scoreCount(params) {
    
}

function getWord(params) {
    return wordArray[Math.floor(Math.random()*wordArray.length)];
}

function nextWord (params) {
    let word = getWord();
    exampleWord.textContent = word;
}

function letterCheck(params) {
    
}

function answerCheck(params) {
    
}

function emailScore(params) {
    
}