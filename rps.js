
function getComputerChoice()
{
    let arr = ["rock","paper", "scissors"]
    let choice = arr[Math.floor(Math.random()*arr.length)]
    return choice
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock" && computerSelection=="rock")
    {
        return "Draw!"
    }
    else if(playerSelection == "rock" && computerSelection=="paper")
    {
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection == "rock" && computerSelection=="scissors")
    {
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection == "paper" && computerSelection=="rock")
    {
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection == "paper" && computerSelection=="paper")
    {
        return "Draw!"
    }
    else if(playerSelection == "paper" && computerSelection=="scissors")
    {
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection=="rock")
    {
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection == "scissors" && computerSelection=="paper")
    {
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection=="scissors")
    {
        return "Draw!"
    }
}

function playerSelection()
{
    let input = prompt("Enter rock, paper or scissors: ")
    return input;
}


function game()
{
    let win = 0;
    let lose = 0;
    let draw = 0;
    for(let i=0;i<5;i++)
    {
        comp = getComputerChoice();
        player = playerSelection();
        result = playRound(player,comp);
        if(result.includes("You Win"))
        {
            win += 1
            console.log(result)
            console.log("Win: ", win);
            
        }
        else if(result.includes("You Lose"))
        {
            lose +=1;
            console.log(result)
            console.log("Lose: ", lose)
        }
        else if(result.includes("Draw"))
        {
            draw +=1;
            console.log(result)
            console.log("Draw: ", draw)
        }

    }
    
    console.log("Win: "+ win +" "+ "Lose: "+ lose +" " + "Draw: " + draw)
}


game();

