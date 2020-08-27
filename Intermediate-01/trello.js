// we'll create a ToDo list and print the list

const toDos = [];

toDos.unshift('go to Gym');
toDos.unshift('Water Plants');

for (let index = 0; index < toDos.length; index++) {
  const toDo = toDos[index];
  console.log(`Your ToDO number ${index} is ${toDo}`);
}