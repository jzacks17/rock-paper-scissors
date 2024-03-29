//----------------------------------- Variable Declaration section -------------------------------------------

// Create a variable of type const called play which has an initial value of the buttonPlay button (getElementById)
const play = document.getElementById("buttonPlay");

//create a variable of type const called playAgain which has an initial value of the button buttonPlayAgain (getElementById)
const playAgain = document.getElementById("buttonPlayAgain");

// create a variable of type const called choose which has an initial value of the three choose buttons (querySelectorAll)
const choose = document.querySelectorAll('.choose');

// create a variable of type let called userWins with an initial value of zero. Used to store the number of rounds the user has won. 
let userWins = 0;

// create a variable of type let called cpuWins with an initial value of zero. Used to store the number of rounds the cpu has won.
let cpuWins = 0;


//create a variable of type let called userDecision. Do not assign an initial value. Used to store the user's decision.
let userDecision;

// create a variable of type let called cpuDecision. Do not assign an initial value. Used to store the cpu's decision.
let cpuDecision;

// Create variables for the score buttons: 
// type const called userScore1 which has an initial value of the userScore1 button (getElementById)
const userScore1 = document.getElementById("userScore1");

// type const called userScore2 which has an initial value of the userScore2 button (getElementById)
const userScore2 = document.getElementById("userScore2");

// type const called userScore3 which has an initial value of the userScore3 button (getElementById)
const userScore3 = document.getElementById("userScore3");

// type const called cpuScore1 which has an initial value of the cpuScore1 button (getElementById)
const cpuScore1 = document.getElementById("cpuScore1");

// type const called cpuScore2 which has an initial value of the cpuScore2 button (getElementById)
const cpuScore2 = document.getElementById("cpuScore2");

// type const called cpuScore3 which has an initial value of the cpuScore3 button (getElementById)
const cpuScore3 = document.getElementById("cpuScore3");


// create variables for popup windows: 
// type let called playPopUp which has an initial value of "open"
let playPopUp = "open"

// type let called playAgainPopUp which has an initial value of "closed"
let playAgainPopUp = "closed"


//--------------------------------------Event listener section --------------------------------------------

// Add the event listener to play. On click: 
play.addEventListener("click", function () {

    // -> Set display of the play popup to none. 
    document.getElementById("playGame").style.display = "none";

    //set value of playPopUp to "closed"
    playPopUp = "closed";



})

// Add the event listener to choose for each choice. On click call playRound().
choose.forEach(choice => choice.addEventListener('click', playRound));


//Add the event listener to playAgain - the playAgain Button. 
//When the button is clicked close the popup window and clear the previous scores. 
playAgain.addEventListener("click", function () {

    // -> Set display of the playAgain popup to none. 
    document.getElementById("playAgain").style.display = "none";

    //Set value of playAgainPopUp to "closed" 
    playAgainPopUp = "closed";

    // -> Set all the score lights color to white
    userScore1.style.backgroundColor = 'white';
    userScore2.style.backgroundColor = 'white';
    userScore3.style.backgroundColor = 'white';
    cpuScore1.style.backgroundColor = 'white';
    cpuScore2.style.backgroundColor = 'white';
    cpuScore3.style.backgroundColor = 'white';

    // -> set userWins to zero
    userWins = 0;

    // -> Set cpuWins to zero
    cpuWins = 0;

    //Empty the previous display
    display("empty", "empty");
})
//--------------------------------- Function Section ------------------------------------------------

//Function that when called plays the round
function playRound() {

    //Check to see if a popup is open:
    if (playPopUp == "open" || playAgainPopUp == "open") {
        return;
    }

    userDecision = this.id;

    //Call the getComputerChoice() function. Assign the output to cpuSelection.
    cpuDecision = getComputerChoice();

    //Call Display function. Passing it the userDecision and cpuDecision as the argument. 
    display(userDecision, cpuDecision);

    //Call the determineWinner() function, passing it the userDecision and cpuDecision
    determineWinner(userDecision, cpuDecision);

    //Call the function score. Pass userWins and cpuWins into the function as arguments
    score(userWins, cpuWins);

}

// Function that when called randomly returns rock, paper or scissors
function getComputerChoice() {
    //Create a variable of type let called cpuRand and assign it a random value between 1 to 3 using random()
    let cpuRand = random(1, 3);

    //If cpuRand is 1, assign the cpu decision as rock and return rock 
    if (cpuRand == 1) {
        return 'rock';
    }

    //If cpuRand is 2, assign the cpu decision as paper and return paper
    else if (cpuRand == 2) {
        return 'paper';
    }

    //If cpuRand is 3, assign the cpu decision as paper 
    else if (cpuRand == 3) {
        return 'scissors';
    }
}

