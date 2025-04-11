//HTML Elements
const gameContainer = document.getElementById("gameContainer");
const rollBtn = document.getElementById("rollDiceBtn");
const rollOutcomeText = document.getElementById("rolls");
const spacesMovedText = document.getElementById("spacesMoved");
const totalsText = document.getElementById("totals")
const cycleText = document.getElementById("cycleCompleted");
const moneyText = document.getElementById("moneyText");
const shopArea = document.getElementById("shop")

//Variables
var dice1;
var dice2;
var total = 0;
var overallTotal = 0;
var rollAmount = 0;
var cycleCounter = 0;
var money = 0;
const stats = [];
const inventory = [];

//Items for the shop
class Items {
    constructor(name, type, cost){
        this.name = name;
        this.type = type;
        this.cost = cost;
    }
}

//Array for the shop items
const items = [ { name: "Sword", type: "Weapon", cost: 100 },
                { name: "Potion", type: "Consumable", cost: 50 },
                { name: "Leather Armor", type: "Armor", cost: 150 }
            ];


//Event Listeners
rollBtn.addEventListener("click", rollDice);
buyBtn.addEventListener("click", buyItem);
exitBtn.addEventListener("click", exitShop);


function rollDice(){
    var result;
    money += 50;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    result = dice1 + dice2;

    overallTotal += result; //For the stats at the end
    total += result;
    rollAmount++;
    
    var sideNumber1 = total.toString().charAt(0);
    var sideNumber = total.toString().charAt(1);
    
    moneyText.textContent = `You have $${money}`;
    rollOutcomeText.textContent = `Your first roll was ${dice1}, your second roll was ${dice2}`;
    spacesMovedText.textContent = `You are at `
    //Side 1 --> A 1 - 10
    if(total <= 9){
        spacesMovedText.textContent += `A${sideNumber1}`;
    }
        
        //Side 2 --> B 1 - 10
    else if(total > 10 && total <= 19){
        spacesMovedText.textContent += `B${sideNumber}`;
    } 

        // //Side 3 --> C 1 - 10
    else if(total > 20 && total <= 29){
        spacesMovedText.textContent +=`C${sideNumber}`;
    }
    
        // //Side 4 --> D 1 - 10
    else if(total > 30 && total <= 39){
        spacesMovedText.textContent += `D${sideNumber}`;
    }

    else if(total === 10){
        spacesMovedText.textContent += `corner 1`;
    }

    else if (total === 20){
        spacesMovedText.textContent += `corner 2`;
    }

    else if(total === 30){
        spacesMovedText.textContent += `corner 3`;
    }
    
    if(total >= 40){
        total = total - 40
        cycleCounter++;
        cycleText.textContent = `You've completed ${cycleCounter} cycles`;
        spacesMovedText.textContent += `A${sideNumber1}`;
        openShop();
    }
    
}

//Shop function when landing on Start Corner

function openShop(){
    if(total === 0){
        spacesMovedText.textContent += `the shop`;
        shopArea.style.visibility = "visible";
    }
}

function buyItem(){
    money -= price;
    inventory.push();
    //Add the item to inventory --> An array of objects
}

function exitShop(){
    shopArea.style.visibility = "hidden";
}

//Corner 1 causes a fight

//Corner 2 gives you bonus gold

//Corner 3 causes 25% heath loss

