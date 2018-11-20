var square = document.getElementsByClassName("box");

window.onload = function(){
        alert("Let's Play Tic Tac Toe!!");
    {  
        for(var i = 0;i < square.length;i++)
        {
            square[i].addEventListener("click", function()
            {
            MakeAMove(this);
            }) 
        }
    }

    document.getElementById("startResetGame").onclick = ResetBoard;

function ResetBoard(){
    for(i=0;i<square.length;i++)
        {
            square[i].innerHTML = "";

        document.getElementById("result").innerHTML = "Game on";
        document.getElementById("message").innerHTML = " ";
        }    
    }   


function MakeAMove(square)
{
    if (square.innerHTML == "")
    {               
        square.innerHTML = "X";
        CheckWinner();
        document.getElementById("result").innerHTML = "Pick a box";
        MakeNextMove();
    }
    
    else
    {
        document.getElementById("result").innerHTML = "Pick a box";
    }  
     
}

function MakeNextMove()
{
    for(var i=0;i<square.length;i++)
    {
        if(square[i].innerHTML == "")
        {
            square[i].innerHTML = "O";
            CheckWinner();
            MakeAMove();
        }

        else
        {
            document.getElementById("result").innerHTML = "Pick a box";
        }   
    }
}

function CheckWinner()
    {
         //winningPos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
         //[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        win(document.getElementById('0'), document.getElementById('1'), document.getElementById('2'));
        win(document.getElementById('3'), document.getElementById('4'), document.getElementById('5'));
        win(document.getElementById('6'), document.getElementById('7'), document.getElementById('8'));
        win(document.getElementById('0'), document.getElementById('3'), document.getElementById('6'));
        win(document.getElementById('1'), document.getElementById('4'), document.getElementById('7'));
        win(document.getElementById('2'), document.getElementById('5'), document.getElementById('8'));
        win(document.getElementById('0'), document.getElementById('4'), document.getElementById('8'));
        win(document.getElementById('2'), document.getElementById('4'), document.getElementById('6'));
     
    }

function win(a,b,c)
    {
        if(a.innerHTML == "X" && b.innerHTML == "X" && c.innerHTML == "X")
        {
            setMessage();
            SetGameStatus("User (X)");       
        }

        if(a.innerHTML == "O" && b.innerHTML == "O" && c.innerHTML == "O")
        {
            setMessage();
            SetGameStatus("Computer (O)");   
        }

        else
            return;             
    }
        
function SetGameStatus(winner)
    {
        document.getElementById("result").innerHTML = winner + " wins!";

    }

function setMessage()
    {
        document.getElementById("message").innerHTML= "Congratulations!!!";

    }
}