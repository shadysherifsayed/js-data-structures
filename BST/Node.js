module.exports = class Node {
    constructor(data, parent, left, right) {
        this.data = data;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}
