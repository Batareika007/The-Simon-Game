let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

// user clicking

let userClickedPattern = [];

let level = 0;

// add to gamePattern random color
function nextSequence() {
    
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    animatedPress(randomChosenColour);

    playSound(randomChosenColour);

    $('h1').text('Level ' + level)
    
    console.log(level)
    
    level++
}


$('.btn').click(function () {
    let userChosenColour = $(this).attr('id');
    
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    
    animatedPress(userChosenColour)

    console.log(userClickedPattern);
});


function playSound(name){
    new Audio('sounds/' + name + '.mp3').play();
}

function animatedPress(currentColour){
    $('#' + currentColour).addClass(currentColour + "-active").delay(250).queue(function (removeClass) {
        $(this).removeClass(currentColour + "-active");
        removeClass();
    });
}

let keyPressed = [];
$(document).keydown(function(event){
    if (keyPressed.length === 0){
        nextSequence();
    }
    keyPressed.push(event.key)
});



