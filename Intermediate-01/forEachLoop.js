// we'll be looping through an array of elements and render them using forEach loop

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

days.forEach(function(day, index){
  console.log(`${day} is day ${index+1} of the week`);
})