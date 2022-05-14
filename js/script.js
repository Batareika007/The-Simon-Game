let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];


let randomNumber = Math.floor(Math.random() * 4);

let randomChosenColour = buttonColours[randomNumber];

// add to gamePattern random color
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    // $('#' + randomChosenColour).fadeOut(250).fadeIn(50);
    $('#' + randomChosenColour).addClass(randomChosenColour + "-active").delay(1000).removeClass(randomChosenColour + "-active");
    new Audio('sounds/' + randomChosenColour + '.mp3').play();
}

// run function on any keypress
$(document).keypress(nextSequence);

$(".red").hover(function () {
    $(this).toggleClass("red-active");
});
$(".green").hover(function () {
    $(this).toggleClass("green-active");
});
$(".yellow").hover(function () {
    $(this).toggleClass("yellow-active");
});
$(".blue").hover(function () {
    $(this).toggleClass("blue-active");
});