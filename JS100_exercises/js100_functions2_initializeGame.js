//This exercise asks to writ the function in arrow syntax, but I don't understand the solution
//so I'm saving this exercise as an example of how to initialize a game to level 1 and score 0

function initGame() {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame(); //need to set a variable to use for logging the values
console.log('Level: ' + game.level);
console.log('Score: ' + game.score);