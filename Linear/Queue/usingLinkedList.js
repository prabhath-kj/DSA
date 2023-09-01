class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
      return this;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }
  dequeue() {
    if (!this.front) {
      return null;
    }
    const value = this.front.value;
    if (this.front.value === this.rear.value) {
      this.top = null;
      this.rear = null;
      return value
    }
    this.front=this.front.next
    return value
  }
}
const queue=new Queue()
queue.enqueue(45)
queue.enqueue(50)
console.log(queue.dequeue());