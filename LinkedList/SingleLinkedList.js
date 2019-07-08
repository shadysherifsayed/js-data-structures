const Node = require('./SingleNode');
const LinkedList = require("./LinkedList");

module.exports = class SingleLinkedList extends LinkedList {

    constructor() {
        super();
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        this.length++;
        return node;
    }

    append(data) {
        const node = new Node(data);

        if (this.head == null) {
            return this.prepend(data);
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
        this.length++;
        return node;
    }

    insert(data, index) {

        if (this.length <= index) return this.append(data);

        if (index <= 0) return this.prepend(data);

        let prevNode = this.get(index - 1);

        let nextNode = prevNode.next;

        const node = new Node(data, nextNode);

        prevNode.next = node;

        this.length++;

        return node;
    }


    // O(N)
    remove(index) {

        if (index < 0 || index >= this.length) {
            return this.outOfRange();
        }

        let deletedNode;
        if (index == 0) {
            deletedNode = this.head;
            const head = this.head.next;
            this.head = head;
        } else {
            let prevNode = this.get(index - 1);
            deletedNode = this.get(index);
            prevNode.next = deletedNode.next;
        }
        return deletedNode;
        this.length--;

    }

}
