const display = document.getElementById("display"); //Declare an element to access the Display in the HTML file
let timer = null; //Declare a timer object
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){ //If the timer is not running
        startTime = Date.now() - elapsedTime;  //Set the start time value to be the time since time began (in milliseconds) - elapsedTime
        timer = setInterval(update, 10);
        isRunning = true; //Set the isRunning value to true to show that the stopwatch is running    
    }
    
}

function stop(){
    if(isRunning){
        clearInterval(timer); //Clear the timer
        elapsedTime = Date.now() - startTime; // Find out the elapsed time by subtact the current time by the stat time
        isRunning = false; //Set the isRunning back to false
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0; //Hard code all the values back to 0 to reset the timer
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const curentTime = Date.now(); //Time since the world began in milliseconds
    elapsedTime = curentTime - startTime; //elapsed time is in milliseconds

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //convert the milliseconds into hours
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //convert the milliseconds into minutes
    let seconds = Math.floor(elapsedTime / 1000 % 60); //convert the milliseconds into seconds
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); //set the milliseconds to 2 dp

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milliseconds = milliseconds.toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`; //Display the stopwatch timer

}