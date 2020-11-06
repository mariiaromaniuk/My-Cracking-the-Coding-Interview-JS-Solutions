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
    if (!this.root){
      this.root = node;
      return this;
    }
    else {
      let p = this.root;
      if (val === p.val){
        return undefined;
      } 
      else if (val < p.val){
        while (val < p.val && p.left)
          p = p.left;
        node.left = p.left;
        p.left = node;
      } 
      else {
        while (val > p.val && p.right)
          p = p.right;
        node.right = p.right;
        p.right = node;
      }
    }
  }

  // Remove specific value from the tree
  remove(val){ 
    // root is re-initialized with a root of a modified tree. 
    this.root = this.removeNode(this.root, val); 
  } 
  // Method to remove node with a given value
  // it recur over the tree to find the val and removes it 
  removeNode(node, key){ 
    if (node === null) 
        return null; 
    else if (key < node.val){ 
      node.left = this.removeNode(node.left, key); 
      return node; 
    } 
    else if (key > node.val){ 
      node.right = this.removeNode(node.right, key); 
      return node; 
    } 
    else { 
      // deleting node with no children 
      if (node.left === null && node.right === null){ 
          node = null; 
          return node; 
      } 
      // deleting node with one child 
      if (node.left === null){ 
          node = node.right; 
          return node; 
      } 
      else if (node.right === null){ 
          node = node.left; 
          return node; 
      } 
      // Deleting node with two children 
      // minumum node of the rigt subtree is stored in aux 
      var aux = this.findMinNode(node.right); 
      node.val = aux.val; 
  
      node.right = this.removeNode(node.right, aux.val); 
      return node; 
    } 
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
console.log(validate(bst));
console.log(bst);
console.log(bst.remove(10));
console.log(bst);
