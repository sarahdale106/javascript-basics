//let names = ['bob', 'joe', 'steve', undefined, 'frank'];
//names.forEach(name => {
//  console.log(`&{name}'s name has ${name.length} letters.` );
//});
//produces an error on length of "undefined"

//add exception handling
let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters.`);
  } catch (exception) {
  console.log('Something went wrong');
  }
});

//another typ of error handling
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  } else {
    console.log(number);
  }
}
foo(6);
foo("yes");