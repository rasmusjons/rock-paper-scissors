


let result = "";
let winCounter = 0;
let looseCounter = 0;
let drawCounter = 0;
let playerSelection = "";
let computerSelection = "";
let matchWinner = "";

var btn = document.querySelector("#btnRock");
var btn2 = document.querySelector("#btnPaper");
var btn3 = document.querySelector("#btnScissors");

btn.addEventListener('click', function () {
  playerSelection = "rock";
  game();
})



btn2.addEventListener('click', function () {
  playerSelection = "paper";
  game();
})


btn3.addEventListener('click', function () {
  playerSelection = "scissors";
  game();
})










function displayPlayerItem(playerSelection) {
  const container = document.querySelector("#score")
  const content = document.createElement('div');
  content.classList.add('itemPlayer');
  content.textContent = playerSelection;
  container.appendChild(content);

}


function displayComputerItem() {
  const container2 = document.querySelector("#score")
  const itemComputer = document.createElement('div');
  itemComputer.classList.add('itemComputer');
  itemComputer.textContent = computerSelection;
  container2.appendChild(itemComputer);

}





function wins() {

  const container = document.querySelector("#wins")
  container.textContent = winCounter;
}


function loose() {

  const container = document.querySelector("#loose")
  container.textContent = looseCounter;
}








function game() {


  //getSeletions();
   playRound(playerSelection, computerPlay());
  if (matchWinner === "you" || matchWinner === "computer"){
      document.querySelectorAll('#headlineGameover').forEach(function (a) {
      a.remove();
      })
      document.querySelectorAll('#winnerImage').forEach(function (a) {
        a.remove()
      })  
      document.querySelectorAll('#defeatImage').forEach(function (a) {
        a.remove()
      })  
    }  
  
  displayPlayerItem(playerSelection);
  displayComputerItem();

  if (result == "win") {
    winCounter++;
    wins();
    console.log("Your Score " + winCounter);
    console.log("Computer Score " + looseCounter);
    console.log(" ");


  } else if (playRound(playerSelection, computerPlay()) == "loose") {
    looseCounter++;
    loose();
    console.log("Your Score " + winCounter);
    console.log("Computer Score " + looseCounter);
    console.log(" ");

  } else {
    drawCounter++;
    console.log("Draws: " + drawCounter);
    console.log(" ");
  }

  getMatchWinner();

}


function getMatchWinner() {
  if (winCounter === 3) {
    matchWinner = "you";
    console.log("Congratulations! You win with a score of " + winCounter);
    newGame();
  }
  if (looseCounter === 3) {
    matchWinner = "computer";
    console.log("Too bad! You loose");
    newGame();
  }



}


function newGame() {
  winCounter = 0;
  looseCounter = 0;

  const headline = document.createElement('h3');
  const container = document.querySelector("#score");
  let img = new Image();
  img.src = "./img/youWon.png"
  img.setAttribute('id', 'winnerImage');
  let defeatImg = new Image();
  defeatImg.src = "./img/kitty.png"
  defeatImg.setAttribute('id', 'defeatImage');

  headline.setAttribute('id', 'headlineGameover');


  document.querySelectorAll('.itemPlayer').forEach(function (a) {
    a.remove()
  })
  document.querySelectorAll(".itemComputer").forEach(function (a) {
    a.remove()
  })
  if (matchWinner === "you") {
    headline.textContent = "You Win!"
    container.appendChild(img);
    container.appendChild(headline);
  } else {
    headline.textContent = "Defeat!"
    container.appendChild(defeatImg);
    container.appendChild(headline);

  }



}


function getSelections() {

  return (playerSelection, computerPlay());

}






function computerPlay() {
  let random = Math.random();
  if (random < (1 / 3)) {
    computerSelection = "rock";
    return "rock";
  } else if (random > (1 / 3) && random < (2 / 3)) {
    computerSelection = "paper";
    return "paper";
  } else if (random > (2 / 3)) {
    computerSelection = "scissors";
    return "scissors";
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    playerRock(playerSelection, computerSelection);
  }
  if (playerSelection === "paper") {
    playerPaper(playerSelection, computerSelection);
  }
  if (playerSelection === "scissors")
    playerScissors(playerSelection, computerSelection);


  return result;


}


function playerRock(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "win";

  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "loose";
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    result = "draw";

  }
  if (result == "loose") {

    return result;

  }
}


function playerPaper(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = "win";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "loose";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    result = "draw";
  }

  return result;
}


function playerScissors(playerSelection, computerSelection) {
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "win";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "loose";
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    result = "draw";
  }

  return result;
}


