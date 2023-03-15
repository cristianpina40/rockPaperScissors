
let playerChoice = "";
let computerChoice = "";


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

    let result = 0;
    

    if(player == computer)
    {
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("The game is a tie!");
        result = 3;

    }
    else if(player == "scissors" && computer == "paper"){
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("You won!");
        result = 1;
    }
    else if(player == "scissors" && computer == "rock"){
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("The computer won!");
        result = 2;
    }

    else if(player == "rock" && computer == "scissors"){
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("You won!");
        result = 1;
    }
    else if(player == "rock" && computer == "paper"){
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("The computer won!");
        result = 2;

    }

    else if(player == "paper" && computer == "rock"){
       
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("You won!");
        result = 1;
    }
    else if(player == "paper" && computer == "scissors"){
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("The computer won!");
        result = 2;
    }
    else{
        
        console.log("You chose " + player + ".");
        console.log("The computer chose " + computer + ".");
        console.log("Something went wrong...");
    }

    return result;


}


function playGame(){

        let playerWon = 0;
        let computerWon = 0;
        let tieGame = 0;
    
    do{

        playerChoice = prompt("Choose Rock Player or Scissors");
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

playGame();




