function stringToCap(string) {
  if (string.length > 10) {
  return string.toUpperCase();
} else {
  return string;
}
}

console.log(stringToCap('Sarah Dale'));
console.log(stringToCap('Sarah Beckwith Dale'));

function stringToCap(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}
console.log(stringToCap('Pete'));
console.log(stringToCap('Pete Santago'));