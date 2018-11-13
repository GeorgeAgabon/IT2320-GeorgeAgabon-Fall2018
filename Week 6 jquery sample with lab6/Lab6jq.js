//Lab 6
//jQuery

alert("Hello and Welcome");

$(function(){ 

//3. add css color black and white

   $(document).ready(function(){
       ("Background color = " + $("div").css("background-color"));
   });



   //4.  Set each division to each ids

   var div1para = $("#div1para").text();

    $("#div1para").text("div1");


   var div2para = $("#div2para").text();

    $("#div2para").text("div2");


    var div3para = $("#div3para").text();

    $("#div3para").text("div3");


    var div4para = $("#div4para").text();

    $("#div4para").text("div4");




//5. Append the 4 Divs to main

var header = $("#header").text();
$("#header").append(" Division 1 Division 2 Division 3 Division 4");

 });

 //6. Change color black to green on click of "Change Color"

 $(document).ready(function(){
    $("button").click(function(){
        $("#div1, #div3").css("background-color", "green");
 });
    

//7. change div text on click of "Change Text"
    $(document).ready(function(){
        
        $("button").click(function(){
        $ ("#div1, #div2, #div3, #div4").text("div" + id);
        });
});
 });