function getComputerChoice(){
    choices = ["rock","paper","scissors"]
    
    random = Math.floor(Math.random() * 3)
    return choices[random] 
}

function getHumanChoice(){
    return prompt("Choose: rock, paper or scissors.").toLowerCase() 
}

function playRound(humanChoice, computerChoice){
    
    console.log("ROCK 🪨 PAPER 📃 SCISSORS ✂️ \n")
    switch(humanChoice){
        case "rock":
            if(computerChoice == "paper"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You lost 😥`);
                return -1
            }
            else if(computerChoice == "scissors"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You Won ! 🤑`)
                return +1
            }
            else{
                console.log(`You did ${humanChoice}`)
                console.log(`Withdraw ☕`)
                return 0
            }
        case "paper":
            if(computerChoice == "scissors"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You lost 😥`)
                return -1
            }
            else if(computerChoice == "rock"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You Won ! 🤑`)
                return 1
            }
            else{
                console.log(`You did ${humanChoice}`)
                console.log(`Withdraw ☕`)
                return 0
            }
            break
        case "scissors":
            if(computerChoice == "rocks"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You lost 😥`)
                return -1
            }
            else if(computerChoice == "paper"){
                console.log(`You did ${humanChoice}`)
                console.log(`The computer choose (${computerChoice}). You Won ! 🤑`)
                return 1
            }
            else{
                console.log(`You did ${humanChoice}`)
                console.log(`Withdraw ☕`)
                return 0
            }    
        
    }
}

function playGame(){
    const score = [win = 0, withDraw = 0, loose = 0]

    for(i = 0; i < 5; i++){


        const humanChoice =  getHumanChoice()
        const puterChouce = getComputerChoice()

        result = playRound(humanChoice, puterChouce)

        if(result > 0){
            score[0]++
        }
        else if(result < 0){
            score[2]++
        }
        else{
            score[1]++
        }

        console.log(`Wins: ${score[0]} | Withdraws: ${score[1]} | Looses: ${score[2]}`)
    }
}


playGame()














