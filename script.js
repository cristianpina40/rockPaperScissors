
let playerChoice = "";
let computerChoice = "";
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btnStart = document.querySelector('.startGame');

const tied = document.getElementsByClassName('tied1')[0];
const cpu1 = document.getElementsByClassName('cpu1')[0];
const player1 = document.getElementbyClassName('player1')[0];

const playerChoice1 = document.getElementsByClassName('playerChoice1')[0];
const cpuChoice1 = document.getElementsByClassName('cpuChoice1')[0];
const currentWinner = document.getElementsByClassName('currentWinner1')[0];

let result = 0;
let tiedAmount = 0;
let playerWonAmount = 0;
let cpuWonAmount = 0;




function getComputerChoice (){
    
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let choice = "";

    if(randNum == 1){
        choice = "Rock";
    }   
    else if(randNum == 2){
        choice = "Paper";
    }   
    else if(randNum == 3){
        choice = "Scissors";
    }   
    else{
        choice = "something went wrong";
    }

    return choice;
}



function rps (playerChoice, computerChoice){

    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    

    

    if(player == computer)
    {
        tiedAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Tie";
       
        result = 3;

    }
    else if(player == "scissors" && computer == "paper"){
        
        playerWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Player";
        
        result = 1;
    }
    else if(player == "scissors" && computer == "rock"){
        
        
        cpuWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Tie";

        result = 2;
    }

    else if(player == "rock" && computer == "scissors"){
        
        playerWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Player";
        
        result = 1;
    }
    else if(player == "rock" && computer == "paper"){
        
        cpuWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Tie";

        result = 2;

    }

    else if(player == "paper" && computer == "rock"){
       
        playerWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Player";
        
        result = 1;
    }
    else if(player == "paper" && computer == "scissors"){
        
        cpuWonAmount++;
        
        tied.innerText = tiedAmount.toString();
        player1.innerText = playerWonAmount.toString();
        cpu1.innerText = cpuWonAmount.toString();

        playerChoice1.innerText = player;
        cpuChoice1.innerText = computer;
        currentWinner.innerText = "Tie";

        result = 2;
    }
    else{
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("Something went wrong...");
    }

    return result;


}


function startGame(){

        let playerWon = 0;
        let computerWon = 0;
        let tieGame = 0;
        
    
    do{
       
        btnRock.addEventListener('click', () =>{
            playerChoice = "rock"
        });
        
        
        btnPaper.addEventListener('click', () =>{
            playerChoice = "paper"
        });
        
        
        
        btnScissors.addEventListener('click', () =>{
            playerChoice = "scissors"
        });

        
        computerChoice = getComputerChoice();
        
        let winner = rps(playerChoice, computerChoice);
        

        if(winner == 2){
            computerWon++;
        }
        else if(winner == 1){
            playerWon++;
        }
        else{
            tieGame++;
        }




        




    }while(playerWon < 5 && computerWon < 5)

    console.log("The game had " + tieGame + " ties.");
    console.log("The computer won " + computerWon + " times.");
    console.log("The player won " + playerWon + " times.");
    
    if(playerWon == 5){

        console.log("You Won!");
    }
    if(computerWon == 5){

        console.log("You Lost!");
    }




}

btnStart.onclick = startGame();



















