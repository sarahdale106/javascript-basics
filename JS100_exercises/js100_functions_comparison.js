function compareLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  } else if (string1.length > string2.length) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareLength('pineapple', 'apple'));