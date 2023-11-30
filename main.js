//prompt user asking which square they wish to play
//save played square in an array
//check for win or completed board/draw

let ticTacToe = {
    board: [],
    height: 3,
    width: 3,
    player1: "X",
    player2: "O",
    match: function(a, b) {
        return (this.board[a] && this.board[a] === this.board[b])
    },
    checkForWin: function() {
        let counter
        //check for horizontal win
          for (let i = 0; i <= this.width * (this.height - 1); i += this.width) {
                counter = 0
              for(j = i + 1; j < i + this.width; j++) {
                  if (this.match(i, j)) {
                      counter++;
                      if (counter === this.width - 1) {
                              return true
                  }
                }
              }
          }
          //check for vertical win
          for (let i = 0; i <= this.width - 1; i++) {
            counter = 0
            for (let j = i + this.width; j <= i + this.width * (this.height - 1) ; j += this.width) {
                if (this.match(i, j)) {
                    counter++;
                    if (counter === this.width - 1) {
                            return true
                }
            }
          }
        }
        //check for diagonal right win
        for (let i = 0; i < 1; i++) {
            counter = 0
            for (let j = i + this.width + 1; j <= this.width * this.height - 1; j += this.width + 1) {
                if (this.match(i, j)) {
                    counter++;
                    if (counter === this.width - 1) {
                            return true
                    }
                }
            }
        }
        //check for diagonal left win
        for (let i = this.width - 1; i < this.width; i++) {
            counter = 0
            for (let j = i + this.width - 1; j <= this.height * (this.width - 1); j += this.width - 1) {
                if (this.match(i, j)) {
                    counter++;
                    if (counter === this.width - 1) {
                            return true
                    }
                }
            }
        }
        return false
      },
    play: function() {
        let player = 1
        let played
        for (let i = 0; i < this.height * this.width - 1; i++) {
            do {
                played = undefined
                let entered = prompt(`Enter square number (1 - ${this.height * this.width}): `) - 1
                if (entered < this.width * this.height && !this.board[entered]) {
                    played = entered
                }
                if (player === 1) {
                    this.board[played] = this.player1
                } else {
                    this.board[played] = this.player2
                }
                if (this.checkForWin(this.board)) {
                    console.log(`Player ${player} wins!`)
                    return;
                }
                if (player === 1) {
                    player = 2
                } else player = 1
            }
            while (!played)
        }
    console.log("Draw!")
    }
}