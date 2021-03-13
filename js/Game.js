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
            this.removeLife();
        }
            
        //if correct letter 
        if (result === true) {
            //add chosen css class to keyboard button
            button.classList.add('chosen');
            //call showMatchedLetter function on phrase
            this.activePhrase.showMatchedLetter(button.textContent);
            //if player has won game 
            if (this.checkForWin()) {
                //call gameOver method
                this.gameOver();
            }
                
        }
            
    }

    removeLife() {
        //add to missed 
        this.missed += 1;
        //if missed is less than 5
        if (this.missed < 5) {
            //replace image with lost heart 
            hearts[this.missed - 1].src = 'images/lostHeart.png';
        }
        else {
            this.gameOver();
        }
    }

    //checks to see if all letters have been revealed
    checkForWin() {
        //get letters with hide class
        let hidden = document.getElementsByClassName('hide');
        //if null return true 
        if (hidden.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    gameOver() {
        let gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'flex';
        if (this.missed === 5) {
            overlay.className = 'lose';
            gameOverMessage.textContent = 'You lost!';
        }
        else {
            overlay.className = 'win';
            gameOverMessage.textContent = 'You won!';
        }
        startButton.textContent = 'Play again?';
        //reset gameboard
        board.innerHTML = '';
        this.missed = 0;
        //reset keys
        keys.forEach(key => {
            key.disabled = false;
            key.className = 'key';
        })
        //reset lives
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';
        }
        
    }
}