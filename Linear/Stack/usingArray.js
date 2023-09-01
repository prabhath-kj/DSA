class Stack {
    constructor() {
        this.items = [];
    }

    // Pushes an element onto the stack.
    push(value) {
        this.items.push(value);
    }

    // Pops and returns the top element from the stack.
    pop() {
        if (this.isEmpty()) {
            return null; // Return null for an empty stack.
        }
        return this.items.pop();
    }

    // Returns the top element of the stack without removing it.
    peek() {
        if (this.isEmpty()) {
            return null; // Return null for an empty stack.
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size (number of elements) of the stack.
    size() {
        return this.items.length;
    }

    // Clears the stack, removing all elements.
    clear() {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size:", stack.size()); // Output: Stack size: 3
console.log("Top element:", stack.peek()); // Output: Top element: 30
console.log("Popped element:", stack.pop()); // Output: Popped element: 30
console.log("Stack is empty:", stack.isEmpty()); // Output: Stack is empty: false
stack.clear();
console.log("Stack is empty after clear:", stack.isEmpty()); // Output: Stack is empty after clear: true
