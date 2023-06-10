function extractLang(locale) {
  return locale.split('_')[0];
}

function extractReg(locale) {
  return locale.split('.')[0].split('_')[1];
}

function greet(language) {
  switch (language) {
    case 'en': return 'Hi'; //Can use return here instead of a break statement
    case 'fr': return 'Salut';
    case 'pt': return 'Ola';
  }
}

function localGreet(locale) {
  let language = extractLang(locale);
  let region = extractReg(locale);
  
  switch (region) {
    case 'US': return 'Hey';
    case 'GB': return 'Hello';
    case 'AU': return 'Howdy';
    default: return greet(language);
  }
}
console.log(extractLang('en_US.UTF_8'));
console.log(extractReg('en_US.UTF_8'));
console.log(localGreet('en_US.UTF_8')); //This is very complicated.. I'm not sure I fully 
//understand what's happening here 