// Create your HTML Page via DOM Methods here!
console.log("hello");
var body = document.body;

let newDiv = document.createElement("h1");
newDiv.textContent = "HELOOOOOOOOOO";
newDiv.style.textAlign = "center";
let list = document.createElement("ul");
list.style.textAlign = "center";
let listItem = document.createElement("li");
listItem.textContent = "this is an item in a list";
list.appendChild(listItem);
// TODO: Add a centered h1
body.appendChild(newDiv);
// TODO: Add a centered h2

// TODO: Add a centered image with a centered caption under it
body.appendChild(list);

// TODO: Add a list of your favorite foods (or other favorites)
