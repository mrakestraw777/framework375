var Player = function(name){
    this.name = name;
    this.liveLeft = 3;
    this.score = 0;
    this.speed = 0;
    this.gridLocationX = 0;
    this.gridLocationY = 0;
}

var xAxis = 10;
var yAxis = xAxis;

Player.prototype.die = function(){
    if(livesLeft === 0){
        alert("You have died, " + name);
    }else{
        console.log("You have " + livesLeft + " lives left, " + name);
    }
};

Player.prototype.moveLeft = function(){
    if(this.gridLocationX != 0){
        this.gridLocationX -= 1;
    }else{
        alert("You're at the left edge of the board and CANNOT move left.");
        console.log("You're at the left edge of the board and CANNOT move left.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

Player.prototype.moveRight = function(){
    if(this.gridLocationX != xAxis-1){
        // alert("the value of gridLocationX in moveRight is " + this.gridLocationX);
        this.gridLocationX += 1;
    }else{
        alert("You're at the right edge of the board and CANNOT move right."); 
        console.log("You're at the right edge of the board and CANNOT move right.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

Player.prototype.moveUp = function(){
    if(this.gridLocationY != 0){
        this.gridLocationY -= 1;
    }else{
        alert("You're at the top of the board and CANNOT move up.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

Player.prototype.moveDown = function(){
    if(this.gridLocationY != yAxis -1){
        this.gridLocationY += 1;
    }else{
        alert("You're at the bottom of the board and CANNOT move down.");
        // INSERT FUNCTION TO ASK FOR NEW MOVE AGAIN
    }
};

Player.prototype.newMove = function(playerMove){
    if (playerMove == "left"){
        this.moveLeft();
        // this.printBoard();
    }
    else if (playerMove == "right"){
        this.moveRight();
        this.printBoard();
    }
    else if (playerMove == "up"){
        this.moveUp();
        // this.printBoard();
    }
    else if (playerMove == "down"){
        this.moveDown();
        // this.printBoard();
    }else{
        playerMove = prompt("You can only enter 'left,' 'right,' 'up,' or 'down.'  All lowercase letters.");
        this.newMove(playerMove);
    }
};

Player.prototype.printBoard = function(){
    var board = "";
    for(let y = 0; y < yAxis; y++){
        var rowContents = "";
        for(let x = 0; x < xAxis; x++){
            if((x == this.gridLocationX) && (y == this.gridLocationY)){
                rowContents += "<td class='currentLocation'></td>";
            }else{
                rowContents += "<td></td>";
            }
        } // Inner For
        var newRow = "<tr>" + rowContents + "</tr>";
        board += newRow;
        var table = "<table>" + board + "</table>";
    } //Main FOR
    return table;
};