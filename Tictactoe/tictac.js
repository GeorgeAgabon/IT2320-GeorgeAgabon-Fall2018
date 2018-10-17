/*

//orig code
window.onload = function(){

    startGame();
}
function startGame(){
    document.turn ="X";

    setMessage(document.turn + " to start");
}


function setMessage(msg){
    document.getElementById("message").innerText=msg;
}

function MakenextMove(box){
    if (box.innerText ==""){
    box.innerText = document.turn;
    switchTurn();
    }
    else{
        setMessage("Pick another box");
     }
}

function switchTurn(){
    if (document.turn == "X"){
        document.turn ="O";       
    }
    else{
        document.turn ="X";
    }
    setMessage("It's " + document.turn + " turn");
}

function checkWinner(move){
    var result = false;
    if(checkRow(0,1,2, move) ||
       checkRow(3,4,5, move) ||
       checkRow(6,7,8, move) ||
       checkRow(0,3,6, move) ||
       checkRow(1,4,7, move) ||
       checkRow(2,5,8, move) ||
       checkRow(0,4,8, move) ||
       checkRow(2,4,6, move)){
    result = true;
    }
    return result;
}

function checkRow(a, b, c, move){
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("b" + number).innerText;
}
*/


window.onload = function(){

    startGame();
}
function startGame(){
    document.turn ="X";

    setMessage(document.turn + " to start");
}


function setMessage(msg){
    document.getElementById("message").innerText=msg;
}

function MakenextMove(box){
    if (box.innerText ==""){
    box.innerText = document.turn;
    switchTurn();
    }
    else{
        setMessage("Pick another box");
     }
}

function switchTurn(){
    if (document.turn == "X"){
        document.turn ="O";       
    }
    else{
        document.turn ="X";
    }
    setMessage("It's " + document.turn + " turn");
}

function checkWinner(move){
    var result = false;
    if(checkRow(0,1,2, move) ||
       checkRow(3,4,5, move) ||
       checkRow(6,7,8, move) ||
       checkRow(0,3,6, move) ||
       checkRow(1,4,7, move) ||
       checkRow(2,5,8, move) ||
       checkRow(0,4,8, move) ||
       checkRow(2,4,6, move)){
    result = true;
    }
    return result;
}

function checkRow(a, b, c, move){
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("b" + number).innerText;
}