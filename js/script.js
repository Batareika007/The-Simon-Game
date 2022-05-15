let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

// user clicking

let userClickedPattern = [];


// add to gamePattern random color
function nextSequence() {
    
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    // $('#' + randomChosenColour).fadeOut(250).fadeIn(50);
    // $('#' + randomChosenColour).delay(3000).toggleClass(randomChosenColour + "-active");
    
    $('#' + randomChosenColour).addClass(randomChosenColour + "-active").delay(300).queue(function (removeClass) {
        $(this).removeClass(randomChosenColour + "-active");
        removeClass();
    });

    playSound(randomChosenColour);
}


$('.btn').click(function () {
    let userChosenColour = $(this).attr('id');
    
    playSound(userChosenColour);
    
    userClickedPattern.push(userChosenColour);
    
    console.log(userClickedPattern);
});


function playSound(name){
    new Audio('sounds/' + name + '.mp3').play();
}