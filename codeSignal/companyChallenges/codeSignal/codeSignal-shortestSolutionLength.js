function shortestSolutionLength(source) {
  const startBlock = /(\/\*)/;
  const endBlock = /(\*\/)/;
  // --
  const filterStartBlock = /(\/\*).*/g;
  const filterEndBlock = /.*(\*\/)/g;
  const filterLine = /(\/\*).*(\*\/)|(\/{2}).*/g;
  // --
  let result = [];
  let depth = 0;
  for (let i = 0; i < source.length; i++) {
    const src = source[i].split` `.filter((f) => f && f !== ' ').join``;
    console.log(src);
    if (depth === 0) {
      if (startBlock.test(src)) {
        if (endBlock.test(src)) {
          result.push(src.replace(filterLine, ''));
        } else {
          result.push(src.replace(filterStartBlock, ''));
          depth++;
        }
      } else {
        result.push(src.replace(/(\/{2}.*)/g, ''));
      }
    } else {
      if (endBlock.test(src)) {
        result.push(src.replace(filterEndBlock, ''));
        depth--;
      }
    }
  }
  return result.join('').length;
}
console.log(
  shortestSolutionLength([
    'int a = 2;',
    'int b = 47;/*37;*///41;',
    'int c = 3/*4//5*/;',
    'return a / b * c/*a /* b / c*/;'
  ])
);
