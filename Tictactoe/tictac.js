/*
window.onload = function(){

function startGame(){
    documemt.turn = "X";
}

function MakeNextMove(box){
    box.innerText = document.turn;
}


function ResetBoard(){

}

function CheckWinner(){

}

function SetGameStatus(){

}



} //end of onload

*/

var startingBoard;
const mePlayer = "X";
const compPlayer = "O";
const winnCombi =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const box = document.querySelectorAll(".box");
startResetGame();

function startResetGame(){
    //document.querySelector(".gameover").style.display = " ";
    startingBoard=Array.from(Array(9).keys());
    
    for (var i = 0; i<box.length; i++){
        box[i] = innerText = " ";
        box[i].addEventListener("click", turnClick, false);
    }
}

function turnClick(square){
    turn(square.target.id,mePlayer )
}