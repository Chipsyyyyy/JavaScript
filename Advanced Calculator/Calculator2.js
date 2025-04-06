const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; //Append the char of the button to the display
}

function clearDisplay(){
    display.value ="" //Set the display to an empty string when cleared
}

function calculate(){
    try{
        display.value = eval(display.value); //Eval function takes an expression and evaluates it (basically its own calculator)
    }
    catch(error){
        display.value = "Error"; //Throw an error when the expression is not complete
    }
}