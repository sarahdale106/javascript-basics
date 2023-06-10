let person = {
  title: 'Duke',
  name: 'Aria',
  age: 33,
};

let nestedPerson = [];
for (let property in person) {
  nestedPerson.push([property, person[property]]);
};

console.log(nestedPerson);
  
  //OR
  
  let nestedPerson2 = Object.entries(person);
  console.log(nestedPerson2);
  