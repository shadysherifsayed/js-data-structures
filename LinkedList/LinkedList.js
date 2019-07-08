const Node = require('./DoublyNode');

module.exports = class LinkedList {


    print(node = this.head) {
        console.log(node.data);
        if (!node.next) return;
        this.print(node.next);
    }

    get(index) {

        if (index < 0 || index >= this.length) return this.outOfRange();

        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;
    }


    pop(remove = true) {
        return remove ? this.remove(this.length - 1) : this.get(this.length - 1);
    }

    shift(remove = true) {
        return remove ? this.remove(0) : this.get(0);
    }

    outOfRange() {
        return console.error('OUT OF RANGE');
    }
}
