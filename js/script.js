const buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

// user clicking

let userClickedPattern = [];

let level = 0;

// add to gamePattern random color
function nextSequence() {
    level++
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    animatedPress(randomChosenColour);


    $('#level-title').text('Level ' + level);

    console.log('level: ' + level);
    console.log(gamePattern);

}


$('.btn').click(function () {

    if (keyPressed.length > 0) {

        let userChosenColour = $(this).attr('id');

        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);

        animatedPress(userChosenColour)

        console.log('user clicked: ' + userClickedPattern);

        theGame();
    }
});


function playSound(name) {
    new Audio('sounds/' + name + '.mp3').play();
}

function animatedPress(currentColour) {
    $('#' + currentColour).addClass(currentColour + "-active").delay(250).queue(function (removeClass) {
        $(this).removeClass(currentColour + "-active");
        removeClass();
    });
}

// detect any keypress on keyboard
let keyPressed = [];

// -- start game --- detect keyboard press for first time and call nextSequence()

$(document).keydown(function (event) {
    if (keyPressed.length === 0) {
        nextSequence();
        keyPressed.push(event.key);
        // startTheGame();
    }
});


// ==== the game  ===== // 

function theGame() {
    if (userClickedPattern[userClickedPattern.length - 1] == (gamePattern[userClickedPattern.length - 1])) {
        console.log('correct');
        if (gamePattern.length > userClickedPattern.length) {
            console.log('click again')
       
        } else {
            setTimeout(function () {
                nextSequence()
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        console.log('game over');
        userClickedPattern = []
        gamePattern = [];
        keyPressed = [];
        level = 0;
        $('#level-title').text('Game over!');
    }

}