//convert a string into an array of words, reverxe the array, then return a new array
//that contains the length of the words

function doSomething(string) {
  return string.split (' ').reverse().map((value) => value.length);
}
console.log(doSomething("I will go for a run soon"));