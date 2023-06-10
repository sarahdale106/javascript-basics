function extractReg(locale) {
  return locale.split('.')[0].split('_')[1]; //First split is on '.' at index [0]: en_US 
  //Second split is on '_' at index [1]: US
}
console.log(extractReg('en_US.UTF_8')); // US