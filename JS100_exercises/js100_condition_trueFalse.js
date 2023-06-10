let sale = true;

let admitPrice = !sale ? 5.25 : 3.99;

console.log('$' + admitPrice); //Logs $3.99 because !sale evaluates to false but the variable sale = true, so
//this will log the value associated with the false evaluation
