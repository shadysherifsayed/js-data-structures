class Queue {
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

    enqueue(data) {
        if (this.isFull()) {
            return console.error('QUEUE IS FULL');
        }

        this.data[++this.top] = data;
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.error('QUEUE IS EMPTY');
        }
        let data = this.data[0];
        for (let index = 0; index < this.top; index++) {
            this.data[index] = this.data[index + 1];
        }
        this.data[this.top] == null;
        this.top--;
        return data;
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

const queue = new Queue(5);

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(20);
queue.enqueue(58);
queue.enqueue(87);


for (let index = 0; index < 4; index++) {
    let data = queue.dequeue();

    console.log(`Dequeuing data ${data}, Remaining data ${queue.print()}`);
}