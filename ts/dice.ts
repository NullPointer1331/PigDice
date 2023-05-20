function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.random();
    
    //TODO: use random to generate a number between min and max


    return random;
}

function $(element:string):any{
    return document.getElementById(element); 
}

function changePlayers():void{
    let currentPlayerName = $("current").innerText;
    let player1Name = (<HTMLInputElement>$("player1")).value;
    let player2Name = (<HTMLInputElement>$("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if(currentPlayerName == player1Name){
        currentPlayerName = player2Name;
    }
    else{
        currentPlayerName = player1Name;
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
    let txtBox:HTMLInputElement = $(id);
    let txtBoxValue:string = txtBox.value;
    let errSpan:HTMLElement = <HTMLElement>txtBox.nextElementSibling;
    if (txtBoxValue == "") {
        errSpan.innerText = errMsg;
        return false;
    }
    errSpan.innerText = "*";
    return true;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0

    //verify each player has a name
    //if both players don't have a name display error

    //if both players do have a name start the game!
    $("turn").classList.add("open");
    (<HTMLInputElement>$("total")).value = "0";
    //lock in player names and then change players
    $("player1").setAttribute("disabled", "disabled");
    $("player2").setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>$("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}