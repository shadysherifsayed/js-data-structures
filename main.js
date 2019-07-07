const LinkedList = require("./LinkedList/LinkedList");
const Queue = require("./Queue/Queue");
const Stack = require("./Stack/Stack");

const linkedList = new LinkedList();

linkedList.append("Shady");

linkedList.print();

const queue = new Queue(5);

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(20);
queue.enqueue(58);
queue.enqueue(87);

for (let index = 0; index < 4; index++) {
  let data = queue.dequeue();
  console.log(`Dequeuing data ${data}`);
}



const stack = new Stack(5);

stack.push(2);
stack.push(4);
stack.push(20);
stack.push(58);
stack.push(87);
stack.push(100);

console.log(stack.data);