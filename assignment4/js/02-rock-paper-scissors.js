alert("Welcome to Rock, Paper, Scissors game.\nLet's play!");
//User Choice runs first
var userChoice = prompt("Do you choose rock, paper or scissors?");
//Computer Choice runs second
var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }
//Insert function
let compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    alert("It's a tie!");
    }
    
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
         alert("Woohoo! Rock wins.");
            } else {
                alert("Sorry, paper wins.");
        }
    }
    if(choice1 === "paper") {
        if(choice2 === "rock") {
            alert("Woohoo! Paper wins.");
            } else {
                alert("Sorry, Scissors win.");
        }
    }
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            alert("Sorry, rock wins.");
            } else {
            alert("Woohoo! Scissors win!");
        }
    }
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);