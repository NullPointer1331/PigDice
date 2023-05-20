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
function changePlayers() {
    var currentPlayer = $("current");
    var player1Name = $("player1").value;
    var player2Name = $("player2").value;
    if (currentPlayer.innerText == player1Name) {
        currentPlayer.innerText = player2Name;
    }
    else {
        currentPlayer.innerText = player1Name;
    }
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
        $("total").value = "0";
        $("player1").setAttribute("disabled", "disabled");
        $("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    var currTotal = parseInt($("total").value);
    var dieRoll = generateRandomValue(1, 6);
    if (dieRoll == 1) {
        currTotal = 0;
        changePlayers();
    }
    else {
        currTotal += dieRoll;
    }
    $("die").value = dieRoll.toString();
    $("total").value = currTotal.toString();
}
function holdDie() {
    changePlayers();
}
