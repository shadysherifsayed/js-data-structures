// const node = require('./Node');

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(data = null) {
        this.root = data ? new Node(data) : null;
        this.length = data ? 1 : 0;
    }

    insert(data) {

        const newNode = new Node(data);

        let node = this.root;

        if (node == null) {
            this.root = newNode;
        }

        else {
            while (true) {
                if (data > node.data) {
                    if (node.right == null) {
                        node.right = newNode;
                        break;
                    }
                    node = node.right;
                } else {
                    if (node.left == null) {
                        node.left = newNode;
                        break;
                    }
                    node = node.left;
                }
            }
        }
        this.length++;
        return newNode;
    }

    get(data) {

        let node = this.root;

        while (node) {
            if (node.data == data) {
                return data;
            } else if (data > node.data) {
                node = node.right;
            } else if (data < node.data) {
                node = node.left;
            }
        }

        return null;
    }

    remove(data) {

        const deleteNode = this.get(data);

        if (deleteNode == null) return;

        let parentNode = null;
        let node = this.root;

        while (node) {
            parentNode = node;
            if (node.data == data) {
                parentNode.right = node.right;
                return true;
            } else if (data > node.data) {
                node = node.right;
            } else if (data < node.data) {
                node = node.left;
            }
        }
    }
}


const bst = new BST();

[9, 4, 20, 1, 6, 15, 170].forEach(data => bst.insert(data))

console.log(bst.remove(4));
