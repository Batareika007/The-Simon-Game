let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

// user clicking

let userClickedPattern = [];

// random number 0 - 3

let randomNumber = Math.floor(Math.random() * 4);

let randomChosenColour = buttonColours[randomNumber];

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
    new Audio('sounds/' + randomChosenColour + '.mp3').play();
}

// run function on any keypress

// $(document).keypress(nextSequence);

$('.btn').click(function () {
    // let userChosenColour = this.id;
    let userChosenColour = $(this).attr('id');
    new Audio('sounds/' + userChosenColour + '.mp3').play();
    userClickedPattern.push(userChosenColour);
    
    console.log(userClickedPattern);
});

