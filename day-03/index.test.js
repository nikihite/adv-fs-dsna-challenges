const { BinaryTree } = require('./index');

describe('node based data structures', () => {
  it('adds to binary node', () => {
    const A = new BinaryTree('A');
    const B = new BinaryTree('B');
    const C = new BinaryTree('C');
    const D = new BinaryTree('D');
    B.addTree(A);
    B.addTree(D);
    B.addTree(C);
    expect(B.right).toEqual({ 'addTree':
    expect.any(Function), 'findPerson': expect.any(Function), 'data': 'D', 'left':
    { 'addTree': expect.any(Function), 'findPerson': expect.any(Function),
      'data': 'C', 'left': null, 'right': null }, 'right': null });
  });
  it('find(person should return person', () => {
    const jerry = new BinaryTree('Jerry');
    const o = new BinaryTree(0);
    const jeremy = new BinaryTree('Jeremy');
    const jeff = new BinaryTree('Jeff');

    jerry.addTree(o);
    jerry.addTree(jeremy);
    jerry.addTree(jeff);

    expect(jerry.findPerson('Jerry')).toEqual({
      'addTree': expect.any(Function), 'findPerson': expect.any(Function), data: 'Jerry',
      'left': expect.any(Object), 'right': expect.any(Object)
    });
    expect(jerry.findPerson('Lucas')).toEqual(null);
  });
});
