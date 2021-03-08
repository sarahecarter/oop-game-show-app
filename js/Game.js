/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    //Game methods
    createPhrases() {
        //creates an array of 5 Phrase objects
        let phraseArray = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Life is like a box of chocolates")
        ]
        return phraseArray;
    }

    startGame() {}

    getRandomPhrase() {}

    handleInteraction() {}

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}