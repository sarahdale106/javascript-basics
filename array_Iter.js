let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}

let myArray2 = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];

for (let i = 0; i < myArray2.length; i += 1) {
  for (let j = 0; j < myArray2[i].length; j += 1 ) {
    let value = myArray2[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
    
  }
}

let myArray3 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd')
  } 
}
console.log(newArray);

let things = [1, 'a', '1', 3, NaN, 3.14, -4, null, false];
let integers = findIntegers(things);

function findIntegers(array) {
   return array.filter(function(element) {
     return Number.isInteger(element);
   });
   
 }
 console.log(integers);
 
 let myArray4 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
 function oddLengths(arraystrings) {
   let lengths = arraystrings.map(function(letters) {
     return letters.length;
   });
   let oddLengths = lengths.filter(function(length) {
     return length % 2 === 1;
   });
   return oddLengths;
 }
 console.log(oddLengths(myArray4));
 
 let myArray5 = [3, 5, 7];
 function sumofSquares(array) {
   return array.reduce(function(sum, number) {
     return sum + number * number;
   }, 0);
   //reduce takes 2 arguments: a callback function and a value. The callback function is sum + number * number
   //and the starting value is 0.
 }
 console.log(sumofSquares(myArray5));