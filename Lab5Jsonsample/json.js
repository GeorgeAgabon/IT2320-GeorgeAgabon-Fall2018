//code here gets called on window load

console.log("hello");





//DOM cannot be accessed when the window has not yet loaded

window.onload = function(){



    document.getElementById("main").innerHTML = "Newcontent";

    hello();

    

    //Call the function JSObject()

    JSObject();

    //Call the function JSONObject()

    JSONObject();

}



//function needs to be called to work

function hello()

{

    alert("hello");

}



function JSObject()

{

    var person = {  fname: "Manjula",

                    lname: "Chandirasekaran",

                    address: "1234 Main Street",

                    city: "Cleveland",

                    state: "OH",

                    zipcode: 44124,

                    isAlive: true,

                    fullname: function(){

                        return this.fname+ " "+ this.lname;

                    },

                    formatName: "ManjulaChandirasekaran"

    };



    //#1 Access property

    console.log(person.fname);

    

    //#2 Access property (like an array)

    console.log(person["address"]);



    //#3 alias

    var x = "state";

    console.log(person[x]);



    //#4 Access a method

    console.log(person.fullname());



    console.log(person);

    

    //Change a property

    person.zipcode = 44143;

    console.log(person);



    //Add a property

    person.education = "Masters";

    console.log(person);



    //Delete a property

    delete person.address;

    console.log(person);



    //Change a property to a method

    console.log(person.formatName);

    person.formatName = function()

    {

        return this.fname.toUpperCase()+" "+this.lname.toUpperCase();

    }

    console.log(person.formatName());

}





function JSONObject()

{

    //JSON - Javascript Object Notation

    //Used for data exchange

    //"key":"value"

    //No functions allowed in the value part

    //No trailing commas

        var jsonPerson = {  

            "fname": "Manjula",

            "lname": "Chandirasekaran",

            "address": "1234 Main Street",

            "city": "Cleveland",

            "state": "OH",

            "zipcode": 44124,

            "isAlive": true

    };



    //json object into a string

    var jsonPersonAsString = JSON.stringify(jsonPerson);

    console.log(jsonPersonAsString);

    

    //json string into an object

    var jsonObj = JSON.parse(jsonPersonAsString);

    console.log(jsonObj.fname);

    console.log(jsonObj.lname);

    console.log(jsonObj.city);

}