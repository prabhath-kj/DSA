class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Pushes an element onto the stack.
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Pops and returns the top element from the stack.
    pop() {
        if (!this.isEmpty()) {
            const poppedValue = this.top.value;
            this.top = this.top.next;
            this.size--;
            return poppedValue;
        }
        return null; // Return null for an empty stack.
    }

    // Returns the top element of the stack without removing it.
    peek() {
        if (!this.isEmpty()) {
            return this.top.value;
        }
        return null; // Return null for an empty stack.
    }

    // Checks if the stack is empty.
    isEmpty() {
        return this.size === 0;
    }

    // Returns the size (number of elements) of the stack.
    getSize() {
        return this.size;
    }

    // Clears the stack, removing all elements.
    clear() {
        this.top = null;
        this.size = 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(34);

console.log("Stack size:", stack.getSize()); // Output: Stack size: 2
console.log("Top element:", stack.peek()); // Output: Top element: 34
console.log("Popped element:", stack.pop()); // Output: Popped element: 34
console.log("Stack is empty:", stack.isEmpty()); // Output: Stack is empty: false
stack.clear();
console.log("Stack is empty after clear:", stack.isEmpty()); // Output: Stack is empty after clear: true
