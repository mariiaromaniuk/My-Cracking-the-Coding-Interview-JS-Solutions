// Implement an algorithm to find the kth to last element of a singly linked list.

const LinkedList = require("../Utilities/Linked_List_Class.js");

// Time: O(n), Space: O(1)
function KthToLast1(list, k) {
  if (!list) 
    throw Error('Invalid list');

  let fastP = list, slowP = list;

  for (let i = 0; i < k; i++) {
    if (!fastP.next) 
      throw Error('list is not long enough');
    fastP = fastP.next;
  }
  while (fastP.next) {
    fastP = fastP.next;
    slowP = slowP.next;
  }
  return slowP.val;
}
