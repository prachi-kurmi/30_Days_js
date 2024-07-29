/ * Activity 1: Linked List */

//* Task 1: Implement a node class to represent an element in a linked list with properties value and next. */

class Node {
  constructor(value) {
    this.value = value; 
    this.next = null; 
  }
}


const node1 = new Node(5);
const node2 = new Node(10);
node1.next = node2;

console.log(node1);  
