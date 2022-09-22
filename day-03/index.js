class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }


  addBinTree = (node) => {
    if(node.data === this.data) {
      node.data = this.data;
    } else if (node.data < this.data) {
      if(this.left == null) {
        this.left = node;
      } else {
        this.left.addBinTree(node);
      }
    } else {
      if(this.right == null) {
        this.right = node;
      } else {
        this.right.addBinTree(node);
      }
    } return node;

  };
}

module.exports = { BinaryTreeNode };
