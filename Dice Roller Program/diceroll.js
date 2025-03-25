

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value; //Get value of user input
    const diceResult = document.getElementById("diceResult"); // Access the text "Dice Result" in the HTML
    const diceImages = document.getElementById("diceImages"); // Access the images section of the HTML
    const values = []; // Declare an array for the stored Dice Values
    const images = [];  //Declare an array to display the images of the dice faces

    for(let i = 0; i < numOfDice; i++){ // Iterate over the size/value of the user input
        const value = Math.floor(Math.random() * 6) + 1;    // Generate the dice result with a random number between 1 and 6
        values.push(value); //Insert the result of the dice roll into the array of results
        images.push(`<img src="Dice Roller Images/${value}.png" alt="Dice ${value}">`) // Insert the images of the corresponding dice result into the array
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`; // Write the dice results from the value array into strings by joining them with a ',' and a white space
    diceImages.innerHTML = images.join(''); // Separate the images and print them out separated by a white space
}