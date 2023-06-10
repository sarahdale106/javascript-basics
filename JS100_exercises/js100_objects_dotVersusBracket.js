let ocean = {};
let prefix = 'Indian';
ocean.prefix = 'Pacific'; //assigns prefix as the key and "Pacific" as the value
console.log(ocean); //logs prefix: 'Pacific'

let ocean2 = {};
let prefix2 = 'Indian';
ocean2[prefix2] = 'Pacific'; //assigns 'Indian' to index[0] with the value of 'Pacific'

console.log(ocean2); //logs Indian: 'Pacific'

