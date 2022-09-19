function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return(`${quote}${string}`);
  };
}

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddishOrEvenish(number) {
  let num = 0;
  String(number).split('')
    .map(number => num += Number(number));
  return num % 2 === 0 ? 'evenish' : 'oddish';
}

module.exports = { reverseSentence, addPunctuation, titleCase, oddishOrEvenish };
