$(function(){

    //jQuery code goes here  
        $("#btn1").on("click", function(){  
             
            var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="
                        +$("#photosearch").val();   
           $.ajax({  
               url: url,             
               type: "GET",    
               dataType: "jsonp",   //needed for CORS          
               contentType: "application/json; charset=utf-8",   
               crossDomain: true,                       
               success: function(data){  
                  console.log(data);  
                  $("#flikrresults").html(" ");              
                  $.each(data.items, function(i, item){                  
                    var img = $("<img></img>");   
                    img.attr("src",item.media.m);   
                    $("#flikrresults").append(img);    
                  });                
               }  
             });   
        });  
    
        $("#btn2").on("click", function(){    
            //Go to https://www.petfinder.com/developers/api-key to get an api key    
            //Add the API key to the URL    
            //PetFinder API Key 551b527add03634ac3a95a7a967367e6   
            //PetFinder API Secret 6a5a2731d31fb44b2d2303c7686c5278
    
            const key = "287fcc008988c1952742cc2b98d9445a"; //this is my own key              
            var animal = $("#breedsearch").val();    
            var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+animal+"&format=json";   
           $.ajax({   
               url: url,              
               type: "GET",     
               dataType: "jsonp",   //needed for CORS          
               contentType: "application/json; charset=utf-8",   
               crossDomain: true,                      
               success: function(data){                 
                  console.log(data);    
                  $("ul").remove();    
                  var ul = $("<ul>Breeds</ul>");    
                  $("#breedresults").after(ul);
       
                  $.each(data.petfinder.breeds.breed,function(i,breed){                      
                        var li = $("<li></li>").text(breed.$t);    
                        $("ul").append(li);
    
                  });                         
                }                                
             });  //ajax 
    
        });  //btn click
        
// this is the assignment
        $("#petfindresult").on("click", function(){

            const key = "287fcc008988c1952742cc2b98d9445a"; //this is my key              
            var animal2 = $("#search2").val();
            var breed2 = $("#breedsearch2").val();
            var size2 = $("#sizesearch2").val();
            var sex2 = $("#sexsearch2").val();
            var location2 = $("#locationsearch2").val();
            var url = "http://api.petfinder.com/pet.find?&format=json&key="+key+"&callback=?&animal="+animal2+
                        "&breed="+breed2+"&size="+size2+"&sex="+sex2+"&location="+location2;

            $.ajax({   
                url: url,              
                type: "GET",     
                dataType: "jsonp",   //needed for CORS          
                contentType: "application/json; charset=utf-8",   
                crossDomain: true,                      
                success: function(data){
                   console.log(data);
                   $("ul").remove();    
               
                   var ul = $("<ul>Animal:</ul>");    
                   $("#results2").after(ul);

                   $.each(data.petfinder.pets.pet,function(i,item)
                   {                      
                    var li = $("<p></p>").text(item.animal.$t);    
                    $("ul").append(li);
                    var li = $("<p></p>").text(item.id.$t);    
                    $("ul").append(li);
                    var li = $("<p></p>").text(item.description.$t);    
                    $("ul").append(li);
                    var li = $("<p></p>").text(item.name.$t);    
                    $("ul").append(li);
                   }
                 );
             }
        });

    });
});  