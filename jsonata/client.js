var jsonata = require("jsonata");
const fs = require("fs");


const personQueryExpr = fs.readFileSync("/Users/g0s051y/gitws/nodejs/jsonata/schema/person.jsonata").toString();

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

    //console.log(personQueryExpr);
    var personalDetailsExpr = jsonata(personQueryExpr);
    var personalDetails = personalDetailsExpr.evaluate(person);
    console.log(JSON.stringify(personalDetails));
});