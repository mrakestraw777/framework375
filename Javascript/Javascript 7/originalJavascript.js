var player1 = function(){
    this.name = "player1"; //prompt("What's your name? ");
    this.liveLeft = 3;
    this.score = 0;
    this.speed = 0;
    this.gridLocationX = 0;
    this.gridLocationY = 0;
}

var xAxis = 10;
var yAxis = xAxis;

var die = function(){
    if(livesLeft === 0){
        alert("You have died, " + name);
    }else{
        console.log("You have " + livesLeft + " lives left, " + name);
    }
};

var moveLeft = function(){
    if(gridLocationX != 0){
        gridLocationX -= 1;
    }else{
        alert("You're at the left edge of the board and CANNOT move left.");
        console.log("You're at the left edge of the board and CANNOT move left.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

var moveRight = function(){
    if(gridLocationX != 9){
        gridLocationX += 1;
    }else{
        alert("You're at the right edge of the board and CANNOT move right."); 
        console.log("You're at the right edge of the board and CANNOT move right.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

var moveUp = function(){
    if(gridLocationY != 0){
        gridLocationY -= 1;
    }else{
        alert("You're at the top of the board and CANNOT move up.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

var moveDown = function(){
    if(gridLocationY != 9){
        gridLocationY += 1;
    }else{
        alert("You're at the bottom of the board and CANNOT move down.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

var newMove = function(){
    var playerMove = prompt("What's your next move? (left, right, up, down)");
    if (playerMove == "left"){
        moveLeft();
    }
    else if (playerMove == "right"){
        moveRight();
        // INSERT FUNCTION TO PRINT OUT BOARD
    }
    else if (playerMove == "up"){
        moveUp();
        // INSERT FUNCTION TO PRINT OUT BOARD
    }
    else if (playerMove == "down"){
        moveDown();
        // INSERT FUNCTION TO PRINT OUT BOARD
    }else{
        alert("You can only enter 'left,' 'right,' 'up,' or 'down.'  All lowercase letters.");
        newMove();
    }
};

var printBoard = function(){
    //console.log(player1.gridLocationX);
    var boardX = gridLocationX;
    console.log("boardX is " + boardX)
    var boardY = gridLocationY;
    var board = "";
    console.log("yAxis is " + yAxis);
    for(let y = 0; y < yAxis; y++){
        var rowContents = "";
        for(let x = 0; x < xAxis; x++){
            if((x == boardX) && (y == boardY)){
                rowContents += "<td class='currentLocation'></td>";
            }else{
                rowContents += "<td></td>";
            }
        } // Inner For
        var newRow = "<tr>" + rowContents + "</tr>";
        board += newRow;
    } //Main FOR
    document.getElementById('playerBoard').innerHTML = board;
};