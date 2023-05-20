function generateRandomValue(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}
function $(element) {
    return document.getElementById(element);
}
var player = (function () {
    function player() {
    }
    return player;
}());
var game = (function () {
    function game() {
    }
    return game;
}());
var WINNING_SCORE = 100;
var player1 = new player();
var player2 = new player();
var thisGame = new game();
function changePlayers() {
    var currentPlayer = $("current");
    if (thisGame.player1Turn) {
        currentPlayer.innerText = player2.name;
    }
    else {
        currentPlayer.innerText = player1.name;
    }
    thisGame.player1Turn = !thisGame.player1Turn;
}
window.onload = function () {
    var newGameBtn = $("new_game");
    newGameBtn.onclick = createNewGame;
    $("roll").onclick = rollDie;
    $("hold").onclick = holdDie;
};
function isTextPresent(id, errMsg) {
    var txtBoxValue = $(id).value;
    if (txtBoxValue == "") {
        alert(errMsg);
        return false;
    }
    return true;
}
function createNewGame() {
    if (isTextPresent("player1", "Player 1 name is required") && isTextPresent("player2", "Player 2 name is required")) {
        $("turn").classList.add("open");
        $("player1").setAttribute("disabled", "disabled");
        $("player2").setAttribute("disabled", "disabled");
        setDefaults();
        changePlayers();
    }
}
function setDefaults() {
    $("score1").value = "0";
    $("score2").value = "0";
    $("total").value = "";
    $("die").value = "";
    player1.name = $("player1").value;
    player1.score = 0;
    player2.name = $("player2").value;
    player2.score = 0;
    thisGame.player1Turn = false;
    thisGame.turnTotal = 0;
    thisGame.gameWon = false;
}
function rollDie() {
    var dieRoll = generateRandomValue(1, 6);
    if (dieRoll == 1) {
        thisGame.turnTotal = 0;
        changePlayers();
    }
    else {
        thisGame.turnTotal += dieRoll;
    }
    $("die").value = dieRoll.toString();
    $("total").value = thisGame.turnTotal.toString();
}
function holdDie() {
    if (thisGame.player1Turn) {
        player1.score += thisGame.turnTotal;
        $("score1").value = player1.score.toString();
    }
    else {
        player2.score += thisGame.turnTotal;
        $("score2").value = player2.score.toString();
    }
    thisGame.turnTotal = 0;
    $("total").value = thisGame.turnTotal.toString();
    $("die").value = "";
    changePlayers();
    if (!thisGame.gameWon) {
        if (player1.score >= WINNING_SCORE) {
            alert(player1.name + " wins! \n Click new game to play again, or you can continue this game for as long as you want.");
            thisGame.gameWon = true;
        }
        if (player2.score >= WINNING_SCORE) {
            alert(player2.name + " wins! \n Click new game to play again, or you can continue this game for as long as you want.");
            thisGame.gameWon = true;
        }
    }
}
