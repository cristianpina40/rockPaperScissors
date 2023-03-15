
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
        currentWinner.innerHTML = "Tie";

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
        currentWinner.innerHTML = "Tie";

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
        currentWinner.innerHTML = "Tie";

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
        
    
    
    
        

        if(winner == 2){
            computerWon++;
        }
        else if(winner == 1){
            playerWon++;
        }
        else{
            tieGame++;
        }


  

        




   

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

//btnStart.addEventListener('click', () => {

    startGame();
    
 // });





  btnRock.addEventListener('click', () =>{
    playerChoice = "rock"
    computerChoice = getComputerChoice();
    winner = winner + rps(playerChoice, computerChoice);
    if(winner == 2){
        computerWon++;
    }
    else if(winner == 1){
        playerWon++;
    }
    else{
        tieGame++;
    }
});


btnPaper.addEventListener('click', () =>{
    playerChoice = "paper"
    computerChoice = getComputerChoice();
    winner = winner + rps(playerChoice, computerChoice);
    if(winner == 2){
        computerWon++;
    }
    else if(winner == 1){
        playerWon++;
    }
    else{
        tieGame++;
    }

});



btnScissors.addEventListener('click', () =>{
    playerChoice = "scissors"
    computerChoice = getComputerChoice();
    winner = winner + rps(playerChoice, computerChoice);
    if(winner == 2){
        computerWon++;
    }
    else if(winner == 1){
        playerWon++;
    }
    else{
        tieGame++;
    }

});














