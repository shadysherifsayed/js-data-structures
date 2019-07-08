module.exports = class Stack {

    constructor() {
        this.data = new Array();
        this.top = -1;
    }


    isEmpty() {
        return this.length() == 0;
    }

    length() {
        return this.top + 1;
    }

    push(data) {
        this.data[++this.top] = data;
    }

    pop() {
        if (this.isEmpty()) {
            return console.error('STACK IS EMPTY');
        }
        let data = this.data[--this.top];
        return data;
    }

    peek() {
        if (this.isEmpty()) {
            return console.error("STACK IS EMPTY");
        }
        return this.data[this.top];
    }

    print() {
        for (let index = 0; index <= this.top; index++) {
            console.log(this.data[index])
        }
    }

    clear() {
        this.top = -1;
    }


}
