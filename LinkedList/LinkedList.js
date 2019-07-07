const Node = require('Node');

class LinkedList {
    
    constructor(head = null) {
        this.head = head;
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

        let prevNode = this.head;
        let nextNode = prevNode.next;

        for (let i = 0; i < index; i++) {
            if (i == index - 1) {
                break;
            }
            prevNode = prevNode.next;
            nextNode = nextNode.next;
        }
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
            let prevNode = this.head;
            for (let i = 1; i <= index; i++) {
                if (i == index) {
                    let currentNode = prevNode.next;
                    if (currentNode) {
                        prevNode.next = currentNode.next;
                    } else {
                        prevNode.next = null;
                    }
                    break;
                }
                prevNode = prevNode.next;
            }
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

        console.log(currentNode.data);
    }

    outOfRange() {
        return console.error('OUT OF RANGE');
    }
}

module.exports = LinkedList;
