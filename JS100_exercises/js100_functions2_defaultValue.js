function greet(greeting = 'Hello') {
  console.log(greeting + ' World');
}
console.log(greet());

//Two defualt values

function greet2(greeting = 'Hello', recipient = 'World') {
  console.log(greeting + ', ' + recipient);
}
console.log(greet2());