// In this file we'll implement diff types of Array operations

// Creation of Array

Countries = ["India", "USA", "Canada", "Japan"]

states = ["Andhra Pradesh", "Telengana", "Delhi"]

// Remove last element of an array
states.pop();
console.log(states);

// Add new element to an array at starting.
states.unshift("Tamil Nadu");
console.log(states);

// Add new element to an array at ending
states.push("Karnataka");
console.log(states);

// Remove first element from an array
states.shift();
console.log(states);

// find placement of particular element of an array
console.log(states.indexOf("Andhra Pradesh"));

// convert a string into an array
console.log(Array.from("Telangana"));