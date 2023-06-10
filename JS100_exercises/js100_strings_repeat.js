function repeat(num, word) {
  let reps = ''; //initialize to an empty string
  while (num > 0) {
    reps = reps + word; //let the reps string equal it's current value plus the word on each loop 
    //(so we're building up the reps string here with the word that is passed as the argument)
    num -= 1; //decrement the count
  }
  return reps;
}
console.log(repeat(3, 'ha'));