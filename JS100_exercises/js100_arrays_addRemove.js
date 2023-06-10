//add to the end
//remove the first

let energy = ['hydrothermal', 'wind', 'solar']

energy.push('geothermal'); //add to the end
console.log(energy);

energy.shift(); //remove first element
console.log(energy); //logs ['wind', 'solar', 'geothermal']
energy.splice(0, 1);// OR splice start at index[0], removing 1 element
console.log(energy);// logs ['solar, 'geothermal']