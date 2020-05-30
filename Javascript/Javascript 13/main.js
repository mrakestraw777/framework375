let printPeople = function(objectList){
    let tableStart = `<table class="nonLang">
    <thead class="nonLang">
        <th class="nonLang">First Name</th>
        <th class="nonLang">Last Name</th>
        <th class="nonLang">Birth Year</th>
        <th class="nonLang">Languages</th>
    </thead>`;
    for(let x = 0; x < objectList.people.length; x++){
        let { firstName, lastName, dateOfBirth } = objectList.people[x];
        let { native = "N/A", fluent = "N/A", intermediate = "N/A" } = objectList.people[x].spokenLanguages;
        // console.log(intermediate);
        tableStart += ` <tr class="nonLang">
                        <td class="padding nonLang">${firstName}</td>
                        <td class="padding nonLang">${lastName}</td>
                        <td class="birthYear nonLang">${dateOfBirth}</td>
                        <td>
                            <table class="languageTable">
                                <tr class="nonLang">
                                    <td class="padding">Native:  </td> <td>${native}</td>
                                </tr>
                                <tr class="nonLang">
                                    <td class="padding">Fluent:  </td> <td>${fluent}</td>
                                </tr>
                                <tr class="nonLang"> 
                                    <td class="padding">Intermediate:  </td> <td>  ${intermediate}</td>
                                </tr>
                            </table>
                        </td>
                        </tr>`
    }
    // console.log(tableStart)
    return tableStart;
};



const userList = {
    "people": [
        {    firstName: "Fred",
             lastName: "Smith",
             dateOfBirth: 1980,
             spokenLanguages: {
                 native: "English",
                 fluent: "Spanish",
                 intermediate: "Chinese" } 
        },
        {    firstName: "Monica",
             lastName: "Taylor",
             dateOfBirth: 1975,
             spokenLanguages: {
                 native: "Spanish",
                 fluent: "English",
                 intermediate: "French" } 
        },
        {    firstName: "Maurice",
             lastName: "Edelson",
             dateOfBirth: 1992,
             spokenLanguages: {
                 native: "English",
                 fluent: "Spanish",
                 } 
        },
        {    firstName: "Kelly",
             lastName: "Lang",
             dateOfBirth: 1982,
             spokenLanguages: {
                 native: "English",
                 fluent: "German",
                 intermediate: "Dutch" } 
        }
 ]
 };


document.getElementById('output').innerHTML = printPeople(userList);
