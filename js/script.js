let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];



// add to gamePattern random color
function nextSequence(){
    
    let randomNumber = Math.floor(Math.random()*4);
  
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $('#'+randomChosenColour).fadeOut(250).fadeIn(50);
    new Audio('sounds/' + randomChosenColour + '.mp3').play();
}

// run function on any keypress
$(document).keypress(nextSequence);
