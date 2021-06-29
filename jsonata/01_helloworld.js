var jsonata = require("jsonata");

const fs = require("fs");

/**
 * Read jsonata schema  
 **/ 
const personQueryExpr = fs.readFileSync("/Users/g0s051y/gitws/nodejs/jsonata/schema/person.jql").toString();

/**
 * Helper function to get JSON Object from data json file. 
 * This is just an example, data can come from a streaming source/rest api.
 * 
 * @param {*} dataPath 
 * @param {*} callBack 
 */
function readData(dataPath, callBack){
    fs.readFile(dataPath, "utf8", (err, dataJsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return callBack && callBack(err);
        }
        try {
            const object = JSON.parse(dataJsonString);
            return callBack && callBack(null, object);
        } catch (err) {
            return callBack && callBack(err);
        }
    });
}

/**
 * Reading JSON Event asyncronously and fetching attributes accoring to schema/query defined. 
 */
readData("/Users/g0s051y/gitws/nodejs/jsonata/data/01_person.json", (err, person) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(person);

    // Simple attribute extraction
    var expr = jsonata("$.FirstName");  // var expr = jsonata("FirstName"); 
    var firstName = expr.evaluate(person);
    var expr = jsonata("$.Surname");  // var expr = jsonata("FirstName"); 
    var surName = expr.evaluate(person);
    console.log(firstName, surName);
    
    // JSON Object extraction
    var addressExpr = jsonata("$.Address");
    var address = addressExpr.evaluate(person);
    console.log(JSON.stringify(address));
    
    // JSON Array extraction
    var phoneExpr = jsonata("$.Phone");                     // Query whole JAON Array
    var phone = phoneExpr.evaluate(person);
    console.log(JSON.stringify(phone));

    var phoneExpr = jsonata("$.Phone[0]");                  // Query element at given index in a JSON Array 
    var phone = phoneExpr.evaluate(person);
    console.log(JSON.stringify(phone));

    var phoneNumberExpr = jsonata("$.Phone[0].number");     // Qeury attribute of an element at given index in a JSON Array  
    var phoneNumber = phoneNumberExpr.evaluate(person);
    console.log(JSON.stringify(phoneNumber));

    /** 
     * Filteration Predicates
     **/

    var homePhoneExpr = jsonata("$.Phone[type='home']");     // Query, phones where type=home
    var homePhones = homePhoneExpr.evaluate(person);
    console.log(JSON.stringify(homePhones));

    var officePhoneExpr = jsonata("$.Phone[type='office']");     // Query, phones where type=office
    var officePhones = officePhoneExpr.evaluate(person);
    console.log(JSON.stringify(officePhones));

    /**
     * 
     */

    console.log(personQueryExpr);
    var personalDetailsExpr = jsonata(personQueryExpr);
    var personalDetails = personalDetailsExpr.evaluate(person);
    console.log(JSON.stringify(personalDetails));


    // console.log(result);
});

// QTS0 -> JSON(CDOM) , QTS1+2 -> SVCO(proto)
// DM --> SVCO --> QTS --> CDOM/SVCO 
// id, value, xyz, idList, 
// 10vCores, 10GB -> inform to the team  


