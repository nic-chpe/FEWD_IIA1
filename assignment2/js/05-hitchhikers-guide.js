// STEP 1 
let play = prompt('Are you ready to play the game?').toLowerCase();
if (play == "yes") {
    //STEP 2
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.'); 
    
    // STEP 3
    let direction = prompt('Which direction would you like to head (please enter forward, left, or right).').toLowerCase();

    // STEP 4
    switch(direction) {
        case 'forward':
        alert('You walk 100 yards and safely make your way out of the cave.');
        break;

        case 'left':
        alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall/n into a pool of water and drown!');
        break;

        case 'right':
        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
        break;
        
        // STEP 5
        default : 
        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
    }

    // STEP 6
    let rating = parseInt(prompt('The game is now over. Please rate the game on scale of 1 to 10'));


    /*
6.	The game is now over. Ask the user to rate the game between 1 and 10. If the user enters a number not between 1 and 10, thank the user for playing and end the game, If the user enters a number between 6 and 10, thank the user and ask them to play again. If the user enters a number between 1 and 5, thank the user and tell them that you are working hard to improve the game. 
    */

   if(rating > 0 && rating <=10 ){

       if(rating>=6){
        alert('Thank you for playing, do come back and play again!');
       } else if(rating<=5){
        alert('Thank you for playing. We are working hard to improve the game.');
       }

    } else{
       alert('Thank you for playing!');
   }

} else {
    alert('Thank you, play again anytime!');
}




