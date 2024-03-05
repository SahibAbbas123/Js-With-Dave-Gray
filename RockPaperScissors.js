//let's play
let choice = confirm("Wanna play rock, paper, scissors?");
if (choice) {
  //khelbo
  while (choice) {
    let playerMove = prompt("Enter rock, paper or scissors:");
    if (playerMove || playerMove === "") {
      playerMove = playerMove.trim().toLowerCase();
      if (
        playerMove === "rock" ||
        playerMove === "paper" ||
        playerMove === "scissors"
      ) {
        let computerChoice = Math.floor(Math.random() * 3);
        let moveArray = ["rock", "paper", "scissor"];
        let computerMove = moveArray[computerChoice];
        const result =
          playerMove === computerMove
            ? "Its a tie!"
            : (playerMove === "rock" && computerMove === "scissors") ||
              (playerMove === "scissors" && computerMove === "paper") ||
              (playerMove === "paper" && computerMove === "rock")
            ? `Player: ${playerMove} | Computer: ${computerMove}\nYou win!`
            : `Player: ${playerMove} | Computer: ${computerMove}\nPC wins :(\nBetter luck next time`;
        alert(result);
        choice = confirm("Wanna play again?");
        if (!choice) alert("See you next time!");
      } else {
        alert("Invalid input!");
      }
    }else{
      alert("See you next time!");
      break;
    }
  }
} else {
  alert("Its a shame :( ");
}
