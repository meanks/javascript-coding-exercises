const firstNonRepeatingChar = (string) => {
  let result = '_';
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (string.indexOf(char) === i && string.indexOf(char, i + 1) === -1) {
      result = char;
      return result;
    }
  }
  return result;
};
console.log(firstNonRepeatingChar('aaabbcdd'));
