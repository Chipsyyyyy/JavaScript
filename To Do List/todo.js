const userInput = document.getElementById("inputTasks").value;
const result = document.getElementById("resultText");

function addTask(){
    // Check whether the user has inputted a string
    const userInput = document.getElementById("inputTasks").value;
    const result = document.getElementById("resultText");
    // If not, send a window.error message
    
    if(typeof(userInput) !== "string"){
        window.alert("Please input a String");
    }
    
    //If there is no user input && they have a task checked also send a window.error message
    
    else if(typeof(userInput) === null && ){
        window.alert("You cannot add a task that is already there!");
    }
    
    // If it is, Add a new checkbox
    // Add a label for the new checkbox
    
    else{
        document.createElement();
        document.createElement();
        result.textContent = "Task Successfully Added";
    }

   
}

function removeTask(){
    // Check whether a checkbox is selected && if there are any checkboxes at all
    // If not, send a window.error message

    if(){
        window.Error("Please select a task you want to remove");
    }
    else if (){
        window.Error("You have to add tasks before you can remove them");
    }

    // Remove the task from the page
    else{

        result.textContent = "Task successfully removed";
    }
    // If a task is not checked && there is user input, send a window.error message
}

function clearAll(){
    // Get the list of tasks and clear it
    // document.getElementsByClassName()
}

