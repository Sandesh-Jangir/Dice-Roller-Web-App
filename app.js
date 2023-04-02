// Function to generate random integer between 1 - 6.
const generateDiceNumber = ()=>{
    let number = Math.floor(Math.random()*6) + 1;
    return number;
}

console.log(generateDiceNumber()); // Printing the result