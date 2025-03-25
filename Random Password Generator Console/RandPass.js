function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){ //Function that passes in the password requirments

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

    if(length <= 0){ //If the passwordLength is <= 0 then produce an error message
        returrn `(Password length must be at least 1)`;
    }
    if(allowedChars.length === 0){ //If all of the requirements are false then produce an error message
        return `(At least one set of characters needs to be selected)`
    }

    for(let i = 0; i < length; i++){ //Iterate over every element of size passwordLength
        const randomIndex = Math.floor(Math.random() * allowedChars.length); //declare a variable to choose a random index from the modified allowedChars variable
        password += allowedChars[randomIndex]; //Concatenate the empty string allowedChars with the randomly chosen index from any of the allowedChars
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); //Call the function to create the password

console.log(`Generated password: ${password}`); //Generate the password
