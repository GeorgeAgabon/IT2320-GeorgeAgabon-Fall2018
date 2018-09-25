function Generate(){
    var a, b, result;
    a = 0;
    b = 1;
    result = b;

    for (var i = 1; i <= 20; i++) {     
        result = a + b;
        a = b;
        b = result;
        document.getElementById("output").innerHTML += result + " ";
    }
}
function Reset(){
    document.getElementById("output").innerHTML= " ";
}
