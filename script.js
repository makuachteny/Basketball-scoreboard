// Get the elements for home and guest scores
const homeScoreElement = document.getElementById("home-scroe"); // Corrected ID
const guestScoreElement = document.getElementById("guest-score");

// Function to update scores
function updateScore(team, points) {
  if (team === "home") {
    const currentScore = parseInt(homeScoreElement.textContent);
    homeScoreElement.textContent = currentScore + points;
  } else if (team === "guest") {
    const currentScore = parseInt(guestScoreElement.textContent);
    guestScoreElement.textContent = currentScore + points;
  }
}

// Functions to add different point values
function add1(team) {
  updateScore(team, 1);
}

function add2(team) {
  updateScore(team, 2);
}

function add3(team) {
  updateScore(team, 3);
}

// Reset function
function resetScores() {
    homeScoreElement.textContent = '0';
    guestScoreElement.textContent = '0';
}