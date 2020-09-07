class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
  
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  // Add a node to the head of the list
  addToHead(val){
    let node = new Node(val);
    if (!this.head){
      this.head = node;
      this.tail = node;
    } 
    else {
      node.next = this.head;
      this.head = node;
    }
  }

  // Add a node to the end of the list
  addToTail(val){
    let node = new Node(val);
    if (!this.head){
      this.head = node;
      this.tail = node;
    } 
    else {
      this.tail.next = node;
      this.tail = node
    }
  }

  // Remove a node from the head of the list
  deleteFromHead(){
    if (!this.head)
      return 'List is empty.'
    else 
      this.head = this.head.next;
  }
  
  // Remove a node from the end of the list
  deleteFromTail(){
    if (!this.head)
      return 'List is empty.'
    else if (!this.head.next)
      this.head = null;
    else{
      let p = this.head;
      while (p.next.next)
        p = p.next;
      this.tail = p;
      this.tail.next = null;
    }
  }

  // Return the first node
  head(){
    return this.head;
  }

  // Return the last node
  tail(){
    return this.tail;
  }
}

module.exports = LinkedList;

// Test
let list = new LinkedList();
list.addToHead(3);
list.addToHead(4);
list.addToHead(10);
list.addToTail(20);
list.addToTail(5);
  
console.log(list);
list.deleteFromHead();
console.log(list);
list.deleteFromTail();
console.log(list);
