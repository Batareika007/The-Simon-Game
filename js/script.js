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

    for (i = 0; i < gamePattern.length; i++) {
        runSequence(i); // 0 -- 1 -- 2 -- 3 .... 
    }

    function runSequence(i) {
        setTimeout(function () {
            playSound(gamePattern[i]);
            animatedPress(gamePattern[i]);
            console.log(gamePattern[i])
        }, 300 * i); //1200 = time in milliseconds
    }

    // playSound(randomChosenColour);
    // animatedPress(randomChosenColour);

    $('#level-title').text('Level ' + level);

    console.log('level: ' + level);
    console.log("Game Pattern: " + gamePattern);

}


$('.btn').click(function () {


    if (keyPressed.length > 0) {
        let userChosenColour = $(this).attr('id');

        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);

        animatedPress(userChosenColour)

        console.log('user clicked: ' + userChosenColour);

        theGame();
    }
    // else {
    //     gameOver()
    // }
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
        $('#level-title').text('Get ready!');



        for (i = 0; i < buttonColours.length; i++) {
            runSequence(i); // 0 -- 1 -- 2 -- 3 .... 
        }

        function runSequence(i) {
            setTimeout(function () {
                playSound(buttonColours[i]);
                animatedPress(buttonColours[i]);
                console.log(buttonColours[i])
            }, 100 * i); //1200 = time in milliseconds
        }
        setTimeout(function () {

            nextSequence();

        }, 2000)
        

        keyPressed.push(event.key);
        // startTheGame();
    }
    // else {
    //     gameOver()
    // }
});


// ==== the game  ===== // 

function theGame() {
    if (userClickedPattern[userClickedPattern.length - 1] === (gamePattern[userClickedPattern.length - 1])) {
        // console.log('correct');
        if (gamePattern.length > userClickedPattern.length) {
            // console.log('continue!')
        } else {
            $('#level-title').text('Next round');
            // console.log('Get ready for next round')
            setTimeout(function () {
                nextSequence()
            }, 2000);
            userClickedPattern = [];
        }
    } else {
        gameOver()
    }

}

function gameOver() {
    console.log('game over');
    userClickedPattern = []
    gamePattern = [];
    keyPressed = [];
    level = 0;
    $('#level-title').text('Game over!');
}