// declaring a global variable
let iAmGlobal = "superman";

if(true){
  let iAmLocal = "localMan";
  var iAmIronMan = "IronMan";

  // calling a global and a local variable
  console.log(iAmGlobal);
  console.log(iAmLocal);
}

// calling the two global variables
console.log(iAmGlobal);
console.log(iAmIronMan);