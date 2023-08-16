// Function to update the score for a team
function updateScore(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  let currentScore = parseInt(scoreElement.textContent);
  currentScore += points;
  scoreElement.textContent = currentScore;
}

// Function to add 1 point to a team's score
function add1(team) {
  updateScore(team, 1);
}

// Function to add 2 points to a team's score
function add2(team) {
  updateScore(team, 2);
}

// Function to add 3 points to a team's score
function add3(team) {
  updateScore(team, 3);
}
