// Binary Search Tree utility class

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  // Insert specific value to the tree
  insert(val) {
    const node = new Node(val);
    if (!this.head){
      this.head = node;
      this.head.left = null;
      this.head.right = null;
    }
    else {
      let p = this.head;
      if (val < p.val){
        while (val < p.val && p.left)
          p = p.left;
        node.left = p.left;
        p.left = node;
      }
      else if (val > p.val){
        while (val > p.val && p.right)
          p = p.right;
        node.right = p.right;
        p.right = node;
      }
    }
  }

  // Remove specific value from the tree
  remove(val) {
  }
}

function validate(head){ 
  if (!head)  
    return true;  
  if (head.left && head.left.val > head.val)  
    return false;  
  if (head.right && head.right.val < head.val)  
    return false;  
  if (!validate(head.left) || !validate(head.right))  
    return false;   
  return true;  
}

module.exports = BinarySearchTree;

// Test
const bst = new BinarySearchTree();
console.log(bst);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
bst.insert(7);
bst.insert(6);
console.log(bst);
console.log(bst.remove(7));