//Function that displays the user and cpu image corresponding to their choices
function display(userSelection, cpuSelection) {

    //if user selection is rock, make the rock image visible
    if (userSelection == 'rock') {
        document.getElementById("userP").style.display = "none";
        document.getElementById("userRock").style.display = "block";
        document.getElementById("userPaper").style.display = "none";
        document.getElementById("userScissors").style.display = "none";
    }

    //if user selection is paper, make the paper image visible
    else if (userSelection == 'paper') {
        document.getElementById("userP").style.display = "none";
        document.getElementById("userRock").style.display = "none";
        document.getElementById("userPaper").style.display = "block";
        document.getElementById("userScissors").style.display = "none";
    }

    //if user selection is scissors, make the scissors image visible
    else if (userSelection == 'scissors') {
        document.getElementById("userP").style.display = "none";
        document.getElementById("userRock").style.display = "none";
        document.getElementById("userPaper").style.display = "none";
        document.getElementById("userScissors").style.display = "block";
    }

    else {
        document.getElementById("userP").style.display = "block";
        document.getElementById("userRock").style.display = "none";
        document.getElementById("userPaper").style.display = "none";
        document.getElementById("userScissors").style.display = "none";
    }

    //if cpu selection is rock, make the rock image visible
    if (cpuSelection == 'rock') {
        document.getElementById("cpuP").style.display = "none";
        document.getElementById("cpuRock").style.display = "block";
        document.getElementById("cpuPaper").style.display = "none";
        document.getElementById("cpuScissors").style.display = "none";
    }

    //if cpu selection is paper, make the paper image visible
    else if (cpuSelection == 'paper') {
        document.getElementById("cpuP").style.display = "none";
        document.getElementById("cpuRock").style.display = "none";
        document.getElementById("cpuPaper").style.display = "block";
        document.getElementById("cpuScissors").style.display = "none";
    }

    //if cpu selection is scissors, make the scissors image visible
    else if (cpuSelection == 'scissors') {
        document.getElementById("cpuP").style.display = "none";
        document.getElementById("cpuRock").style.display = "none";
        document.getElementById("cpuPaper").style.display = "none";
        document.getElementById("cpuScissors").style.display = "block";
    }

    else {
        document.getElementById("cpuP").style.display = "block";
        document.getElementById("cpuRock").style.display = "none";
        document.getElementById("cpuPaper").style.display = "none";
        document.getElementById("cpuScissors").style.display = "none";
    }


}

//Function that determines the winner of each round that is played 
function determineWinner(userSelection, cpuSelection){
    
    //If there is a tie
    if (userSelection == cpuSelection) {
        return;    
    }

    //If user wins
    else if ((userSelection == 'rock' && cpuSelection == 'scissors')
        || (userSelection == 'paper' && cpuSelection == 'rock')
        || (userSelection == 'scissors' && cpuSelection == 'paper')) {
        userWins += 1;
        return;
    }

    //If cpu wins
    else if ((userSelection == 'rock' && cpuSelection == 'paper')
        || (userSelection == 'paper' && cpuSelection == 'scissors')
        || (userSelection == 'scissors' && cpuSelection == 'rock')) {
        cpuWins += 1;
        return;
    }
}


//Turns on/off the lights corresponding to the number of wins, displays a message if the cpu or user has won their 3rd game
function score(userW, cpuW) {
    if (userW == 1) {
        userScore1.style.backgroundColor = 'green';
    }

    else if (userW == 2) {
        userScore2.style.backgroundColor = 'green';
    }

    else if (userW == 3) {
        userScore3.style.backgroundColor = 'green';

        //Set a message that the user has won
        document.getElementById("winMessage").innerText = `Congratulations! You won the series ${userW} - ${cpuW}!`;

        
        //play win-sound.mp3 audio
        //document.querySelector('#win').play();
        new Audio('audio/win-sound.mp3').play()

        //Display the playAgain popup
        document.getElementById("playAgain").style.display = "flex";

        //set value of playAgainPopUp to "open"
        playAgainPopUp = "open";

    }

    if (cpuW == 1) {
        cpuScore1.style.backgroundColor = 'green';
    }

    else if (cpuW == 2) {
        cpuScore2.style.backgroundColor = 'green';
    }

    else if (cpuW == 3) {
        cpuScore3.style.backgroundColor = 'green';

        //Set a message that the cpu has won
        document.getElementById("winMessage").innerText = `The computer won the series ${cpuW} - ${userW}!`;

        //play lose-sound.mp3 audio
        //document.querySelector('#lose').play();
        new Audio('audio/lose-sound.mp3').play()

        //-> Display the playAgain popup
        document.getElementById("playAgain").style.display = "flex";

        //set value of playAgainPopUp to "open"
        playAgainPopUp = "open";

    }

}

//Function that generates a random number between the low and high parameters
function random(low = 0, high) {
    return low + Math.round(Math.random() * (high - low));
}
