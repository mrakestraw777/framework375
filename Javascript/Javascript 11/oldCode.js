let piecesInPlay = [];
let randomArray = [];

// Prints out the Bingo board w/ classes for chosen pieces
let printBingoBoard = function(setPieces){ 
    let piecesArray = [...setPieces];
    let firstRow = "<tr> <th>B</th> <th>I</th> <th>N</th> <th>G</th> <th>O</th> </tr>";
    let numberRows = "";
    for (let x = 0; x<15; x++){
        let newRow = "";
        for(let y = x; y<piecesArray.length; y+=15){
            if (piecesInPlay.includes(piecesArray[y]))
            {
                newRow += "<td class='inPlay'>" + piecesArray[y] + "</td>"
            }
            else 
            {
                newRow += "<td>" + piecesArray[y] + "</td>";
            }
        };
        numberRows += "<tr>" + newRow + "</tr>";
    };
    let bingBoard = "<table>" + firstRow + numberRows + "</table>";
    document.getElementById('printPiece').value = "New Piece";
    return bingBoard;

};

// Chooses a random game piece from the provided Set 
let chooseBingoPiece = function(setPieces){
    let piecesArray = [...setPieces];
    let bingoPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)]
    // console.log(bingoPiece); #DELETE
    // Push the random piece to piecesInPlay[] if not already in play
    if (piecesInPlay.includes(bingoPiece))
    {
        console.log(bingoPiece + " has already been chosen.  Choosing again...");
        chooseBingoPiece(setPieces);
    }
    else
    {
        piecesInPlay.push(bingoPiece);
        console.log("Currently Selected piece:  " + bingoPiece);
        document.getElementById('currentPiece').innerHTML = "<h1>Current Piece: " + bingoPiece + "</h1>";
    }
    // 
    
}

let chooseRandomBoardArray = function(setPieces){
    let piecesArray = [...setPieces];
    let randomBoard = [];
    while (randomBoard.length != piecesArray.length)
    {
        let bingoPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)]
        if (randomBoard.includes(bingoPiece))
        {
            console.log("Piece already exists in randomBoard.  Choosing again...");
            chooseRandomBoard(setPieces);
        }
        else
        {
            randomBoard.push(bingoPiece);
        }
    }
    return randomBoard;
} //END OF FUNCTION

let printRandomBoard = function(setPieces){
    let firstRow = "<tr> <th>B</th> <th>I</th> <th>N</th> <th>G</th> <th>O</th> </tr>";
    let numberRows = "";
    // chooseBingoPiece(setPieces);//TEST Row for randomizer
    for (let x = 0; x<15; x++){
        let newRow = "";
        for(let y = 0; y < 5; y++){
            if (piecesInPlay.includes(piecesArray[y]))
            {
                newRow += "<td class='inPlay'>" + piecesArray[y] + "</td>"
            }
            else 
            {
                newRow += "<td>" + piecesArray[y] + "</td>";
            }
        };
        numberRows += "<tr>" + newRow + "</tr>";
    };
    let bingBoard = "<table>" + firstRow + numberRows + "</table>";
    document.getElementById('printPiece').value = "New Piece";
    return bingBoard;
    
}

let numbers = new Set()
    .add("B1")
    .add("B2")
    .add("B3")
    .add("B4")
    .add("B5")
    .add("B6")
    .add("B7")
    .add("B8")
    .add("B9")
    .add("B10")
    .add("B11")
    .add("B12")
    .add("B13")
    .add("B14")
    .add("B15")
    .add("I16")
    .add("I17")
    .add("I18")
    .add("I19")
    .add("I20")
    .add("I21")
    .add("I22")
    .add("I23")
    .add("I24")
    .add("I25")
    .add("I26")
    .add("I27")
    .add("I28")
    .add("I29")
    .add("I30")
    .add("N31")
    .add("N32")
    .add("N33")
    .add("N34")
    .add("N35")
    .add("N35")
    .add("N36")
    .add("N37")
    .add("N38")
    .add("N39")
    .add("N40")
    .add("N41")
    .add("N42")
    .add("N43")
    .add("N44")
    .add("N45")
    .add("G46")
    .add("G47")
    .add("G48")
    .add("G49")
    .add("G50")
    .add("G51")
    .add("G52")
    .add("G53")
    .add("G54")
    .add("G55")
    .add("G56")
    .add("G57")
    .add("G58")
    .add("G59")
    .add("G60")
    .add("O61")
    .add("O62")
    .add("O63")
    .add("O64")
    .add("O65")
    .add("O66")
    .add("O67")
    .add("O68")
    .add("O69")
    .add("O70")
    .add("O71")
    .add("O72")
    .add("O73")
    .add("O74")
    .add("O75")