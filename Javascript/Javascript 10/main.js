//  BUTTON FUNCTION
let buttonClick = function(){
    let mapOfChores = createMap();
    let choresWithPeople = choreMapAssign(mapOfChores);
    document.getElementById('output').innerHTML = printAssignments(choresWithPeople);
};

// CREATES A MAP OF CHORES FROM USER INPUT
let createMap = function(){
    let userChoreMap = new Map();
    let userChore = prompt("What chore needs to be completed? Enter 'done' when finished. ")
    while(userChore != 'done'){
        userChoreMap.set(userChore, "");
        userChore = prompt("What is another chore to be completed? (Click 'Ok' or 'Enter' when done.) ")
    }
    alert("You've entered your list of chores.  Now assign people to the chores.");
    return userChoreMap;
}

// ASSIGNS PERSON TO CHORE
let choreMapAssign = function(userMap){
    for( let r of userMap.keys()){
        if(userMap.get(r) == ''){
            let assignee = prompt("Whom do you wish to assign to the task: " + r + "?");
            userMap.set(r, assignee);
        }
    }; // FOR LOOP
    return userMap;
}; // FUNCTION

// PRINTS OUT TABLE WITH CHORE/PERSON ASSIGNMENTS FROM MAP
let printAssignments = function(userMap){
    let tableRows = "<tr id='rowOne'> <td>Chore</td> <td>Assigned</td> </tr>";
    for (let r of userMap.entries()){
        tableRows += "<tr> <td class='choreCol'>" + r[0] + "</td> <td class='assignee'>" + r[1] + "</td> </tr>"
    }// FOR LOOP
    
    let choreTable = "<table>" + tableRows + "</table>"
    return choreTable;
}


/* It’s clean up time at Camp Whack-a-Doo. The problem is the campers never know which chores are theirs. 
You have been tasked with creating a JavaScript program to store the campers and assign tasks. The data should be stored in a map.

When the program starts the user should be instructed to enter a campers name, and then a task. 
The tasks should be limited to the following:

Front Room Sweep
Back Room Sweep
Outside Grounds
Clean Toilet
Clean Sink
Trash Patrol and Supplies

The campers’ names and assignments should be stored in a map with the task being the key and the camper’s name the value.

The interface should include a button that, when clicked lists all the campers names and their clean-up assignments.

The requirements here are purposefully a bit vague giving you some latitude on how you implement a correct solution. 
Just make sure you meet the requirements listed. */

//test MAP
/* let choreMap = new Map([
    ['Front Room Sweep', 'asdf'],
    ['Back Room Sweep', 'asdf'],
    ['Outside Grounds', 'asdf'],
    ['Clean Toilet', 'asdf'],
    ['Clean Sink', 'asdf'],
    ['Trash Patrol', 'asdf'],
    ['Supplies', 'asdf']
]); */