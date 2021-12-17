const validateBrackets = (string) => {
  let traverse = 0;
  for (let i in string) {
    (string[i] === '(' && traverse++) || (string[i] === ')' && traverse--);
    if (traverse < 0) return false;
  }
  return traverse === 0;
};
console.log(validateBrackets('(hello))world)'));
