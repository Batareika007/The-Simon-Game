const buttonColours = ['red', 'green', 'yellow', 'blue'];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

// start game 

$('.start-btn').click(function () {
    if (gamePattern.length > 0) {
        gameOver()
        $('.game-over__text').text('colors only');
    } else {
        nextSequence()
        $('.game-over__text').css('display', 'none');
    }
    console.log(gamePattern)
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
        }, 1000 * i); //1200 = time in milliseconds
    }

    // playSound(randomChosenColour);
    // animatedPress(randomChosenColour);

    $('#level-title').text('Level ' + level);

    console.log('level: ' + level);
    console.log("Game Pattern: " + gamePattern);

}


$('.btn').click(function () {
    if (gamePattern.length > 0) {
        let userChosenColour = $(this).attr('id');

        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);

        animatedPress(userChosenColour)

        console.log('user clicked: ' + userChosenColour);

        theGame();
    } else {
        gameOver();
    }
    playSound(this.id);
    animatedPress(this.id)
});


function playSound(name) {
    new Audio('sounds/' + name + '.mp3').play();
}

function animatedPress(currentColour) {
    $('#' + currentColour).addClass(currentColour + "-active").delay(300).queue(function (removeClass) {
        $(this).removeClass(currentColour + "-active");
        removeClass();
    });
}


function theGame() {
    if (userClickedPattern[userClickedPattern.length - 1] === (gamePattern[userClickedPattern.length - 1])) {
        console.log('correct');
        console.log(userClickedPattern);
        if (gamePattern.length > userClickedPattern.length) {
            console.log('continue!')
        } else {
            $('#level-title').text('Next round');
            console.log('Get ready for next round')
            // nextSequence()
            setTimeout(function () {
                nextSequence()
            }, 1000);
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
    $('.game-over__text').css('display', 'block');
    $('.game-over__text').text('try again');
}