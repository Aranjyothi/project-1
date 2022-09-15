# project-1 Rock Paper Scissors Game
Your site is live at https://aranjyothi.github.io/project-1-rock-paper-scissors/
Last deployed by @github-pages github-pages 1 minute ago
# About the Game

## Languages used in this  game
JavaScript, HTML,and CSS 
## Inbult functions are:
* for each
* addEventListener
##### Code
playerOptions.forEach(option => {
            option.addEventListener('click', function () {
* document.querySelector
* if and else if conditions
* innerText
* Math.floor(Math.random() * 3)
    #### code:  const moveNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[moveNumber];
# Rules of the Game
Player has 10 choices to play this game.
1. If player choose any "Rock or Paper or Scissors"options!, computer will choose  ramdom options.
2. If both player and computer choose same options the game will be "Tie".
3. If player choose "Rock" and computer choose "paper", so computer will win.
4. If player choose "Scissors" and computer choose "Paper" so player will win.
5. If player choose "Paper" and computer choose "Scissors" so computer will win.
6. If player choose"rock" and computer choose "Scissors" so player will win.



