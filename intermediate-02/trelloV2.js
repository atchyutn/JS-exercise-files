let myToDos = {
  newTodo: 0,
  doneToDO: 0
}

let addTodo = function(ToDos, ToDo = 0){
  myToDos.newTodo = myToDos.newTodo + ToDo
}

let removeToDO = function(ToDos, ToDo = 0){
  ToDos.doneToDO = ToDos.doneToDO + ToDo
}

let summaryToDo = function(ToDos){
  ToDos.newTodo = ToDos.newTodo - ToDos.doneToDO
  return ToDos.newTodo
}

addTodo(myToDos, 10);

removeToDO(myToDos, 5);

console.log(`You are left over with ${summaryToDo(myToDos)} ToDos`)


