// console.log("welcome to Rock-Paper-Scissors Game!");


// function getHumanChoice(){
//     let choice = prompt("Choice one from : Rock , Paper , Scissors")
//     let answer = choice.toLowerCase();
//     return answer;
// };

// function getComputerChoice(){
//     let choice = Math.floor(Math.random() * 3 + 1);
//     switch (choice) {
//         case 1:
//             return "rock"
//         case 2:
//             return 'paper'
//         case 3:
//             return 'scissors'
//         default:
//             'error';
//     }
// };


// function playGame(){
    

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice , computerChoice){

//         if(humanChoice == computerChoice){
//             console.log('Your choice: ' + humanChoice + ' '+ 
//                         'Copmuter choice: ' + computerChoice
//             );
//             console.log('We have Draw!');
//             humanScore++;
//             computerScore++;
//         }

//         else if(humanChoice == 'rock' && computerChoice
//             == 'paper'|| computerChoice == 'scissors')
//         {
//             console.log('Your choice: ' + humanChoice + ' ' + 
//                 'Copmuter choice: ' + computerChoice
//             );
//             console.log('You Win!');
//             humanScore++;
//         }

//         else if(computerChoice == 'rock' && humanScore
//             == 'paper'|| humanChoice == 'scissors')
//         {
//             console.log('Your choice: ' + humanChoice + ' ' + 
//                 'Copmuter choice: ' + computerChoice
//             );
//             console.log('You lost!');
//             computerScore++;
//         }

//         else if(humanChoice == 'paper' && computerChoice
//             == 'scissors' || computerChoice == 'rock')
//         {
//             console.log('Your choice: ' + humanChoice + ' ' + 
//                 'Copmuter choice: ' + computerChoice
//             );
//             console.log('You lost!');
//             computerScore++;
//         }

//         else if( humanChoice == 'scissors' && computerChoice
//             == 'paper' || computerChoice != 'rock')
//         {
//             console.log('Your choice: ' + humanChoice + ' ' + 
//                 'Copmuter choice: ' + computerChoice
//             );
//             console.log('You Win!');
//             humanScore++;
//         }
        
//     };

    
//     console.log('Your Score: ' + humanScore + " <****> " + "Robot score: " + computerScore );
     

// };
// playGame();


// select elements that we need
const list = document.querySelector("ul");
// pc & player img
const manPic = document.querySelector("#manPic");
const pcPic = document.querySelector("#pcPic");
//score
const score = document.querySelector(".score");
//buttons
const rock = document.querySelector(".rock button");
const paper = document.querySelector(".paper button");
const scissors = document.querySelector(".scissors button");
// imgs
const rockImg = document.querySelector(".rock img");
const paperImg = document.querySelector(".paper img");
const sciImg = document.querySelector(".scissors img");


// handling user choice


function getHumanChoice(){
    rock.addEventListener("click",() => {
        manPic.src = rockImg.src;
    });
    
    paper.addEventListener("click", () =>{
        manPic.src = paperImg.src;
    });
    
    scissors.addEventListener("click",() =>{
        manPic.src = sciImg.src;
    });
};
getHumanChoice();







// handling computer choice
