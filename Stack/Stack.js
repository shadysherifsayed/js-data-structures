class Stack {
    constructor(size) {
        this.data = new Array(size);
        this.top = -1;
        this.size = size;
    }

    isFull() {
        return this.length() == this.size;
    }

    isEmpty() {
        return this.length() == 0;
    }

    length() {
        return this.top + 1;
    }

    push(data) {
        if (this.isFull()) {
            return console.error('STACK IS FULL');
        }

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

const stack = new Stack(5);

stack.push(2);
stack.push(4);
stack.push(20);
stack.push(58);
stack.push(87);
stack.push(100);


console.log(stack.data)