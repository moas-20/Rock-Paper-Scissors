// <<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //


// select elements that we need
// pc & player img
const manPic = document.querySelector("#manPic");
const pcPic = document.querySelector("#pcPic");
//score
const Hscore = document.querySelector(".score");

//buttons
const rock = document.querySelector(".rock button");
const paper = document.querySelector(".paper button");
const scissors = document.querySelector(".scissors button");
// imgs
const rockImg = document.querySelector(".rock img");
const paperImg = document.querySelector(".paper img");
const sciImg = document.querySelector(".scissors img");


// handling user choice

function getHumanChoice(callbac){
    rock.addEventListener("click",() => {
        manPic.src = rockImg.src;
        callbac('rock');
    });
    
    paper.addEventListener("click", () =>{
        manPic.src = paperImg.src;
        callbac('paper');
    });
    
    scissors.addEventListener("click",() =>{
        manPic.src = sciImg.src;
        callbac('scissors');
    });
    
};


// handling computer choice
// should work only when user press a button
function getComputerChoice(){
    
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice) {
        case 1: // rock
            pcPic.src = rockImg.src;
            return 'rock';
        case 2: // paper
            pcPic.src = paperImg.src;
            return 'paper'
        case 3: // scissors
            pcPic.src = sciImg.src;
            return 'scissors'
        default:
            'error';
    }  
};


const Hlist = document.querySelector("#hl");
const Clist = document.querySelector("#cl");



function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    


    function playRound(humanChoice){
        if (rounds < 5) {
            const computerChoice = getComputerChoice();
            if(humanChoice == computerChoice){

                humanScore++;
                computerScore++;
            } 
    
            if((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')
               )
            {
                humanScore++;
            }
    
            else {
                computerScore++;
            }
    
            Hlist.textContent = humanScore;
            Clist.textContent = computerScore;
            rounds++;
            
            
            
        };
    }
    getHumanChoice(playRound);
  
};
playGame();