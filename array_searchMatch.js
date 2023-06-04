let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, string) {
  let matches = [];
  for (let index = 0; index < array.length; index += 1) {
    if (string.test(array[index])) {
      matches.push(array[index]);
    }
  }
  return matches
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//OR

function allMatches2(array, string) {
  array.filter(function(word) {
    return string.test(word);
  });
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
