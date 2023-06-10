//When using SWITCH, add a break statement or else JS will execute the code matched AND all 
//following code.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('chirp');
    break;
  default:
    console.log('*crickets*');
}