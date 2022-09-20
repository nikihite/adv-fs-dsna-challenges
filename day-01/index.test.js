const { reverseSentence, addPunctuation, titleCase, oddishOrEvenish, at, anagrams, fizzBuzz, fib } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  it('adds punctuation to a string', () => {
    const addExcitement = addPunctuation('!!!');
    
    const addQuery = addPunctuation('??');
    
    const yayy = addExcitement('yayy');
    
    expect(yayy).toEqual('yayy!!!');
    expect(addQuery('whaa')).toEqual('whaa??');
  });
  it('capitalizes the first letter of each word', () => {
    expect(titleCase('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold');
  });
  it('determines whether a function is evenish or oddish', () => {
    expect(oddishOrEvenish(121)).toEqual('evenish');
    expect(oddishOrEvenish(41)).toEqual('oddish');
  });
  it('returns an item with corresponding index', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(at(arr, 2)).toEqual('c');
    expect(at(arr, 0)).toEqual('a');
  });
  it('takes two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise', () => {
    const wordOne = 'superintended';
    const wordTwo = 'unpredestined';
    const wordThree = 'fuck';
    const wordFour = 'truck';
    expect(anagrams(wordOne, wordTwo)).toEqual(true);
    expect(anagrams(wordThree, wordFour)).toEqual(false);
  });
  it('takes a number and does fizzbuzz', () => {
    expect(fizzBuzz(16)).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 
      'Fizz', 7, 8, 'Fizz', 'Buzz', 
      11, 'Fizz', 13, 14, 'FizzBuzz', 
      16
    ]);
  });
  it('should return the fibonacci sequence at the specified index', () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(10)).toEqual(55);
  });
});
