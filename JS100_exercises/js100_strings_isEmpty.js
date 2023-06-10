function isBlank(string) {
  return string.length === 0; //this sets up a true condition for a blank string
}
console.log(isBlank('')); //true

function isBlankSpace(string) {
  return string.trim().length === 0; //.trim removes the spaces, so now the string is blank
}
console.log(isBlankSpace(' ')); //true