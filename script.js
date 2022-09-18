const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let choice = 0;
    const playGame = () => {
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        //function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const choiceLeft = document.querySelector('#choiceleft');
                choice++;
                choiceLeft.innerText = `Choice Left: ${10 - choice}`;
                const moveNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[moveNumber];
                //check who wins!
                winner(this.id, computerChoice)
                //game over function after 10 choices
                if (choice == 10) {
                    gameOver(playerOptions, choiceLeft);
                }
            })
        })
        //     //Function to decide a winner
        const winner = (player, computer) => {
            const result = document.querySelector('#result');
            const playerScoreBoard = document.querySelector("#p-count");
            const computerScoreBoard = document.querySelector("#c-count");
            const playerChoose = document.querySelector('#p-choose');
            const computerChoose = document.querySelector('#c-choose');
            player = player.toLowerCase();
            computer = computer.toLowerCase();
            playerChoose.textContent = player;
            computerChoose.textContent = computer;

            if (player === computer) {
                result.textContent = 'Tie'
            } else if (player == 'rock') {
                if (computer == 'paper') {
                    result.innerHTML = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.innerHTML = computerScore;

                } else {
                    result.innerHTML = 'Player Won';
                    playerScore++;
                    playerScoreBoard.innerHTML = playerScore;

                }
            } else if (player == 'scissors') {
                if (computer == 'rock') {
                    result.innerHTML = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.innerHTML = computerScore;

                } else {
                    result.innerHTML = 'Player Won';
                    playerScore++;
                    playerScoreBoard.innerHTML = playerScore;

                }
            } else if (player == 'paper') {
                if (computer == 'scissors') {
                    result.innerHTML = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.innerHTML = computerScore;

                } else {
                    result.innerHTML = 'Player Won';
                    playerScore++;
                    playerScoreBoard.innerHTML = playerScore;

                }

                // computerScoreBoard.textContent = computerScore;
                // playerScoreBoard.textContent = playerScore
            }
        }
    }
    //calling function when game is over
    const gameOver = (playerOptions, choiceLeft) => {
        const chooseChoice = document.querySelector('#choice');
        const result = document.querySelector('#result');
        const resetBtn = document.querySelector("#reset");

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        chooseChoice.innerText = 'Game Over!'
        choiceLeft.style.display = 'none';
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game'
            result.style.color = 'green';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You lost the game';
            result.style.color = 'red'
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'yellowgreen'
        }

        resetBtn.innerText = 'Restart';
        resetBtn.style.display = 'flex';
        resetBtn.addEventListener('click', () => {
            window.location.reload();
        })

    }

    playGame();
}

game();












