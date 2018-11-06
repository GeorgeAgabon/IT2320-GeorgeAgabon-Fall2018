$(function(){
    //$("#wrapperSection1") will be used as a frame of reference
    //parent() 
    //parents() 
    //find()
    
    //siblings()  // examples are sections
     
    //children()
    $("#btn1").on("click",function(){
        console.log($("#wrapperSection1").parent().attr("id"));
        $("#wrapperSection1").parent().css({"color": "pink"});
    });

    $("#btn2").on("click",function(){        
        $("#wrapperSection1").siblings().css({"color": "red"});
    });

    $("#btn3").on("click",function(){
        $("#wrapperSection1").children().css({"color": "cyan"});
    });

    $("#btn4").on("click",function(){
        $("#wrapperSection1").find('*').css({"color": "green"});
    });

    $("#btn5").on("click",function(){
        $("#wrapperSection1").parents("#content").css({"color": "orange"});
    });
        
    // Additional siblings method
    //next 
    $("#next").on("click", function(){
        $("#wrapperSection1").next().css({"background-color": "blue"});
    });

    //nextAll
    $("#nextAll").on("click", function(){
        $("#wrapperSection1").nextAll().css({"color": "green", "background-color": "blue"});
    });

    //nextUntil
    $("#nextUntil").on("click", function(){
        $("#wrapperSection1").nextUntil("#wrapperSection3").css({"background-color": "olive",
    "border": "1px solid black"});
    });
    
    //closest
    $("#closest").on("click", function(){
        $("#wrapperSection1").closest("#container").css({"color" : "green",
                            "border" : "2px solid red"});
    });
    
    //prev
    $("#prev").on("click", function(){
        $("#wrapperSection3").prev().css({"background-color": "orange"});
    });

    //prevAll
    $("#prevAll").on("click", function(){
        $("#wrapperSection3").prevAll().css({"background-color": "pink"});
    });

    //prevUntil
    $("#prevUntil").on("click", function(){
        $("#wrapperSection3").prevUntil("#container").css({"color": "blue", 
        "border": "2px solid purple"});
    });
    
    // use "find" to do this
    //first
    $("#first").on("click", function(){
        $(".wrapper").first().css({"background-color": "yellow"});
    });
    //last
    $("#last").on("click", function(){
        $(".wrapper").last().css({"background-color": "purple", "color": "white"});
    });

    //filter 
    $("#filter").on("click", function(){
        $("p").filter(".para").css({"background-color": "yellow", "color": "blue"});
    });

    //not
    $("#notincluding").on("click", function(){
        $("p").not(".para").css("background-color", "blue");
    });
    
    //slice
    $("#slice").on("click", function(){
        $("p").slice(3).css({"background-color": "pink", "color": "green"});
    });

});

    
    
    function reset()
     
    {
    
        $("#wrapperSection").parent().css("color","black");
    
        $("#wrapperSection").siblings().css("color","black");
    
        $("#wrapperSection").children().css("color","black");
    
        $("#wrapperSection").find("*").css("color","black");
    
    };

