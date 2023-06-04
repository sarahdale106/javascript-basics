//Examples of return values using null and undefined
console.log(false ?? null); //false  ?? returns the second operand if the first is null or undefined
console.log(true ?? (1 + 2)); //true
console.log((1 + 2) ?? true); //3
console.log(null ?? false); //false
console.log(undefined ?? (1 + 2)); //3
console.log((1 + 2) ?? null); //3
console.log(null ?? undefined); //undefined
console.log(undefined ?? null); //null


//Using a function. Also illustrates reassigning a default variable with console.log
function show(foo = undefined, bar = null) {
  console.log(`Foo is ${foo ?? 3}, bar is ${bar ?? 42}`); //Even though there are default values(undefined and null)
  //the console.log statement resets the default values to 3 and 42
}
console.log(show(5, 7)); //Foo is 5, bar is 7
console.log(show(0, 0)); //Foo is 0, bar is 0
console.log(show(4)); //Foo is 4, bar is 42
console.log(show()); //Foo is 3, bar is 42
