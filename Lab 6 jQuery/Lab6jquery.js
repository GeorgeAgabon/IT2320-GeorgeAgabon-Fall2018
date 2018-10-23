//Lab 6 
//jQuery

alert("Hello and Welcome to JQuery");

$(function(){ 

//1. create  4 div  =working
//5. Append div to "main" div

var div = $("<div></div>").text("1");
$("#main").append(div);

var div = $("<div></div>").text("2");
$("#main").append(div);

var div = $("<div></div>").text("3");
$("#main").append(div);

var div = $("<div></div>").text("4");
$("#main").append(div);

//2. to align divs in a row    =working       
        $("#main div").css({"display": "inline-block"});

//3. add css color black and white  = working
       $("div:odd").css("background-color", "black");
 
//4.  Set each division to each ids
       $("#main div").eq(0).attr("id", "S1");
       $("#main div").eq(1).attr("id", "S2");
       $("#main div").eq(2).attr("id", "S3");
       $("#main div").eq(3).attr("id", "S4");
          
//6. Change color black to green on click of "Change Color"  =working

   $("#chgColor").click(function(){
        $("div:odd").css("background-color", "green");

   });

//7. change div text on click of "Change Text"   = working

    $("#chgText").click(function(){
         $("#S1").prepend("div");
         $("#S2").prepend("div");
         $("#S3").prepend("div");
         $("#S4").prepend("div");
         });

    });  
