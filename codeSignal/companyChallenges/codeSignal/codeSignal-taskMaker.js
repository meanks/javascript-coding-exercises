function taskMaker(source, challengeId) {
  const result = [];
  let selected = '';
  let i = -1;
  for (const src of source) {
    const chars = src.split``;
    if (!chars.includes('/')) {
      result.push(chars.join(''));
      if (!selected) {
        i++;
      }
    } else {
      const copy = JSON.parse(JSON.stringify(chars));
      const first = copy.indexOf('/');
      const last = copy.lastIndexOf('/');
      const between = copy.slice(first + 5, last - 1);
      if (!selected && +between.join('') === +challengeId) {
        chars.forEach((char, idx) => {
          if (idx < first || idx > last) selected += char;
        });
      }
    }
  }
  result.splice(i, 1, selected);
  return result;
}
console.log(
  debuggingChallenge(
    [
      'ans = 0',
      'for i in range(n):',
      '    for j in range(n):',
      '    //DB 3//for j in range(1, n):',
      '    //DB 2//for j in range(n + 1):',
      '        ans += 1',
      'return ans'
    ],
    3
  )
);
