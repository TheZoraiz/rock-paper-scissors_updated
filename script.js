function computerPlay() {
    randNum = (Math.random()) * 10;
    randNum = (randNum % 3) + 1;
    randNum = randNum - (randNum % 1);

    switch(randNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

let playerPoints = 0,
    computerPoints = 0,
    total = 0;

function game(playerSelection) {

    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    total++;

    function playRound(playerSelection, computerSelection) {
        if(playerSelection != computerSelection) {
            if (playerSelection == "rock") {
                if (computerSelection == "paper") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Computer wins! paper beats rock!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    computerPoints++;
                    score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
                if (computerSelection == "scissors") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Player wins! rock beats scissors!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    playerPoints++;
                    score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
            }
            if (playerSelection == "paper") {
                if (computerSelection == "rock") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Player wins! paper beats rock!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    playerPoints++;
                    score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
                if (computerSelection == "scissors") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Computer wins! scissors beat papers!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    computerPoints++;
                    score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
            }
            if (playerSelection == "scissors") {
                if (computerSelection == "rock") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Player wins! rock beats scissors!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    playerPoints++;
                    score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
                if (computerSelection == "paper") {
                    para1.style.paddingTop = "10px";
                    para1.textContent = "Player chose " + playerSelection;
                    para2.textContent = "Computer chose " + computerSelection;
                    para3.textContent = "Player wins! paper beat scissors!";
                    status.appendChild(para1);
                    status.appendChild(para2);
                    status.appendChild(para3);
                    computerPoints++;
                    score.textContent = "Player: " + playerPoints + "        Computer: " + computerPoints;
                    score.style.marginTop = "0";
                    score.style.paddingBottom = "10px";
                }
            }
        }
        else {
            para1.style.paddingTop = "10px";
            para1.textContent = "Player chose " + playerSelection;
            para2.textContent = "Computer chose " + computerSelection;
            para3.textContent = "Tie! " + playerSelection + " ties with " + computerSelection + "!";
            status.appendChild(para1);
            status.appendChild(para2);
            status.appendChild(para3);
            computerPoints++;
            playerPoints++;
            score.textContent = "Player: " + playerPoints + "\tComputer: " + computerPoints;
            score.style.marginTop = "0";
            score.style.paddingBottom = "10px";
        }
    }
}


const buttons = document.querySelectorAll('button');
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const status = document.querySelector("#status");
const score = document.getElementById("score");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(total < 5) {
            game(button.id);
        } else {
            para1.textContent = "";
            para2.textContent = "";
            para3.textContent = "";
            status.appendChild(para1);
            status.appendChild(para2);
            status.appendChild(para3);

            if(playerPoints > computerPoints) {
                score.textContent = "Player wins with " + playerPoints + " points!";
            } else if (playerPoints < computerPoints) {
                score.textContent = "Computer wins with " + computerPoints + " points!";
            } else {
                score.textContent = "It's a Tie!!";
            }
        }
    });
});