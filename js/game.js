const buttonColours = ['red', 'green', 'yellow', 'blue'];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

// start game 

$('.start-btn').click(function () {

});


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
        }, 400 * i); //1200 = time in milliseconds
    }

    // playSound(randomChosenColour);
    // animatedPress(randomChosenColour);

    $('#level-title').text('Level ' + level);

    console.log('level: ' + level);
    console.log("Game Pattern: " + gamePattern);

}


$('.btn').click(function () {
    playSound(this.id);
    animatedPress(this.id)
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
    $('body').addClass('bg_red').delay(250).queue(function (removeClass) {
        $(this).removeClass('bg_red');
        removeClass();
    });
    playSound('wrong');
    userClickedPattern = []
    gamePattern = [];
    keyPressed = [];
    level = 0;
    $('#level-title').text('Game over!');
}