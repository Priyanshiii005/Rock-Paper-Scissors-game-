let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg p");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissor
};

const drawGame = () => {
    
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    
  }else{
    computerScore++;
    CompScorePara.innerText = computerScore;
    msg.innerText = `You lost. ${compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

  }

}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);

    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);
    

    
    if(userChoice === compChoice) {
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
     console.log("choice was clicked",userChoice);
     playGame(userChoice);

    });
});