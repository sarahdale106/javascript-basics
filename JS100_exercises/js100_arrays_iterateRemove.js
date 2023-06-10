//iterate over an array and remove items one-by-one

let groceryList = ['apples', 'bananas', 'milk', 'eggs', 'butter'];

while (groceryList.length > 0) {
  let purchaseItem = groceryList.shift();
  console.log(purchaseItem);
}