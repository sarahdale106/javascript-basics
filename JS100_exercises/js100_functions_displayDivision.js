function multipleOfThree() {
  let diviser = 1;
  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + '/' + diviser + '=3');
    diviser += 1;
  }
}
console.log(multipleOfThree());