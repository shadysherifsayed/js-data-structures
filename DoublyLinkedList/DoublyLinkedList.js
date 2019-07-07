const Node = require('./Node');

module.exports = class DoublyLinkedList {

    constructor() {
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

    // O(N)
    print(node = this.head) {
        console.log(node.data);
        if (!node.next) return;
        this.print(node.next);
    }

    insert(data, index) {

        if (index <= 0 || index >= this.length) return this.outOfRange();

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

        if (index <= 0 || index >= this.length) return this.outOfRange();

        const deletedNode = this.get(index);
        const prevNode = deletedNode.prev;
        const nextNode = deletedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    }

    // O(N)
    get(index) {

        if (index <= 0 || index >= this.length) return this.outOfRange();

        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;
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

    outOfRange() {
        return console.error('OUT OF RANGE');
    }
}
