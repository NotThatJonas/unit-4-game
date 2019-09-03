//Global Variables
var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var randomStoneNumber = Math.floor(Math.random() * (12 - 1) + 1);
var totalScore = 0;
var stone1 = Math.floor(Math.random() * (12 - 1) + 1);
var stone2 = Math.floor(Math.random() * (12 - 1) + 1);
var stone3 = Math.floor(Math.random() * (12 - 1) + 1);
var stone4 = Math.floor(Math.random() * (12 - 1) + 1);

console.log('random', randomNumber);
console.log('random', randomStoneNumber);

//Start Game
$('#game-wins').text(wins);
$('#game-losses').text(losses);

//Select Random Number
$('#random-number').text(randomNumber);


//give gems a different random number value


//on click of gem incrementally add their hidden value to total score
$('#stone1').on('click', function () {
    totalScore += stone1; 
    $('#total-score').text(totalScore); 
    if (totalScore === randomNumber) {
        wins++;
        $('#game-wins').text(wins);  
        restart(); 
    }; 
    if (totalScore > randomNumber) {
        losses++;
        $('#game-losses').text(losses);
        restart();
    };
});

$('#stone2').on('click', function () {
    totalScore += stone2;
    $('#total-score').text(totalScore); 
    if (totalScore === randomNumber) {
        wins++;
        $('#game-wins').text(wins);   
        restart();
    }; 
    if (totalScore > randomNumber) {
        losses++;
        $('#game-losses').text(losses);
        restart();
    };     
});

$('#stone3').on('click', function () {
    totalScore += stone3;
    $('#total-score').text(totalScore);  
    if (totalScore === randomNumber) {
        wins++;
        $('#game-wins').text(wins);
        restart();   
    }; 
    if (totalScore > randomNumber) {
        losses++;
        $('#game-losses').text(losses);
        restart();
    };
});

$('#stone4').on('click', function () {
    totalScore += stone4;  
    $('#total-score').text(totalScore); 
    if (totalScore === randomNumber) {
        wins++;
        $('#game-wins').text(wins); 
        restart();  
    }; 
    if (totalScore > randomNumber) {
        losses++;
        $('#game-losses').text(losses);
        restart();
    }; 
});

if (totalScore > randomNumber) {
    $('#total-score').text(0); 
};

//restart game on win(being equal to the OG selected number) or lose going over
function restart () {
    if (totalScore > randomNumber) {
        $('#total-score').text(0);
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $('#random-number').text(randomNumber);
        stone1 = Math.floor(Math.random() * (12 - 1) + 1);
        stone2 = Math.floor(Math.random() * (12 - 1) + 1);
        stone3 = Math.floor(Math.random() * (12 - 1) + 1);
        stone4 = Math.floor(Math.random() * (12 - 1) + 1);
        totalScore = 0;
    };

    if (totalScore === randomNumber) {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $('#random-number').text(randomNumber);
        stone1 = Math.floor(Math.random() * (12 - 1) + 1);
        stone2 = Math.floor(Math.random() * (12 - 1) + 1);
        stone3 = Math.floor(Math.random() * (12 - 1) + 1);
        stone4 = Math.floor(Math.random() * (12 - 1) + 1);
        totalScore = 0;
        $('#total-score').text(0); 
    };


};
