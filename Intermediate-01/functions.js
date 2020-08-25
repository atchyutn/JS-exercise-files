// we'll define a function and pass arguments to that function

let greetUser = function(name){
  console.log(`Hello ${name}`);
}

greetUser('John');


// return a function
let sumCal = function(num1, num2){
  let sum = num1+num2;
  return sum;
}

let result = sumCal(3,2)

console.log(result);