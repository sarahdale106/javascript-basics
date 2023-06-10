let cities = ['Istanbul', 'Los Angeles', null, 'Vienna', null, 'London', null];
for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
}