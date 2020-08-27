// a simple function to calculate the grades based on the marks percentage

let gradeCal = function(name, percentage){
  let grade = ''
  if(percentage >= 90){
    grade = 'A';
  }else if(percentage >= 80){
    grade = 'B';
  }else if(percentage >= 70){
    grade = 'C'
  }else if(percentage >= 60){
    grade = 'D'
  }else if(percentage >= 50){
    grade = 'E'
  }else{
    grade = 'F';
  }
  console.log(`${name}, your grade is ${grade}`)
}

gradeCal('Atchyut', 90);