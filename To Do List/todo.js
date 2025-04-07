var taskInput = document.getElementById("inputTask");
var taskContainter = document.getElementById("currentTasks-container")

function createNewTask(taskName){ // Takes in the task name for the new task
    var newItem = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input")
    //Creates the new elements for the task item

    label.innerText = taskName;
    checkbox.type = "checkbox";
    //Style the task

    newItem.append(label);
    newItem.append(checkbox);
    //append the elements to the new item

    return newItem;
}

function addTask(){
    var listItem = createNewTask(taskInput.value);
    taskContainter.appendChild(listItem);
    taskInput.value = "";
    }

