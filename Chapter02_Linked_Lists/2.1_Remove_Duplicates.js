// Write code to remove duplicates from an unsorted linked list.

// Time: O(n), Space: O(n)
function removeDuplicates(list){
  if (!list.head || !list.head.next)
    return list.head;

  let set = new Set();
  set.add(list.head.val);
  let p = list.head;

  while (p.next){
    if (set.has(p.next.val))
      p.next = p.next.next;
    else {
      set.add(p.next.val);
      p = p.next;
    }
  }
}

// Time: O(n^2), Space: O(1)
function removeDuplicates(list){
  if (!list.head || !list.head.next)
    return list.head;

  let p = list.head;
  while (p){
    let q = p;
    while (q.next){
      if (q.next.val === p.val) 
        q.next = q.next.next;
      else 
        q = q.next;
    }
    p = p.next;
  }
}

// Test
let list = new LinkedList();
for (let elem of [1, 1, 5, 1, 10, 6, 8, 6, 9, 9, 10, 8]) 
  list.addToTail(elem);

removeDuplicates(list);
console.log(list.toArray());
