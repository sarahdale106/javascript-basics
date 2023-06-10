function calculateBMI(heightCm, weightKg) {
  let heightM = heightCm/100;
  let BMI = weightKg/heightM ** 2;
  return BMI.toFixed(2); //return a string BMI rounded to 2 decimal places
}

console.log(calculateBMI(160, 90));