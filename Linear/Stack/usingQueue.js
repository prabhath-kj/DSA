//Stack implementation using Queue

class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value) {
    this.queue1.push(value);
  }
  pop() {
    if (!this.queue1.length) {
      return "under flow";
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const poppedValue = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedValue;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
console.log(stack);
