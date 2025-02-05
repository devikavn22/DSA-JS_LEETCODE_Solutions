class MyStack {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);
        // Rotate the queue to make the last inserted element come to the front
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    pop() {
        return this.queue.shift(); // Removes and returns the front element
    }

    top() {
        return this.queue[0]; // Returns the front element without removing it
    }

    empty() {
        return this.queue.length === 0;
    }
}


let myStack = new MyStack();
myStack.push(1);    // Stack: [1]
myStack.push(2);    // Stack: [2, 1] (Reordered)
console.log(myStack.top()); // Output: 2
console.log(myStack.pop()); // Output: 2, Stack: [1]
console.log(myStack.empty()); // Output: false


// Follow-Up Question: Why Use One Queue Instead of Two?
// Using one queue reduces space complexity (O(n) instead of O(2n)).
// This method is more memory efficient while maintaining the same time complexity as a two-queue solution.


// Overall Time Complexity Analysis
// Let's analyze each operation carefully:

// Operation	Complexity
// push(x)	O(n) (Rearranges elements after each push)
// pop()	O(1) (Removes front element)
// top()	O(1) (Accesses front element)
// empty()	O(1) (Checks length)
// Now, considering the worst-case scenario:

// If we perform m operations, and all of them are push operations, the worst case is O(m²) because each push takes O(n), 
// and we might have up to m pushes in total.
// pop(), top(), and empty() operations remain O(1), so they don't contribute significantly to the overall complexity.