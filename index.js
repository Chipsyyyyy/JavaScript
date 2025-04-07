const newListItem = document.createElement("li");

newListItem.textContent = "Coconut";
newListItem.id = "cocunut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").append(newListItem);