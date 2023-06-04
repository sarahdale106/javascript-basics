let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys);

//OR

let upperKeys2 = [];
let objKeys2 = Object.keys(obj);
objKeys2.forEach(function(key) {
  upperKeys2.push(key.toUpperCase());
});
console.log(upperKeys2);

let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
myObj.qux = 3
console.log(myObj);

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};
function createCopy(sourceObj, keys) {
  let destinationObj = {};
  if (keys) {
    keys.forEach(function (key) {
      destinationObj[key] = sourceObj[key];
    });
    return destinationObj; 
    } else { 
      return Object.assign(destinationObj, sourceObj); 
  }
}
console.log(createCopy(objToCopy));