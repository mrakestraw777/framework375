let madderLibs = function(){
    // console.log("Function is working!!")
    let object = {};
    object.clothing = document.getElementById('clothing').value;
    object.bodyPart1 = document.getElementById('bodyPart1').value;
    object.bodyPart2 = document.getElementById('bodyPart2').value;
    object.verb1 = document.getElementById('verb1').value;
    object.bodyPart3 = document.getElementById('bodyPart3').value;
    object.verb2 = document.getElementById('verb2').value;
    object.noun1 = document.getElementById('noun1').value;
    object.noun2 = document.getElementById('noun2').value;
    object.verb3 = document.getElementById('verb3').value;
    // console.log(object)
    let output = `How to do The Floss Dance<br>
    <br>
    1 ) Put on some music  <br>
    2 ) Put on a ${object.clothing} ( optional ) <br> 
    3 ) Stand with your ${object.bodyPart1} ever so slightly bent  <br>
    4 ) Put your hands in fists  <br>
    5 ) Place your ${object.bodyPart2}, relaxed, at the side of your body  <br>
    6 ) Begin to ${object.verb1} your ${object.bodyPart3} left and right around your torso in the opposite direction to your hips  <br>
    7 ) Keep doing it and increase speed and ${object.verb2} ${object.noun1} occasionally for effect<br>
    After building confidence, you can also ${object.noun2} ${object.verb3} with your arms if desired, but this is not mandatory.<br>
    <button onclick="reset()">Go Again?</button>`

    document.getElementById('output').innerHTML = output;

    document.getElementById("formAndButton").style.display = "none";
    document.getElementById("output").style.display = "initial";

    console.log(output)
}

let reset = function(){
    document.getElementById("formAndButton").style.display = "initial";
    document.getElementById("output").style.display = "none";
}
