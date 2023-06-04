//Example of an infinte loop
let counter = 0;

while (counter = 1) { //We assign counter = 1, so the assignemnt always returns 1, which is truthy,
//so the loop condition never becomes false. On line 7, counter will always be 2 (1 + 1), but never > 2,
//so the "if" test is never true
  console.log(counter);
  counter += 1;
  
  if (counter > 2) {
    break;
  }
}