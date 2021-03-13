/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Tests



//Variables
let overlay = document.getElementById('overlay');
let board = document.querySelector('#phrase ul');
let startButton = document.getElementById('btn__reset');
let keyboard = document.getElementById('qwerty');
let keys = document.querySelectorAll('button.key');
let hearts = document.getElementsByTagName('IMG');
let game = new Game;

//Event Listeners

//Start Game
startButton.addEventListener('click', () => {
    game.startGame();
});

//Keyboard
keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
       game.handleInteraction(e.target);
    }
})

//listen for keyboard interaction
document.addEventListener('keydown', (e) => {
    let keyBoardLetters
    //look through keys for matching key
    keys.forEach(key => {
        if (e.key === key.textContent) {
           //handle interaction of that button
            game.handleInteraction(key); 
        }
    }); 
})

