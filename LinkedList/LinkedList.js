const Node = require('./Node');

module.exports = class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    // O(1)
    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        this.length++;
        return node;
    }

    // O(N)
    append(data) {
        const node = new Node(data);

        if (this.head == null) {
            this.prepend(data);
        } else {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
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

        if (index == 0) {
            const head = this.head.next;
            this.head = head;
        } else {
            let prevNode = this.get(index - 1);
            let deletedNode = this.get(index);
            prevNode.next = deletedNode.next;
        }

        this.length--;

    }

    // O(N)
    get(index) {
        if (index < 0 || index >= this.length) {
            return this.outOfRange();
        }

        let i = 0;
        let currentNode = this.head;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    outOfRange() {
        return console.error('OUT OF RANGE');
    }
}
