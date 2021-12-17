function launchSequenceChecker(systemNames, stepNumbers) {
  let data = {};
  for (let i = 0; i < systemNames.length; i++) {
    if (!data[systemNames[i]]) {
      data[systemNames[i]] = [stepNumbers[i]];
    } else {
      data[systemNames[i]].push(stepNumbers[i]);
    }
  }
  let bool = true;
  for (const [k, v] of Object.entries(data)) {
    for (let i = 0; i < v.length; i++) {
      if (v[i] >= v[i + 1]) {
        bool = false;
        break;
      }
    }
    if (bool === false) break;
  }
  return bool;
}
console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'],
    [1, 10, 11, 2, 12, 111]
  )
);
