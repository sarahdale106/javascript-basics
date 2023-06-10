let testArray = [undefined, null, 1, 3, 'xyz'];

function last(array) {
  return array[array.length - 1];
}

console.log(last(testArray));