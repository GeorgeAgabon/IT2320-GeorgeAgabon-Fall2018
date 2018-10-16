//Assignment 1

console.log("Welcome!");

 
window.onload = function(){

    document.getElementById("main").innerHTML = "Car information here";

hello()

JSObject(); //calling the function

JSONObject(); // calling the function




}

function hello(){

}

//1. Create Javascript Object and display in console

function JSObject()

{

    var car = {  year: 2017,

                    make: "Honda",

                    model: "Accord",

                    vinnumber: 56485135876,

                    numberofdoors: 4,

                    color: "red",

                    enginetype: "V6"
    };

    console.log(car);


//5. Update color property

    car.color ="blue";
    console.log(car);

}


//2. Create JSONObject
function JSONObject()

{

    var jsoncar =   {"year" : 2017, "make" : "Honda", "model" : "Accord","vinnumber" : 56485135876,

                    "numberofdoors" : 4,
                    
                    "color" : "red",

                    "enginetype" : "V6"
    };


        console.log(jsoncar);

//3. Convert JSON to JSON String

var jsonCarAsString = JSON.stringify(jsoncar);

console.log(jsonCarAsString);



//4 Json string into object 

var jsonObject = JSON.parse(jsonCarAsString);

console.log(jsonObject.make);
console.log(jsonObject.model);
console.log(jsonObject.color);
console.log(jsonObject.enginetype);

//6. json object into a string

var jsonCarAsString = JSON.stringify(jsoncar);

console.log(jsonCarAsString);


}
