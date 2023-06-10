function catAge(humanYrs) {
  switch (humanYrs) {
    case 0: return 0;
    case 1: return 15;
    case 2: return 24;
    default: return 24 + (humanYrs - 2) * 4; //for every year after humanYrs 2, we want to add 4 years
    //to 24
  }  
}

console.log(catAge(6));