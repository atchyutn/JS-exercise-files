// In this file we'll implement call back functions

// normal format of function
function iSEven(element) {
  return element % 2 === 0;
}
console.log(iSEven(2));

// var declared for a function
var isEven = function (e) {
  return e % 2 === 0
}
console.log(isEven(2));

// arrow functions
var isEven = (e) => {
  return e % 2 === 0
}
console.log(isEven(2));

// callback function with curly braces
var result = [2, 4, 6, 8].every((e) => {
  return e % 2 === 0;
})
console.log(result);

// callback function with braces (single line function)
var result = [2,3,4,6].every((e) => (e % 2 === 0))
console.log(result);

