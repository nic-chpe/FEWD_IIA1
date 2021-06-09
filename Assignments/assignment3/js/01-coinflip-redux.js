function coinFlip(numTimes) {
 
    for(var i = 0; i < numTimes; i++){
      let coin = Math.floor(Math.random() * 10);
      let even = (coin % 2 === 0);
      console.log("The coin was " + (even ? "heads " : " tails"));
    }
  }
  
  
  coinToss(5);