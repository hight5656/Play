document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById("playerName");
    const playerScoreSpan = document.getElementById("playerScore");
    const computerScoreSpan = document.getElementById("computerScore");
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const playerLabel = document.querySelector('.score .player p');

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    generateBtn.addEventListener("click", function () {
        const playerName = playerNameInput.value;
        const playerNumber = Math.floor(Math.random() * 11); 
        const computerNumber = Math.floor(Math.random() * 11); 

        playerScore += playerNumber;
        computerScore += computerNumber;

        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;

        playerLabel.textContent = playerName; 

        resultDiv.textContent = `Гра ${round}: ${playerName}, Ви: ${playerNumber}. Комп'ютер: ${computerNumber}`;

        if (round < 3) {
            round++;
        } else {
            if (playerScore > computerScore) {
                resultDiv.textContent += `\n${playerName}, Ви виграли!`;
            } else if (computerScore > playerScore) {
                resultDiv.textContent += `\nКомп'ютер виграв.`;
            } else {
                resultDiv.textContent += `\nНічия!`;
            }

            generateBtn.disabled = true;
        }
    });
});
