let obj = {
  num: 42,
  'property name': 'Oak Hill',
  true: false,
  fun: function() {
    console.log('He, heee!');
  },
};

for (let property in obj) { 
  console.log(`${property}: ${obj[property]}`);
}
