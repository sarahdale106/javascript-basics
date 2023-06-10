let fish = ['Dory', 'Martin', 'Gil', 'Nemo', 'Bruce'];
for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);
  if (fish[i] === 'Nemo') {
    break;
  }
}