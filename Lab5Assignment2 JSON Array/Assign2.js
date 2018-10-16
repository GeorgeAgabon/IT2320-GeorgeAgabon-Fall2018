//Assignment 2
//create array of 10 cars using json in javascript

   var jsonCars =[{"year" : 2017, "make" : "Honda", "model" : "Accord","vin number" : 56485135876,
                "number of doors" : 4, "color" : "red", "engine type" : "V6"},
                {"year" : 2016, "make" : "Audi", "model" : "Audi 8","vin number" : 65845135876,
                "number of doors" : 3, "color" : "black", "engine type" : "V8"},
                {"year" : 2018, "make" : "M Benz", "model" : "AMG","vin number" : 85649135876,
                "number of doors" : 5, "color" : "white", "engine type" : "V6"},
                {"year" : 2019, "make" : "BMW", "model" : "E45 Sports","vin number" : 98985135876,
                "number of doors" : 5, "color" : "gold", "engine type" : "V6"},
                {"year" : 2015, "make" : "Fiat", "model" : "Uno","vin number" : 25655135876,
                "number of doors" : 3, "color" : "silver", "engine type" : "V4"},
                {"year" : 2014, "make" : "Toyota", "model" : "Camry","vin number" : 35245135876,
                "number of doors" : 5, "color" : "gold", "engine type" : "V6"},
                {"year" : 2018, "make" : "Chrysler", "model" : "300","vin number" : 85975135876,
                "number of doors" : 5, "color" : "black", "engine type" : "V8"},
                {"year" : 2017, "make" : "Ford", "model" : "Fusion","vin number" : 45685135876,
                "number of doors" : 5, "color" : "blue", "engine type" : "V6"},
                {"year" : 2018, "make" : "Chevrolet", "model" : "Impala","vin number" : 75895135876,
                "number of doors" : 4, "color" : "black", "engine type" : "V6"},
                {"year" : 2015, "make" : "Dodge", "model" : "Charger","vin number" : 36525135876,
                "number of doors" : 5, "color" : "silver", "engine type" : "V6"}

            ];

     
    var i=0;
    var output = "";

window.onload = function(){
//DOM code goes here

    document.getElementById("button").addEventListener("click",function(){
        onClick(); 
    }); 

}

function onClick()
{
    if (i <jsonCars.length){
        output = JSON.stringify(jsonCars[i++]) + "br>";

    document.getElementById("jsoncars").innerHTML = output;
    }

    else
    {
    document.getElementById("jsoncars").innerHTML = "No more cars to show";
    }
}
