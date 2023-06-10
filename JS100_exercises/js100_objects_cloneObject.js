function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Queen',
  name: {
    value: 'Elizabeth',
    isAlive: true,
  },
  age: 46,
};

let clonePerson = clone(person);
person.age = 34;
console.log(person.age); //34
console.log(clonePerson.age); //46
person.name.isAlive = false;
console.log(person.name.isAlive); //false
console.log(clonePerson.name.isAlive); //false


