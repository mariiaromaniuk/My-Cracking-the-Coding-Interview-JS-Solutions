// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
// not necessarily the exact middle) of a singly linked list, given only access to that node.

// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

const LinkedList = require("../Utilities/Linked_List_Class.js");

function deleteMidNode(node) {
  if (node !== null && node.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
    }
};

// Test
let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) 
  list.addToTail(elem);

console.log(list.toArray());
deleteMidNode(list.head.next);
console.log(list.toArray());
