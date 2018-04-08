var p1Score = 0;
var p2Score = 0;
var winningScore = 0;

var scoreSetter = document.querySelector("#setScoreLimit");
var maxScore = document.querySelector("#maxScoreLimit");
var p1WinAction = document.querySelector("#plOneDieAction");
var p2WinAction = document.querySelector("#plTwoDieAction");
var p1ScoreDisplay = document.querySelector("#plOneScore");
var p2ScoreDisplay = document.querySelector("#plTwoScore");
var btnResetScore = document.querySelector("#ResetScore");

p1WinAction.addEventListener("click", function(){
    if(p1Score == maxScore.textContent || p2Score == maxScore.textContent)
        return;
    p1Score += 1;
    if(p1Score == maxScore.textContent)
        p1ScoreDisplay.classList.add("gameWinner");
    p1ScoreDisplay.textContent = p1Score;
});

p2WinAction.addEventListener("click", function(){
    if(p1Score == maxScore.textContent || p2Score == maxScore.textContent)
        return;
    p2Score += 1;
    if(p2Score == maxScore.textContent)
        p2ScoreDisplay.classList.add("gameWinner");
    p2ScoreDisplay.textContent = p2Score;
});

scoreSetter.addEventListener("input", function(){
    resetEveryControlValue();
    maxScore.textContent= scoreSetter.value;
    winningScore = Number(scoreSetter.value);
});

btnResetScore.addEventListener("click", function(){
    resetEveryControlValue();
});

function resetEveryControlValue(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = "0";
    p2ScoreDisplay.textContent = "0";
    maxScore.textContent = "0";
    scoreSetter.value = null;
    p1ScoreDisplay.classList.remove("gameWinner");
    p2ScoreDisplay.classList.remove("gameWinner");
};


