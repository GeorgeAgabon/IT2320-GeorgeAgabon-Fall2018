$(function(){

    // Final Project Part 2 #1

    $("#findshelter").on("click", function(){

        const key = "287fcc008988c1952742cc2b98d9445a"; //this is my key              
 
        var shelter = $("#shelter").val();
        var sheltercity = $("#sheltercity").val();
        var shelterstate = $("#shelterstate").val();
        var sheltercountry = $("#sheltercountry").val();
        var url = "http://api.petfinder.com/shelter.find?&format=json&key="+key+"&callback=?&animal="+"&location="+shelter+
        "&city="+sheltercity+"&state="+shelterstate+"&country="+sheltercountry+"&phone="+"&email";

        $.ajax({   
            url: url,              
            type: "GET",     
            dataType: "jsonp",   //needed for CORS          
            contentType: "application/json; charset=utf-8",   
            crossDomain: true,                      
            success: function(data){
               console.log(data);
               $("ul").remove();    
           
               var ul = $("<ul>Shelter:</ul>");    
               $("#results3").after(ul);

               $.each(data.petfinder.shelters.shelter,function(i,item)
               {                      
                var li = $("<p></p>").text(item.id.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.name.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.city.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.state.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.country.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.zip.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.phone.$t);    
                $("ul").append(li);
                var li = $("<p></p>").text(item.email.$t);    
                $("ul").append(li);
 
               }
             );
           }
       });
    });

    
// Final Project Part 2 #2

$("#findshelteranimal").on("click", function(){

    const key = "287fcc008988c1952742cc2b98d9445a"; //this is my key              
    var animalshelter = $("#shelterID").val();
    var url = "http://api.petfinder.com/shelter.getPets?&format=json&key="+key+"&callback=?&id="+animalshelter+
    "&shelterPetId="+"&animal="+"&name="+"&age="+"&contact="+"&description=";

    $.ajax({   
        url: url,              
        type: "GET",     
        dataType: "jsonp",   //needed for CORS          
        contentType: "application/json; charset=utf-8",   
        crossDomain: true,                      
        success: function(data){
           console.log(data);
           $("ul").remove();    

           var ul = $("<ul>Animals on Shelter:</ul>");    
           $("#results4").after(ul);

           $.each(data.petfinder.pets.pet,function(i,item)
           {                      
            var li = $("<p></p>").text(item.shelterPetId.$t);    
            $("ul").append(li);
            var li = $("<p></p>").text(item.animal.$t);    
            $("ul").append(li);
            var li = $("<p></p>").text(item.name.$t);    
            $("ul").append(li);
            var li = $("<p></p>").text(item.age.$t);    
            $("ul").append(li);
            var li = $("<p></p>").text(item.contact.$t);    
            $("ul").append(li);
            var li = $("<p></p>").text(item.description.$t);    
            $("ul").append(li);
           }
         );
       }
    });
  });
});
