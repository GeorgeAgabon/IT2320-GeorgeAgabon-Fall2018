var cell = document.getElementsByClassName("box");

window.onload = function(){
        alert("Let's Play Tic Tac Toe!!");
    {  
        for(var i = 0;i < cell.length;i++)
        {
            cell[i].addEventListener("click", function()
            {
            MakeATurn(this);
            }) 
        }
    }

    document.getElementById("startResetGame").onclick = ResetBoard;

function ResetBoard(){
    for(i=0;i<cell.length;i++)
        {
        cell[i].innerHTML = "";

        document.getElementById("result").innerHTML = "Game on";
        document.getElementById("message").innerHTML = " ";
        }    
    }   
}

function MakeATurn(cell)
{
    if (cell.innerHTML == "")
    {               
        cell.innerHTML = "X";
        CheckWinner();
        MakeNextMove();
    }

    else
    {
        document.getElementById("result").innerHTML = "Pick a box";
    }   
}

function MakeNextMove()
{
    for(var i=0;i<cell.length;i++)
    {
        if(cell[i].innerHTML == "")
        {
        cell[i].innerHTML = "O";
        CheckWinner();
        PlayerMove();
        computerMove();
        }
    }
}

function computerMove()
    {
        var emptyCells =[];
        var random;
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
