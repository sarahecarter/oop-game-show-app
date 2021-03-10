/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
         this.phrase = phrase.toLowerCase();
     }

     //Phrase object methods

     //adds the phrase to the board
     addPhraseToDisplay() {
         //loops through letters in phrase
        for (let i = 0; i < this.phrase.length; i++) {
            //creates an li element
            let li = document.createElement('LI');
            li.textContent = this.phrase[i];
            //appends li element to board
            let board = document.querySelector('#phrase ul');
            board.appendChild(li);
            //check if space or letter
            if (li.textContent === " ") {
                li.className = 'space';
            } 
            else {
                li.className = `hide letter ${this.phrase[i]}`;
            }
        }
     }

     //checks if the letter clicked is in the phrase
     checkLetter(letter) {
         //target letters 
         let allLetters = document.getElementsByClassName('letter');
         //loop through letters in phrase
         for (let i = 0; i < allLetters.length; i++) {
            //check if button letter is in phrase
            if (letter === allLetters[i].textContent) {
                //if button is in phrase return true and show letter
                this.showMatchedLetter(letter);
            }
        }
     }

     //reveals letter on board
     showMatchedLetter(matchedLetter) {
        //select all of letter DOM elements that have class name of selected letter
        let letters = document.getElementsByClassName(matchedLetter);
        //loop over letters returned in className collection
        for (let i = 0; i < letters.length; i++) {
            //remove the hide class
            letters[i].classList.remove('hide');
            //add the show class
            letters[i].classList.add('show');
        }
        
     }
 }