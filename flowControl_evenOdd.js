let x
function evenOrOdd (x) {
  if (!Number.isInteger(x)) {
    console.log("Number is not an integer");
    return;
  }
  if (x % 2 === 0) {
    console.log("Even");
  }
  else if (x % 2 !== 0) {
    console.log("Odd");
  }
  else {
    console.log("Neither");
  }
}
console.log(evenOrOdd("sarah"));