const { Queue } = require('../Queue');

describe('Queue Tests', () => {
  it('enqueue should add an item to the back of the queue', () => {
    const newItemArr = new Queue();
    newItemArr.enqueue('fox');
    expect(newItemArr.hasNext()).toEqual(true);
  });
});
