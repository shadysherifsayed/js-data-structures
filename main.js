const SingleLinkedList = require("./LinkedList/SingleLinkedList");
const DoublyLinkedList = require("./LinkedList/DoublyLinkedList");

const QueueArray = require("./Queue/Queue-Array");
const QueueLL = require("./Queue/Queue-LL");

const StackArray = require("./Stack/Stack-Array");
const StackLL = require('./Stack/Stack-LL');



const sll = new SingleLinkedList();

sll.append(1);
sll.prepend(2);

const node = sll.shift();
console.log(node)