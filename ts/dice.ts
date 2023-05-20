function generateRandomValue(minValue:number, maxValue:number):number{
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

function $(element:string):any{
    return document.getElementById(element); 
}

class player{
    name:string;
    score:number;
}

class game{
    turnTotal:number;
    player1Turn:boolean;
    gameWon:boolean;
}

const WINNING_SCORE = 100;
var player1 = new player();
var player2 = new player();
var thisGame = new game();

function changePlayers():void{
    let currentPlayer = $("current");

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if(thisGame.player1Turn){
        currentPlayer.innerText = player2.name;
    }
    else{
        currentPlayer.innerText = player1.name;
    }
    thisGame.player1Turn = !thisGame.player1Turn;
}

window.onload = function(){
    let newGameBtn = $("new_game");
    newGameBtn.onclick = createNewGame;

    $("roll").onclick = rollDie;

    $("hold").onclick = holdDie;
}

/**
 * Returns true if the textbox with the given id has a value, false otherwise.
 * @param id The id of the textbox to validate
 * @param errMsg The message to display in the span element next to the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBoxValue:string = $(id).value;
    if (txtBoxValue == "") {
        alert(errMsg);
        return false;
    }
    return true;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0

    //verify each player has a name
    //if both players don't have a name display error
    //if both players do have a name start the game!
    if(isTextPresent("player1", "Player 1 name is required") && isTextPresent("player2", "Player 2 name is required")){
        $("turn").classList.add("open");
        //lock in player names and then change players
        $("player1").setAttribute("disabled", "disabled");
        $("player2").setAttribute("disabled", "disabled");
        setDefaults();
        changePlayers();
    }
}

function setDefaults(){
    //reset player 1 and player 2 scores to 0
    //reset player 1 and player 2 names to empty strings
    //reset turn total to 0
    //reset player 1 turn to true
    //reset the die and total textboxes to empty strings
    (<HTMLInputElement>$("score1")).value = "0";
    (<HTMLInputElement>$("score2")).value = "0";
    (<HTMLInputElement>$("total")).value = "";
    (<HTMLInputElement>$("die")).value = "";
    player1.name = (<HTMLInputElement>$("player1")).value;
    player1.score = 0;
    player2.name = (<HTMLInputElement>$("player2")).value;
    player2.score = 0;
    thisGame.player1Turn = false;
    thisGame.turnTotal = 0;
    thisGame.gameWon = false;
}

function rollDie():void{
    let dieRoll = generateRandomValue(1, 6);

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total
    if(dieRoll == 1){
        thisGame.turnTotal = 0;
        changePlayers();
    }
    else{
        thisGame.turnTotal += dieRoll;
    }
    
    //set the die roll to value player rolled
    //display current total on form
    (<HTMLInputElement>$("die")).value = dieRoll.toString();
    (<HTMLInputElement>$("total")).value = thisGame.turnTotal.toString();
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score
    if(thisGame.player1Turn){
        player1.score += thisGame.turnTotal;
        (<HTMLInputElement>$("score1")).value = player1.score.toString();
        
    }
    else{
        player2.score += thisGame.turnTotal;
        (<HTMLInputElement>$("score2")).value = player2.score.toString();
    }
    //reset the turn total to 0
    thisGame.turnTotal = 0;
    (<HTMLInputElement>$("total")).value = thisGame.turnTotal.toString();
    (<HTMLInputElement>$("die")).value = "";
    //change players
    changePlayers();
    //check for victory
    if(!thisGame.gameWon){
        if(player1.score >= WINNING_SCORE){
            alert(player1.name + " wins! \n Click new game to play again, or you can continue this game for as long as you want.");
            thisGame.gameWon = true;
        }
        if(player2.score >= WINNING_SCORE){
            alert(player2.name + " wins! \n Click new game to play again, or you can continue this game for as long as you want.");
            thisGame.gameWon = true;
        }
    }
}