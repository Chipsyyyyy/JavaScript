

function generatePassword(){ //Function that passes in the password requirments
    const passwordLength = document.getElementById("passwordLength").value; //Reference the password length input
    const passwordResult = document.getElementById("myResult"); //Reference the generated texted
    const includeLowercase = document.getElementById("lowercase").checked; //Reference the lowercase check box
    const includeUppercase = document.getElementById("uppercase").checked; //Reference the uppercase check box
    const includeNumbers = document.getElementById("numbers").checked; //Reference the numbers check box
    const includeSymbols = document.getElementById("symbols").checked; //Reference the symbols check box
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; //The available lowercase letters to choose from
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //The available uppercase letters to choose from
    const numberChars = "012356789"; //The available numbers to choose from
    const symbolChars = "!@@#$%^&*()_-+="; //The available symbols to choose from

    let allowedChars = ""; //Declare a varaible to test if a requirement is selected
    let password = ""; //Declare the empty password

    allowedChars += includeLowercase ? lowercaseChars : ""; //If any of the following 4 lines of code are set to true, the empty string allowedChars is populated 
    allowedChars += includeUppercase ? uppercaseChars : ""; //with the strings from the selected cases.
    allowedChars += includeNumbers ? numberChars : ""; 
    allowedChars += includeSymbols ? symbolChars : ""; 

    if(passwordLength <= 0){ //If the passwordLength is <= 0 then produce an error message
        returrn `(Password length must be at least 1)`;
    }
    if(allowedChars.length === 0){ //If all of the requirements are false then produce an error message
        return `(At least one set of characters needs to be selected)`
    }

    for(let i = 0; i < passwordLength; i++){ //Iterate over every element of size passwordLength
        const randomIndex = Math.floor(Math.random() * allowedChars.length); //declare a variable to choose a random index from the modified allowedChars variable
        password += allowedChars[randomIndex]; //Concatenate the empty string allowedChars with the randomly chosen index from any of the allowedChars
    }
    
    passwordResult.textContent = `Generated password: ${password}`;
    return password;
}

//When using HTML, it is unable to use parameters as the elements needed for the generator need to be declared within the function
//Thus removing the need to call the function from outside and include parameters. The version with no HTML elements includes parameters
//Within the method.
