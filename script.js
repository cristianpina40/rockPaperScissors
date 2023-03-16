
let playerChoice = "";
let computerChoice = "";
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btnStart = document.querySelector('.startGame');

const tied = document.querySelector('.tied1');
const cpu1 = document.querySelector('.cpu1');
const player1 = document.querySelector('.player1');

const playerChoice1 = document.querySelector('.playerChoice1');
const cpuChoice1 = document.querySelector('.cpuChoice1');
const currentWinner = document.querySelector('.currentWinner1');

let result = 0;
let tiedAmount = 0;
let playerWonAmount = 0;
let cpuWonAmount = 0;
let winner = 0;

let playerWon = 0;
let computerWon = 0;
let tieGame = 0;




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
        
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "Tie";
       
       
        result = 3;

    }
    else if(player == "scissors" && computer == "paper"){
        
        playerWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "Player";
        
        result = 1;
    }
    else if(player == "scissors" && computer == "rock"){
        
        
        cpuWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "CPU";

        result = 2;
    }

    else if(player == "rock" && computer == "scissors"){
        
        playerWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "Player";
        
        result = 1;
    }
    else if(player == "rock" && computer == "paper"){
        
        cpuWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "CPU";

        result = 2;

    }

    else if(player == "paper" && computer == "rock"){
       
        playerWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "Player";
        
        result = 1;
    }
    else if(player == "paper" && computer == "scissors"){
        
        cpuWonAmount++;
        
        tied.innerHTML = tiedAmount.toString();
        player1.innerHTML = playerWonAmount.toString();
        cpu1.innerHTML = cpuWonAmount.toString();

        playerChoice1.innerHTML = player;
        cpuChoice1.innerHTML = computer;
        currentWinner.innerHTML = "CPU";

        result = 2;
    }
    else{
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("Something went wrong...");
    }

    return result;


}


function checkConditions(){

   
        if(winner == 2){
            computerWon++;
        }
        else if(winner == 1){
            playerWon++;
        }
        else{
            tieGame++;
        }


    
    if(playerWon === 5){

        tied.innerHTML = "YOU WIN!";
        player1.innerHTML = "YOU WIN!";
        cpu1.innerHTML = "YOU WIN!";

        playerChoice1.innerHTML = "YOU WIN!";
        cpuChoice1.innerHTML = "YOU WIN!";
        currentWinner.innerHTML = "YOU WIN!";
        result = 0;
        tiedAmount = 0;
        playerWonAmount = 0;
        cpuWonAmount = 0;
        winner = 0;

        playerWon = 0;
        computerWon = 0;
        tieGame = 0;

    }
    if(computerWon === 5){

        tied.innerHTML = "You Lost...";
        player1.innerHTML = "You Lost...";
        cpu1.innerHTML = "You Lost...";

        playerChoice1.innerHTML = "You Lost...";
        cpuChoice1.innerHTML = "You Lost...";
        currentWinner.innerHTML = "You Lost...";
        result = 0;
        tiedAmount = 0;
        playerWonAmount = 0;
        cpuWonAmount = 0;
        winner = 0;

         playerWon = 0;
        computerWon = 0;
        tieGame = 0;
    }


}


btnStart.addEventListener('click', () =>{
    

     result = 0;
    tiedAmount = 0;
    playerWonAmount = 0;
    cpuWonAmount = 0;
    winner = 0;

     playerWon = 0;
     computerWon = 0;
     tieGame = 0;

    tied.innerHTML = tiedAmount.toString();
    player1.innerHTML = playerWonAmount.toString();
    cpu1.innerHTML = cpuWonAmount.toString();

    playerChoice1.innerHTML = "None";
    cpuChoice1.innerHTML = "None";
    currentWinner.innerHTML = "None";
    

});





  btnRock.addEventListener('click', () =>{
    playerChoice = "rock"
    computerChoice = getComputerChoice();
    winner = rps(playerChoice, computerChoice);
    checkConditions();
});


btnPaper.addEventListener('click', () =>{
    playerChoice = "paper"
    computerChoice = getComputerChoice();
    winner = rps(playerChoice, computerChoice);
    checkConditions();

});



btnScissors.addEventListener('click', () =>{
    playerChoice = "scissors"
    computerChoice = getComputerChoice();
    winner = rps(playerChoice, computerChoice);
    checkConditions();

});














