function scope() {
  let a = 1;
  if (true) {
    console.log(a);
  }
}
console.log(scope()); //Logs 1 to the console because the variable a is defined within
//the function and then accessed in the if statement (and logged to the console)

let a = 1;
function myFunction(a) {
  console.log(a);
}

let b = 2;
console.log(myFunction(b)); //Logs 2 because myFunction allows for a parameter. On line 12, the value
//of the paramter is 1, but when we call the function, we give it another value of 2