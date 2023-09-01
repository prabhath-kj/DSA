class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value){
    this.items.push(value)
  }
  dequeue(value){
    if(this.items.length){
       const value=this.items.shift()
       return value
    }
    return null

  }
}

const queue=new Queue()
queue.enqueue(45)
queue.enqueue(67)
console.log(queue.dequeue());