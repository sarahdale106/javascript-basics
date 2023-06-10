let destinations = ['Prague', 'London', 'Paris', 'New York'];

function contains(element, list) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === element) {
      return true;
    }
  } 
  return false;
}

console.log(contains('New York', destinations)); //true
console.log(contains('Sydney', destinations)); //false
