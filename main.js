let choice = confirm("Wanna play rock, paper, scissors?");
if (choice) {
  let move = prompt("Enter rock, paper or scissors:");
  if (move) {
    let playerMove = move.trim().toLowerCase();
    if (
      playerMove === "rock" ||
      playerMove === "paper" ||
      playerMove === "scissors"
    ) {
      let computer = Math.floor(Math.random() * 3 + 1);
      let computerMove =
        computer === 1 ? "rock" : computer === 2 ? "paper" : "scissors";
      const result =
        playerMove === computerMove
          ? "Its a tie!"
          : (playerMove === "rock" && computerMove === "scissors") ||
            (playerMove === "scissors" && computerMove === "paper") ||
            (playerMove === "paper" && computerMove === "rock")
          ? `Player: ${playerMove} | Computer: ${computerMove}\nYou win!`
          : `Player: ${playerMove} | Computer: ${computerMove}\nPC wins :(\nBetter luck next time`;
      alert(result);
      let playAgain = confirm("Wanna play again?");
      playAgain ? location.reload() : alert("Ok. See you later.");
    } else {
      alert("Invalid input!");
    }
  } else {
    alert("Empty input");
  }
} else {
  alert("Its a shame :( ");
}
