window.onload = function() {
    let flips = [];
    let rand;
    let NUM_FLIPS = 10;
    let headcounter = 0;
    let tailscounter = 0;
    let headsstreak = 0;
    let highscore = 0;
    
    function start(){
        flips = flipCoins();
        headsStreak(flips);
        countHeadsAndTails();
        
    }


function flipCoins(){
for(let i = 0; i < NUM_FLIPS; i++){                
rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
if(rand == 1){
    flips.push("Heads");
    }else{
    flips.push("Tails");
    }
}

return flips;
}



function printArray(arr){
for(let i = 0; i < arr.length; i++){
console.log(i + ": " + arr[i]);
}
}

function countHeadsAndTails(){
for(let i = 0; i < flips.length; i++){
if(flips[i] == "Heads"){
    headcounter++;
}else if(flips[i] == "Tails"){
    tailscounter++;
}
}
document.write("Total Amount of Heads: " + headcounter + "<br>");
document.write("Total Amount of Tails: " + tailscounter + "<br>");   
}

function headsStreak(arr){
for(let i = 0; i < arr.length; i++){
console.log("Heads Streak Amount: " + headsstreak);
console.log("High Score Amount: " + highscore);
if(arr[i] == "Heads"){
    headsstreak++;
}
if(highscore < headsstreak){
    highscore = headsstreak;
    headsstreak = 0;
}
}

document.write("Longest Streak of Heads: " + highscore + "<br>");
}




   if (typeof start === 'function') {
    start();
   }
    
};
