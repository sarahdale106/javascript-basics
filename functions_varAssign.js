//Compare variable assignment out of scope of the function 

let bar = 1;

function foo() {
  let bar = 2;
}

foo();
console.log(bar); //Outputs 1

function qux() {
  bar = 2;
}

qux();
console.log(bar);  //Outputs 2