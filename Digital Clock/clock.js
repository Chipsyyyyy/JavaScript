function updateClock(){
    const now = new Date(); //Declare a new Date object
    let hours = now.getHours(); // Declare a variable to grab the hours
    const meridiem = hours >= 12 ? "PM" : "AM"; //Declare a variable to test if the time is AM or PM and display that information
    hours = hours % 12 || 12; //Change the value of hours to the remainder of the current hour divided by 12 e.g., 16/12 has remainder 4, or if it is 0 then change the value to 12
    hours = hours.toString().padStart(2, 0) //The padStart method is used to add a 0 in front of the numbers if it is a single digit
    const minutes = now.getMinutes().toString().padStart(2, 0); 
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`; //declare a string that will show the time
    document.getElementById("clock").textContent = timeString; //Display the time on the clock
}

updateClock();
setInterval(updateClock, 1000) //setInterval repeatedly calls a function every time interval set