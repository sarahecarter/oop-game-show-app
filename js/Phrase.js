/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
         this.phrase = phrase.toLowerCase();
     }

     //Phrase object methods
     addPhraseToDisplay() {
         //loops through letters in phrase
        for (let i = 0; i < this.phrase.length; i++) {
            //creates an li element
            let li = document.createElement('LI');
            li.textContent = this.phrase.charAt(i);
            console.log(this.phrase.charAt(i));
            //appends li element to board
            board.appendChild(li);
            //check if space or letter
            if (li.textContent === " ") {
                li.className = 'space';
            } 
            else {
                li.className = 'letter';
            }
        }
     }

     checkLetter() {}

     showMatchedLetter() {}
 }