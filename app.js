// Function to generate random integer between 1 - 6.
const generateDiceNumber = () => {
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
};

// JS Object used to get track of DOM id's with the help of generated numbers
const domIdDict = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

let gameStarted = false; // Flag to used for removing the "initial-message".
// Handling the generate button click.
const handleGenerateAction = () => {
  if (!gameStarted) { // Removing the "initial-message" in the first click.
    gameStarted = true;
    document.getElementById("initial-message").style.display = "none";
  }
  // Setting all other dice faces to display = "none";
  for (const id in domIdDict) {
    document.getElementById(domIdDict[id]).style.display = "";
  }
  // Displaying the Generated Dice.
  let generatedNumber = generateDiceNumber();
  document.getElementById(domIdDict[generatedNumber]).style.display = "block";
};
