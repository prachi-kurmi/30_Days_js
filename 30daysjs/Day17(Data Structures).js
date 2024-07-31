/ * Activity 1: Linked List */

//* Task 1: Implement a Node class to represent an element in a Linked list with properties value and next. */

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(2);
console.log(node1);
const node2 = new Node(7);
node1.next = node2;
console.log(node1);

//* Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes */

 
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    
    add(value) {

      const new_node = new Node(value);

      if (this.head === null) {
        this.head = new_node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = new_node;
      }

    }
  

    remove() {

      if (this.head === null){
        return;
      }

      if (this.head.next === null) {
        this.head = null; 
        return;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null; 
    }
  
    
    display() {

      let current = this.head;
      const values = [];

      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }

      console.log(values.join(' -> '));

    }
  }
  
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(5);
  list.display(); // 2 -> 1 -> 5
  
  list.remove();
  list.display(); // 2 -> 1
  

/ * Activty 2: Stack */

//* Task 3: Implement a Stack class with methods push(add element), pop(remove element), and peek(view the top element) */

class Stack {
    constructor() {
      this.items = []; 
    }

    isEmpty() {
        return this.items.length === 0;
      }
    
      size() {
        return this.items.length;
      }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  

  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log(stack.peek()); 
  
  console.log(stack.pop()); 
  console.log(stack.peek());
  
  console.log(stack.size());
  
  stack.pop();
  stack.pop();
  
  console.log(stack.isEmpty());


//* Task 4: Use a Stack class to reverse a string by pushing all characters onto the stack and then popping them off. */

function reverse_string(str){
  let stack = new Stack();

  for(let char of str){
    stack.push(char);
  }

  let reverse = '';

  while(!stack.isEmpty()){
    reverse += stack.pop();
  }

  return reverse;

}

let original = "hello";
let reverse = reverse_string(original);
console.log(`Original string is: ${original}`);
console.log(`Reverse string is: ${reverse}`);



/ * Activity 3: Queue */

//* Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element) */

class Queue{
  constructor(){
    this.items = [];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    if(this.isEmpty()){
      return "Queue is Empty."
    }
    return this.items.shift();
  }

  front(){
    if(this.isEmpty()){
      return "Queue is Empty"
    }

    return this.items[0];
  }

  display() {
    console.log(this.items);
  }

}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(3);

console.log("Front element from queue is: ", queue.front());

console.log("Pop the element from the queue: ", queue.dequeue());

console.log("Front element from queue is: ", queue.front());


//* Task 6: Use the Queue class to stimulate a simple printer queue where print jobs are added to the queue and processed in order. */

class PrinterQueue {
  constructor() {
      this.queue = new Queue();
  }

  isEmpty(){
    return this.items.length === 0;
  }

  add(job) {
      this.queue.enqueue(job);
      console.log(`Job ${job} added to the queue.`);
  }

  process() {
      if (this.queue.isEmpty()) {
          console.log("No jobs in the queue.");
      } else {
          const job = this.queue.dequeue();
          console.log(`Processing job ${job}...`);
      }
  }

  displayQueue() {
    this.queue.display();
  }
}

const printerQueue = new PrinterQueue();

printerQueue.add("Doc1");
printerQueue.add("Doc2");
printerQueue.add("Doc3");
printerQueue.add("Doc4");
printerQueue.add("Doc5");

printerQueue.displayQueue();  

printerQueue.process();
printerQueue.process();
printerQueue.process();



/ * Activity 4: Binary Tree */

//* Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right. */

class TreeNode{
  constructor(value = 0, left = null, right = null){
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

// Creating a binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(root);


//* Task 8: Implement a BinaryTree class with methods for instering values and performing in-order traversal to display nodes.  */

class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new TreeNode(value);

      if (this.root === null) {
          this.root = newNode;
      }
      else {
          this.insertNode(this.root, newNode)
      }
  }

  insertNode(root, newNode) {
      if (newNode.value < root.value) {
          if (root.left !== null) {
              this.insertNode(root.left, newNode)
          }
          else {
              root.left = newNode
          }
      }
      else {
          if (root.right !== null) {
              this.insertNode(root.right, newNode)
          }
          else {
              root.right = newNode
          }
      }
  }

  inOrder(node) {
      if (node) {

          this.inOrder(node.left)
          console.log(node.value)
          this.inOrder(node.right)
      }
  }
}

const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);


tree.inOrder(tree.root);

