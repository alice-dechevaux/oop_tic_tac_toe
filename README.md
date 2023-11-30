# Object-Oriented Tic-Tac-Toe
This program uses object-oriented JavaScript to allow the user to play a game of tic-tac-toe on a board of any size. The ticTacToe object has customizable properties for board size and player symbols and three methods that work together to ask the users which squares they wish to play and check for a win or draw.

## How It's Made:

**Tech used:** JavaScript

The play method runs on a loop, iterating at maximum a number of times equal to the board’s height multiplied by its width. It checks to make sure that the square number entered is valid and has not already been played and then records the player’s choice. After each played square the checkForWin method is invoked. It works on a board of any size because there is no hard coding. It determines which squares to check for each possible win condition relative to the size of the board. If it finds a win the play method’s loop is terminated early and the winner is declared. If the loop completes that means that the board has been filled without anyone winning and a draw is declared.

## Optimizations
*(optional)*

In the future, I’d like to add a graphical element to the game instead of relying on prompts. I’d also like to add functionality that allows the user to choose a board size and checks for valid input.

## Lessons Learned:

This project taught me a lot about object-oriented programming and its potential applications. By adhering to the pillars of OOP I was able to create a version of the game that’s dynamic and flexible. The properties of the game object can be customized and even the rules of the game can be changed and the code will still work.
