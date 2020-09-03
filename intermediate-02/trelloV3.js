// in the lesson we'll be learning about the usage of methods in an object, this keyword.

let myToDos = {
  newToDos: 0,
  DoneToDos: 0,

  addToDo: function(num){
    this.newToDos = this.newToDos + 1;
  },

  removeToDo: function(num){
    this.DoneToDos = this.DoneToDos + 1;
  },

  summary: function(){
    this.newToDos = this.newToDos - this.DoneToDos;
    return `You are left over with ${this.newToDos} ToDos`
  }
}

myToDos.addToDo(10);
myToDos.removeToDo(5);
console.log(myToDos.summary());