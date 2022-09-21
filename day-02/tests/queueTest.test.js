const { Queue } = require('../Queue');

describe('Queue Tests', () => {
  it('enqueue should add an item to the back of the queue', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    expect(queue.hasNext()).toEqual(true);
  });
  it('queue.dequeue should remove first item', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
