// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//player1  player 2

const rps = (p1, p2) => {
    const results = {
      'scissors':{
        'scissors': "Draw!",
        'paper': "Player 1 won!",
        'rock': "Player 2 won!"
      },
      'rock':{
        'scissors': "Player 1 won!",
        'paper': "Player 2 won!",
        'rock': "Draw!"
      },
      'paper':{
        'scissors': "Player 2 won!",
        'paper': "Draw!",
        'rock': "Player 1 won!"
      }
    }
    return results[p1][p2]
    };