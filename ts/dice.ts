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
    player1:player;
    player2:player;
    turnTotal:number;
    player1Turn:boolean;
}

function changePlayers():void{
    let currentPlayer = $("current");
    let player1Name = (<HTMLInputElement>$("player1")).value;
    let player2Name = (<HTMLInputElement>$("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if(currentPlayer.innerText == player1Name){
        currentPlayer.innerText = player2Name;
    }
    else{
        currentPlayer.innerText = player1Name;
    }
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
        (<HTMLInputElement>$("total")).value = "0";
        //lock in player names and then change players
        $("player1").setAttribute("disabled", "disabled");
        $("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>$("total")).value);
    let dieRoll = generateRandomValue(1, 6);

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total
    if(dieRoll == 1){
        currTotal = 0;
        changePlayers();
    }
    else{
        currTotal += dieRoll;
    }
    
    //set the die roll to value player rolled
    //display current total on form
    (<HTMLInputElement>$("die")).value = dieRoll.toString();
    (<HTMLInputElement>$("total")).value = currTotal.toString();
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}