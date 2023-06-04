function barCodeScanner (serial) {
  switch (serial) {
    case '123':
      console.log('Product 1');
      break; //Need break statements here or else the code will find the first match in hte funstion argument
      //and execute the function from that point forward (called fallthrough behavior)
    case '113':
      console.log('Product 2');
      break;
    case '142':
      console.log('Product 3');
      break;
    default:
      console.log('No product found');
  }
}
console.log(barCodeScanner('113')); //Without the break satements, the output would also include Product 2
//and No product found

