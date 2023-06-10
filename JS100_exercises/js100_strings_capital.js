let string = 'launch school tech & talk';
let words = string.split(' '); //creates an array of the lowercase words, split on the spaces
console.log(words);
let capitalizeWords = []; //creates an empty array that we will puch the capitalized words into
console.log(capitalizeWords);

for (let i = 0; i < words.length; i++) {
  let word = words[i]; //creates a variable containing the words at each index in the array words
  console.log(word);
  capitalizeWords.push(word[0].toUpperCase() + word.slice(1)); //Take the first character of the first word 
  //word[0] and make it upperCase, then concatenate it with the rest of the word.
  //word.slice(1) will also be an empty string when there is only one character - the &
}
console.log(capitalizeWords.join(' ')); //join the capitalized words by a space to recreate the sentence