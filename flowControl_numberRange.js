let number
function numberRange(number) {
  if (number >= 0 && number <= 50) {
  console.log(`${number} is between 0 and 50`);
} else if (number >50 && number <= 100) {
  console.log(`${number} is between 51 and 100`);
} else if (number > 100) {
  console.log(`${number} is greater than 100`);
} else
  console.log(`${number} is less than 0`);
}

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));