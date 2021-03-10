/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Tests



//Variables
let startButton = document.getElementById('btn__reset');

//Event Listener
startButton.addEventListener('click', () => {
    let game = new Game;
    game.startGame();
    console.log(game.activePhrase.phrase);
});
