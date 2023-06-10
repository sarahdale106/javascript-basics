function greet(code) {
  switch (code) {
    case 'en': return 'Hi'; //Can use return here instead of a break statement
    case 'fr': return 'Salut';
    case 'pt': return 'Ola';
  }
}
console.log(greet('fr'));