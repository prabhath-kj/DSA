class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next){
        current=current.next
    }
    current.next=newNode
  }
  prepend(value){
    const newNode=new Node(value)
    if(!this.head){
        this.head=newNode
        return
    }
    newNode.next=this.head
    this.head=newNode
  }
  search(value){
    let current =this.head
    while(current){
        if(current.value==value){
            return true
        }
        current=current.next
    }
    return false
  }
  delete(value){
    if(this.head.value==value){
        this.head=this.head.next
    }
    let current=this.head
    while(current.next){
    if(current.next.value==value){
        current.next=current.next.next
        return
    }
    current=current.next
    }
    return -1
  }
  reverse(){
    let prev=null
    let current=this.head
    let next=null
    while(current){
        next=current.next
        current.next=prev
        prev=current
        current=next
    }
    this.head=prev
  }
}
const myLinkedList =new LinkedList()
myLinkedList.append(12)
myLinkedList.append(45)
myLinkedList.append(50)
myLinkedList.append(4)

myLinkedList.delete(50)
console.log(JSON.stringify(myLinkedList))