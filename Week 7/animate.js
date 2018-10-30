
$(function(){



    //hide & show + Toggle

    //#1 when i click on h1 i want to hide the 3 divs

    $("#1").on("click",function(){

        //$(this).siblings().hide();

        $(this).siblings().toggle(5000,function(){

          console.log("the divs are toggled");

        });

    });



    //#2 when i click on h1 i want to show all the 3 divs

    $("#2").on("click",function(){

        //$(this).siblings().show();

        $(this).siblings().toggle(4000);

    });



    

    //slideUp slideDown slideToggle

    $("#3").on("click",function(){        

        //$(this).siblings().slideUp();

        $(this).siblings().slideToggle(3000);

    });



    $("#4").on("click",function(){        

        $(this).siblings().slideDown(6000);

    });



    //fadeIn fadeOut,   fadeToggle

    $("#5").on("click",function(){        

        //$(this).siblings().fadeOut();      //totally gone

        $(this).siblings().fadeToggle(5000);  //fade slowly

       

    });
    // fade in
    $("#6").on("click",function(){        

        $(this).siblings().fadeIn(5000);

       

    });





    //chaining

    $("#7").on("click",function(){        

        $(this).siblings().show(500).hide(1000).fadeIn(500).fadeOut(1000);

       

    });



    //stop

    $("#btnStop").on("click",function(){

        $("h1").siblings().stop();        

    });

    

    //animate

    $("#btn1").on("click",function(){       

        



        $("#box").animate({

            width: "100px",

            height: "100px",

            opacity: 0.75,           

            fontSize: "1.5em"

        },5000);

        

        //queueing => multiple animations on a single element

        $("#box").animate({            

            width: "500px",

            height: "500px",

            opacity: 0.90,           

            fontSize: "1em"

        },500);       



        //queueing => multiple animations on a single element

        $("#box").animate({            

            width: "100px",

            height: "100px",

            opacity: 0.70,           

            fontSize: "1.5em"

        },5000);  



        //animate with call back function

        $("#box").animate({

            left: "250px",

            top: "250px"

        },5000,function(){

            $(this).css({"background-color": "red"});

        });

       

    });    



});


/*
    //my copy
$(function(){

//hide and show + toggle
$("#1").on("click").function(){
    $(this).siblings().toggle("slow");
    //$(this).siblings().hide();
};

$("#2").on("click").function(){
    (this).siblings().toggle("slow");
}

$("#3").on("click").function(){
    (this).siblings().slideToggle("3000");

$("#4").on("click").function(){
        (this).siblings().toggle("slow");

$("#5").on("click").function(){
            (this).siblings().fadeToggle();
        };

$("#6").on("click").function(){
                (this).siblings().fadeIn();
    };

//chaining

$("#7").on("click", function(){
    $("this").siblings().hide(5000)
                        .fadeIn(2000)
                        .slideDown(3000)
                        .hide(5000);
});


//stop

$("#btnstop").on("click", function(){
    $("div").stop();  //stops at div
    $("#box").stop();
})

//animate
$("#btn1").on("click", function(){
    $("#box").animate({
        width: "100px",
        height: "100px"
    }, 10000, function(){
        $("#box").css("background-color": "yellow");
    });

    //snimate with call back function
    $("#box").animate({
        left: "+=250px"
    },2000, function(){
        $(this).css({"background-color": "red"});
    });

    $("#box").animate({"border-radius": "50px"},2000);      




}); */