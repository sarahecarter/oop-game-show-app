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

    handleInteraction(button) {
        //check to see if button clicked matches letter in phrase
        let result = this.activePhrase.checkLetter(button.textContent);
        //disable letter
        button.disabled = true;
        //if not correct letter
        if (result === false) {
            //add wrong css class to keyboard button
            button.classList.add('wrong');
            //call removeLife method
            

        }
            
        //if correct letter 
        if (result === true) {
            //add chosen css class to keyboard button
            button.classList.add('chosen');
            //call showMatchedLetter function on phrase
            this.activePhrase.showMatchedLetter(button.textContent);
            //call checkForWin()
            //if player has won game 
                //call gameOver method
        }
            
    }

    removeLife() {

    }

    //checks to see if all letters have been revealed
    checkForWin() {
        //get letters
        //check if any letters still have the hide class
    }

    gameOver() {

    }
}