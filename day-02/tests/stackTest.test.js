const { Stack } = require('../Stack');

describe('Stack Tests', () => {
  it('should add an item to an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.classPush('fox');
    newItemArr.classPush('goose');
    newItemArr.classPush('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });
  it('pop should return the array without the last item', () => {
    const newItemArr = new Stack(['fox', 'goose', 'lizard']);
    newItemArr.classPop();
    expect(newItemArr.readableArr).toEqual(['fox', 'goose']);
  });
  it('peek should return the last item in the array', () => {
    const peekedArr = new Stack(['fox', 'goose', 'lizard']);
    expect(peekedArr.classPeek()).toEqual('lizard');
  });
  it('checking syntax should work', () => {
    const stack = new Stack();
    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))')).toEqual(true);
  });
});
