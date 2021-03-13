# oop-game-show-app
OOP Game Show App

- Uses JavaScript and OOP to create a word guessing game.
- How to play: select letters on board either by clicking or by using keyboard. If letter is correct it will appear on the board. If letter is incorrect a life will be removed from the bottom of the screen. If you can figure out the phrase before losing five lives, you win!

Classes:
- Game class gets a random phrase and facilitates the user's interactions with the game. Keeps track of whether letters chosen match the ones in the phrase and whether game has been won or lost. Also resets the game upon finishing.
- Phrase class adds phrase to display, checks if letters chosen by user match the ones in the phrase, and shows matched letters on the board.

Extra Credit Features:
- Added keyboard functionality: users can use their physical keyboard to guess letters instead of clicking. Uses a keydown event listener that compares the letter pressed to the buttons on screen.

- Additional styling: switched up color themes and fonts.
