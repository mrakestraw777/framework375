alert("The file is connect to Javascript 9!");

// main function to generate To-do template
let toDo = function(userArray){
    let output = "<h1>TO-DO</h1>";
    output += addToDo(userArray);
    return output;
};

// function to add individual to-do items to the div output
let addToDo = function(userArray){
    let itemOutput = "";
    for(let x = 0; x<userArray.length; x++){
        itemOutput += "<p>- " + userArray[x] + "</p>"
    }
    return itemOutput;
};