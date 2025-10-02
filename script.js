//Globals
const choicesMenu = document.querySelector('#menu');
const resultDiv = document.querySelector(".result");

//Create the elements in the result div with DOM: Match Result, Score, Computer Choice
let score = [win = 0, withDraw = 0, loose = 0];

let matchResult = document.createElement("h1");
let matchLog = document.createElement("p")



function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]

    random = Math.floor(Math.random() * 3)
    return choices[random]
}

function getHumanChoice() {
    //return prompt("Choose: rock, paper or scissors.").toLowerCase()]
    choicesMenu.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
            let playerChoice = event.target.id;
            playRound(playerChoice)
        }
    })
}

function playRound(playerChoice) {

    console.log("ROCK 🪨 PAPER 📃 SCISSORS ✂️ \n")

    let compChoice = getComputerChoice();


    if(playerChoice === compChoice){
        matchResult.textContent = "🟡 WithDraw 😑"
        matchLog.textContent = `It's a draw! ⚔️ You both choose ${playerChoice}` 
        score[1]++;
    }
    else if(
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "scissors" && compChoice === "paper") ||
        (playerChoice === "paper" && compChoice === "rock")
    ){  
        matchResult.textContent = "🟢 VICTORY ‼️"
        matchLog.textContent = `This round is yours! 🤑 ${playerChoice} beats ${compChoice}`
        score[0]++;
    }
    else{
        matchResult.textContent = "🔴 DEFEAT 😮‍💨"
        matchLog.textContent = `You lost this round! 💸 ${compChoice} beats ${playerChoice}`
        score[2]++;
    }

    //Exibe o resultado inserindo os elementos na Div através do DOM
    resultDiv.appendChild(matchResult);
    resultDiv.appendChild(matchLog);

    
}

getHumanChoice();

