// Implement an algorithm to find the kth to last element of a singly linked list.

const LinkedList = require("../Utilities/Linked_List_Class.js");

// Time: O(n), Space: O(1)
function kthToLast(list, k){
  if (!list) 
    throw Error('Invalid list');

  let fastP = list, slowP = list;

  for (let i = 0; i < k; i++){
    if (!fastP.next) 
      throw Error('list is not long enough');
    fastP = fastP.next;
  }
  while (fastP.next){
    fastP = fastP.next;
    slowP = slowP.next;
  }
  return slowP.val;
}

// Test
let list = new LinkedList();
for (let elem of [1, 1, 5, 1, 10, 6, 8, 6, 9, 9, 10, 8]) 
  list.addToTail(elem);

kthToLast(list, 5);
console.log(list.toArray());
