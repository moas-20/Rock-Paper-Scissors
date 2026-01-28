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
//divs
const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
const playContainer = document.querySelector(".play");
;
//the header
const header = document.querySelector("h2");


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
            'error';document.Hlist.style.color = 'green';
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
            if(humanChoice === computerChoice){

                humanScore++;
                
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
        if (rounds == 5) {
            
            rockDiv.style.visibility = 'hidden';
            paperDiv.style.visibility = 'hidden';
            scissorsDiv.style.visibility = 'hidden';

            //creat button for repalay
            const btn = document.createElement("button");
            btn.textContent = "Play";
            btn.style.fontSize = "bold";
            btn.style.backgroundColor = "#3882F6";
            btn.style.width = "30px";
            btn.style.height = "50px";

            playContainer.appendChild(btn);
            btn.addEventListener("click", () =>{
                location.reload();
            })

            // Ending Game
            if(humanScore > computerScore){
                header.textContent = "Winner Winner";
                header.style.color = 'green'

            }
            else {
                header.textContent = "You Lost";
                header.style.color = 'red'
            }

        }
    }
    getHumanChoice(playRound);
};
playGame();