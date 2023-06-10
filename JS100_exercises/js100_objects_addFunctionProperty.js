let jane = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 34,
  location: {
    city: 'Aarhus',
    country: 'Denmark',
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hi, ${name}!`);
  },
};

jane.greet('Bobby'); //access the function like any other element, include the arguement.