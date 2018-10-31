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
        $("#wrapperSection1").next().css({"color": "orange"});
    });
    //nextAll
    $("#nextAll").on("click", function(){
        $("#wrapperSection1").nextAll().css({"color": "green"});
    });
    //nextUntil
    $("#nextUntil").on("click", function(){
        $("#wrapperSection1").nextUntil("#wrapperSection3").css({"background-color": "olive",
    "boder": "1px solid black"});
    });
    //closest
    
    
    
    //prev
    //prevAll 
    //prevUntil
    
    
    // use "find" to do this
    //first
    //last
    //filter 
    //not
    
    
    
    //slice
    
    
    
    })
    
    
    
    function reset()
    
    {
    
        $("#wrapperSection").parent().css("color","black");
    
        $("#wrapperSection").siblings().css("color","black");
    
        $("#wrapperSection").children().css("color","black");
    
        $("#wrapperSection").find("*").css("color","black");
    
    }