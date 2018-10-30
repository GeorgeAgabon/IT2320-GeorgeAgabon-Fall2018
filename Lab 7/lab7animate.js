//Lab 7 JQuery Animation

alert("Welcome to JQuery Animation!!!");

$(function(){

    var div = $("<div></div>").text();
    $("#container").append("<div id='box'></div>");

//to create attributes to the big box
    $("div").css({"height": "400px", 
            "width": "400px",
            "background-color" : "lightblue", 
            "border": "1px solid black",
            "position": "absolute"
    });

// to create attributes to small box
    $("#box").css({"height":"50px", 
            "width": "50px",
            "background-color": "red",
            "position": "absolute"
    });

//to move to box downward
    $("#btndown").on("click", function(){
        $("#box").stop().animate({
        top : "350" }, 4000);
    });

//to move the box upward
    $("#btnup").on("click", function(){
    $("#box").stop().animate({
        top : "0" }, 4000);
    });

//to move the box to the right
    $("#btnright").stop().on("click", function(){
        $("#box").animate({
        left : "350"}, 4000);
    });

//to move the box to the left
    $("#btnleft").stop().on("click", function(){
        $("#box").animate({
        left : "0" }, 8000);
    });

//to fadeout the box
    $("#btnfadeout").on("click", function(){        
        $("#box").fadeOut(3000);
    });

//to fadein the box
    $("#btnfadein").on("click", function(){        
        $("#box").fadeIn(4000);
    });

//to stop the box
    $("#btnstop").on("click", function(){        
        $("#box").stop();
    });

//to make the box blink
    var style = setInterval(setStyle, 600);
    function setStyle(){
        $("#btnblink").on("click", function(){
        if ($("#box").fadeOut())
            $("#box").fadeIn();
        else 
         $("#box").fadeOut();
    });
 
    };

// to reset the button
    $("#reset").on("click", function(){
        clearInterval(style);
        $("#box").finish().css({"top": "0",
        "left" :  "0"});
    });
    

});