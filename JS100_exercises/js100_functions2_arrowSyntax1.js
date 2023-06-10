const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('am', 'green'));

//rewrite using arrow syntax

const template2 = 'I VERB NOUN.';

let sentence2 = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);
  
console.log(sentence2('like', 'dogs'));