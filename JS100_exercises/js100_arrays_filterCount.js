let scores = [96, 47, 113, 89, 100, 102];
 
function high(scoreArray) { //create a function that selects scores >= 100
  return scoreArray >= 100;
}
let highScores = scores.filter(high); //use .filter and the fuction to create a new array
console.log(highScores); //logs [113, 100, 102]

//BUT we need to count the number of scores >= 100

let count = 0; //initilze the count to 0
for (let i = 0; i < scores.length; i ++) {
  if (scores[i] >= 100) {
    count += 1; //if the score is >= 100 increment the count by 1
  }
}

console.log(count); //logs 3