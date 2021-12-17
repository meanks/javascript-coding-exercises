// Original Version: Using radius increment approach;
function opponentMatchingV1(xp) {
  if (xp.length === 2) return [[0, 1]];
  let r = 0;
  let match = [];
  let skip = [];
  while (xp.length - skip.length > 1) {
    for (let i = 0; i < xp.length; i++) {
      if (!skip.includes(i)) {
        for (let j = 0; j < xp.length; j++) {
          if (i !== j && !skip.includes(j)) {
            if (
              xp[i] === xp[j] ||
              xp[i] + r === xp[j] - r ||
              xp[i] - r === xp[j] + r
            ) {
              match.push([i, j]);
              skip.push(i, j);
              break;
            }
          }
        }
      }
    }
    r++;
  }
  return match;
}
console.log(opponentMatchingV1([200, 100, 70, 130, 100, 800, 810]));

// Improved version: Using differences approach;
function opponentMatchingV2(xp) {
  const sortedXP = xp
    .map((xp, idx) => {
      return [idx, xp];
    })
    .sort((a, b) => a[1] - b[1]);
  // --
  let matches = [];
  while (sortedXP.length > 1) {
    let bestDiff = null;
    let bestMatch;
    for (let i = 0; i < sortedXP.length - 1; i++) {
      let diff = sortedXP[i + 1][1] - sortedXP[i][1];
      if (bestDiff === null || diff < bestDiff) {
        bestDiff = diff;
        bestMatch = [i, i + 1];
      }
    }
    const sortIDX = [sortedXP[bestMatch[0]][0], sortedXP[bestMatch[1]][0]].sort(
      (a, b) => a - b
    );
    matches.push(sortIDX);
    sortedXP.splice(bestMatch[0], 2);
  }
  return matches;
}
console.log(opponentMatchingV2([200, 100, 70, 130, 100, 800, 810]));
