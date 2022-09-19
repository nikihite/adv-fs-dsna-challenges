const { reverseSentence, addPunctuation, titleCase, oddishOrEvenish } = require('./index');

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
});
