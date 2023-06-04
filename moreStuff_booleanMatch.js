function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    console.log(`We have a match ${results}`);
  } else {
    console.log("No match found");
  }
}
has_a_or_e("basketball");
has_a_or_e("hockey");
has_a_or_e("golf");

//use .test when just need a boolean value returned
let regex = /b/;
let str = "ababa";
console.log(regex.test(str));
