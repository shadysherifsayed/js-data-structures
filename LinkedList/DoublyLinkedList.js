const Node = require('./DoublyNode');
const LinkedList = require('./LinkedList');

module.exports = class DoublyLinkedList extends LinkedList {

    constructor() {

        super();
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1)
    prepend(data) {
        const node = new Node(data, this.head, null);
        if (this.length) {
            this.head.prev = node;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.length++;
        return node;
    }

    // O(N)
    append(data) {
        if (this.length == 0) {
            return this.prepend(data);
        }

        const node = new Node(data, null, this.tail);
        this.head.prev = node;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return node;
    }

    insert(data, index) {

        if (index < 0 || index > this.length) return this.outOfRange();

        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        const node = new Node(data, nextNode, prevNode);
        prevNode.next = node;
        nextNode.prev = node;
        this.length++;
        return node;
    }

    // O(N)
    remove(index) {

        if (index < 0 || index > this.length) return this.outOfRange();

        const deletedNode = this.get(index);
        const prevNode = deletedNode.prev;
        const nextNode = deletedNode.next;
        if (prevNode) {
            prevNode.next = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode;
        }
        this.length--;
        return deletedNode;
    }

    reverse() {
        if (this.length <= 1) return;
        let node = this.head;
        while (node) {
            let next = node.next; // Second Node
            let prev = node.prev; // NULL
            node.next = prev;
            node.prev = next;
            // node = next;
        }
        const head = this.head;
        const tail = this.tail;
        this.tail = head;
        this.head = tail;
        return this;
    }

}
