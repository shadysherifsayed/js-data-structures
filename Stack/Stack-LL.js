const LinkedList = require('../DoublyLinkedList/DoublyLinkedList');

class Stack {
    constructor() {
        this.data = new LinkedList();
        this.first = null;
        this.last = null;
    }


    isEmpty() {
        return this.first == this.last == null;
    }

    length() {
        return this.top + 1;
    }

    push(data) {
        this.data.append(data);
    }

    pop() {

        if (this.isEmpty()) {
            return console.error('STACK IS EMPTY');
        }

        const data = this.data.pop();

        return data.data;
    }

    peek() {
        if (this.isEmpty()) {
            return console.error("STACK IS EMPTY");
        }
        const data = this.data.pop(false);
        return data.data;
    }

    print() {
        this.data.print();
    }

    clear() {
        this.first = null;
        this.null;
    }

}
