var taskInput = document.getElementById("inputTask");
var taskContainer = document.getElementById("currentTasks-container");
var running = true;
    
function createNewTask(taskName){ // Takes in the task name for the new task
    var newItem = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    //Creates the new elements for the task item

    label.innerText = taskName;
    checkbox.type = "checkbox";
    newItem.classList = "tasks";
    //Style the task

    newItem.append(label);
    newItem.append(checkbox);
    //Append the elements to the new item

    return newItem;
}

function addTask(){
    var listItem = createNewTask(taskInput.value);
    taskContainer.appendChild(listItem);
    taskInput.value = "";
}

// function removeTask(){
    
//     var currentTasks = taskContainer.querySelectorAll("li");    
//     for (let i = 0; i < currentTasks.length; i++){
//         if (currentTasks[i].checked === true){
//             taskContainer.removeChild(currentTasks[i]);
//             taskContainer = document.getElementById("currentTasks-container");
//             console.log(taskContainer); 
//         }
//     }

// }

function removeTask() {
    const currentTasks = taskContainer.querySelectorAll("li");
    // Loop backward to avoid index shifting issues
    for (let i = currentTasks.length - 1; i >= 0; i--) {
        const task = currentTasks[i];
        const checkbox = task.querySelector('input[type="checkbox"]');
        
        if (checkbox && checkbox.checked) {
            taskContainer.removeChild(task);
        }
    }
}
