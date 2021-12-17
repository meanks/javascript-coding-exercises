const reverseStringOfWords = (string) => {
  const words = string.split(' ').filter((f) => f);
  let reveredArray = [];
  for (const word of words) {
    let reversedString = '';
    for (let i = word.length; i >= 0; i--) {
      reversedString += word.charAt(i);
    }
    reveredArray.push(reversedString);
  }
  return reveredArray.join(' ');
};
console.log(reverseStringOfWords('hello world'));
