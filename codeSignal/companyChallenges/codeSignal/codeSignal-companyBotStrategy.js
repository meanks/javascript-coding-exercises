function companyBotStrategy(trainingData) {
  let count = 0;
  let result = 0;
  for (const data of trainingData) {
    const answerTime = data[0];
    const correctness = data[1];
    if (correctness >= 1) {
      result += answerTime;
      count++;
    }
  }
  return result ? result / count : 0;
}
console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1]
  ])
);
