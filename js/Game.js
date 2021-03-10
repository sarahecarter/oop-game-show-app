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
            new Phrase("Happy as a clam"),
            new Phrase("Jump for joy"),
            new Phrase("Walking on sunshine"),
            new Phrase("Over the moon"),
            new Phrase("On top of the world")
        ]
        return phraseArray;
    }

    
    startGame() {
        //hides the overlay screen to start the game
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        //calls getRandomPhrase()
        let randomPhrase = this.getRandomPhrase();
        //sets activePhrase property to chosen phrase
        this.activePhrase = randomPhrase;
        //adds phrase to board with addPhraseToDisplay
        randomPhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        //selects a random phrase from the phraseArray
        let chosenPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return chosenPhrase;
    }

    handleInteraction() {}

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}