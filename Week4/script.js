//1.  hello function
console.log(hello());

function hello()
    {
        return "hello";
    }


window.onload = function(){
//Dom code goes here


//3. changed div content
document.getElementById("div1").innerHTML = "This is the new div content";


//4. changed div background color
document.getElementById("div1").style.backgroundColor="orange";


//5. changed all paragraph background color
var pararray = document.getElementsByTagName("p");

for(i=0;i<pararray.length;i++)

{
     pararray[i].style.backgroundColor = "yellow";
}




//6. changed the onclick button
 
document.getElementById("btn1").onclick =displayMessage;

function displayMessage()
{

document.getElementById("btn1").innerHTML = " You clicked me";

}  


//7. 


// 8. div changed color when button is clicked
 
document.getElementById("btn1").onclick =divaddcolor;

function divaddcolor(){
var divaddcolor = document.getElementsByClassName("blue");

for(i=0;i<divaddcolor.length;i++)

{
     divarray[i].style.backgroundColor = "blueviolet";
}
}


// 9. add border to div when button is clicked

document.getElementById("btn1").onclick =divborder;

function divborder(){
var divborder = document.getElementsByClassName("blue");

for(i=0;i<divborder.length;i++)

{
     divborder[i].style.border = "double"; 
     
}
}

 
//10 Click button changes on mouseon and mouseoff

document.getElementById("btn1").addEventListener("mouseover", function(){
    mouseover(this);
});

document.getElementById("btn1").addEventListener("mouseout", function(){
    mouseout(this);
})

function mouseover (obj){
    obj.innerHTML = "Mouseover";
}

function mouseout(obj){
    obj.innerHTML="Click me!";
}


}  // end of dom code




//2. calculate function
console.log(calculate(20));
console.log(calculate(5));


function calculate(x) 
{
    if (x>10)
        return x+2;
    else  
        return x+4;
}

//3. function add
console.log(add());

function add()
{
    var x = 0;
    for ( var i=1; i<=10; i++)
    {
        x+=i;
    }
        return x;
}

  







