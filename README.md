# Rock Paper Scissors Game
    Site is live at https://aranjyothi.github.io/project-1-rock-paper-scissors/

# About the Game:
Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors". This JavaScript Program is aimed at automating one of the player called as Computerized Player and the taking rock, paper or scissor as an input from the used.

## Languages used in this  game
 HTML, CSS, and JavaScript
## Inbult functions are:
*for each
*addEventListener
      playerOptions.forEach(option => {
            option.addEventListener('click', function () {
*document.querySelector
*if and else if conditions
*innerText
*Math.floor(Math.random() * 3)
    #### code:  const moveNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[moveNumber];
# Game rules: 
A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.
In this game player has 10 choices to play this game.
### Choices:
1. If player choose any "Rock or Paper or Scissors"options!, computer will choose  ramdom options.
2. If both player and computer choose same options the game will be "Tie".
3. If player choose "Rock" and computer choose "paper", so computer will win.
4. If player choose "Scissors" and computer choose "Paper" so player will win.
5. If player choose "Paper" and computer choose "Scissors" so computer will win.
6. If player choose"rock" and computer choose "Scissors" so player will win.

## Algorothm:

1. The computer will choose a random choice between "Rock", "Paper" and "Scissor". 
        const moveNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[moveNumber];
2. User choice will be taken.
3. Choice will be compared with computers choice.
4. According to rules, one of them will win.


