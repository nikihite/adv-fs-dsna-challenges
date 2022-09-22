const { BinaryTreeNode } = require('./index');

describe('node based data structures', () => {
  it('adds to binary node', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');
    B.addBinTree(A);
    B.addBinTree(D);
    B.addBinTree(C);
    expect(B.right).toEqual({ 'addBinTree':
    expect.any(Function), 'data': 'D', 'left':
    { 'addBinTree': expect.any(Function),
      'data': 'C', 'left': null, 'right': null }, 'right': null });
  });
});
