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

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

function anagrams(wordOne, wordTwo) {
  const arrOne = wordOne.split('').sort().join();
  const arrTwo = wordTwo.split('').sort().join();
  return arrOne === arrTwo ? true : false;
}
module.exports = { reverseSentence, addPunctuation, titleCase, oddishOrEvenish, at, anagrams };
