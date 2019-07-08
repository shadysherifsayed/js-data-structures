const LinkedList = require('../LinkedList/DoublyLinkedList');

cmodule.exports = class Queue {

    constructor() {
        this.data = new LinkedList();
        this.top = null;
    }

    isEmpty() {
        return this.top == null;
    }


    enqueue(data) {
        this.data.append(data);
    }

    dequeue() {
        const data = this.data.shift();
        return data.data;
    }

    print() {
        this.data.print()
    }

    clear() {
        this.top = null;
    }
}
