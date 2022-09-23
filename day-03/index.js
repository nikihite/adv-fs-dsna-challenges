class BinaryTree {

  constructor(node) {
    this.data = node;
    this.left = null;
    this.right = null;
  }


  addTree = (node) => {
    if(node.data === this.data) {
      node.data = this.data;
    } else if (node.data < this.data) {
      if(this.left == null) {
        this.left = node;
      } else {
        this.left.addTree(node);
      }
    } else {
      if(this.right == null) {
        this.right = node;
      } else {
        this.right.addTree(node);
      }
    } return node;
  };

  findPerson = (name) => {
    if (this.data === name) {
      return this;
    } else {
      if (this.left !== null) {
        const foundLeft = this.left.findPerson(name);
        if (foundLeft) {
          return foundLeft;
        }
      }
      if (this.right !== null) {
        const foundRight = this.right.findPerson(name);
        if (foundRight) {
          return foundRight;
        }
      }
    }
    

    return null;
    
  };

}

module.exports = { BinaryTree };
