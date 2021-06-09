const gradeWelcome = alert("Welcome to the Grade Assigner");
let score = parseInt(prompt("Enter numeric grade, 1 - 100."));
if (score > 90) {
    let result = console.log("You received an A.");
} else if (score > 80) {
    let result = console.log("You received a B.");
} else if (score > 70) {
    let result = console.log("You received a C.");
} else if (score > 65) {
    let result = console.log("You received a D.");
} else {
    let result = console.log("You received an F.");
}
