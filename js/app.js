/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Tests



//Variables
let startButton = document.getElementById('btn__reset');
let keyboard = document.getElementById('qwerty');
let game = new Game;

//Event Listeners

//Start Game
startButton.addEventListener('click', () => {
    game.startGame();
    console.log(game.activePhrase.phrase);
});

//Keyboard
keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
       game.handleInteraction(e.target);
    //    console.log(e.target.textContent);
    }
})