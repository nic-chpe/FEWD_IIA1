var userChoice = prompt("Do you choose HEADS OR TAILS?").toUpperCase();
var coinFlip = Math.random();
if (userChoice === "HEADS") {
    if (coinFlip < 0.5) {
        var result = alert("The coin landed on heads. You WON!");
    }
    else {
        var result = alert("The coin landed on tails. You LOST!");
    }   
}
else {
    if (coinFlip < 0.5) {
        var result = alert('The coin landed on heads. You LOST!');
    }
    else {
        var result = alert('The coin landed on tails. You WON!');
    }
}
/* TESTED */