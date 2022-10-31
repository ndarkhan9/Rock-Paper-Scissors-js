
function computerPlay()
{
    var arr = ["rock", "paper", "scissors"];
    var choice = arr[Math.floor(Math.random()*arr.length)];
    return choice;
}
let playerScore = 0;
let computerScore = 0;
let result = 0;

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock" && computerSelection=="rock")
    {
        return "Draw!"
    }
    else if(playerSelection == "rock" && computerSelection=="paper")
    {
        computerScore++;
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection == "rock" && computerSelection=="scissors")
    {
        playerScore++;
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection == "paper" && computerSelection=="rock")
    {
        playerScore++;
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection == "paper" && computerSelection=="paper")
    {
        return "Draw!"
    }
    else if(playerSelection == "paper" && computerSelection=="scissors")
    {
        computerScore++;
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection=="rock")
    {
        computerScore++;
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection == "scissors" && computerSelection=="paper")
    {
        playerScore++;
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection == "scissors" && computerSelection=="scissors")
    {
        return "Draw!"
    }
}

function winning ()
{
    if(playerScore==5)
    {
        document.querySelector(".winner").textContent = "YOU WIN THE WAR!";
    }
    if(computerScore==5)
    {
        document.querySelector(".winner").textContent = "BOOO! YOU LOSE...";
    }
}

document.querySelector(".btn").addEventListener("click",function(){
    let rock = "rock";
    let computerSelection = computerPlay();
    document.querySelector(".round").textContent = playRound(rock, computerSelection);
    document.querySelector(".result").textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;   
});

document.querySelector(".btn2").addEventListener("click",function(){
    let paper = "paper";
    let computerSelection = computerPlay();
    document.querySelector(".round").textContent = playRound(paper, computerSelection);
    document.querySelector(".result").textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;   
});

document.querySelector(".btn3").addEventListener("click",function(){
    let scissors = "scissors";
    let computerSelection = computerPlay();
    document.querySelector(".round").textContent = playRound(scissors, computerSelection);
    document.querySelector(".result").textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
});

winning();