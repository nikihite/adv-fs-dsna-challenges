const { Stack } = require('../Stack');

describe('Stack Tests', () => {
  it('should add an item to an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.classPush('fox');
    expect(newItemArr.readableArr).toEqual(['fox']);
  });
});
