let nestedArray = [['title', 'King'], ['name', 'Charles'], ['age', 58]];
let person = {};
for (let i = 0; i < nestedArray.length; i ++) {
  let pair = nestedArray[i];
  console.log(pair);
  person[pair[0]] = pair[1];
};
console.log(person);

//OR

let person2 = Object.fromEntries(nestedArray);
console.log(person2);

