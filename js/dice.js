function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    return random;
}
function $(element) {
    return document.getElementById(element);
}
function changePlayers() {
    var currentPlayerName = $("current").innerText;
    var player1Name = $("player1").value;
    var player2Name = $("player2").value;
    if (currentPlayerName == player1Name) {
        currentPlayerName = player2Name;
    }
    else {
        currentPlayerName = player1Name;
    }
}
window.onload = function () {
    var newGameBtn = $("new_game");
    newGameBtn.onclick = createNewGame;
    $("roll").onclick = rollDie;
    $("hold").onclick = holdDie;
};
function isTextPresent(id, errMsg) {
    var txtBox = $(id);
    var txtBoxValue = txtBox.value;
    var errSpan = txtBox.nextElementSibling;
    if (txtBoxValue == "") {
        errSpan.innerText = errMsg;
        return false;
    }
    errSpan.innerText = "*";
    return true;
}
function createNewGame() {
    $("turn").classList.add("open");
    $("total").value = "0";
    $("player1").setAttribute("disabled", "disabled");
    $("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    var currTotal = parseInt($("total").value);
}
function holdDie() {
    changePlayers();
}
