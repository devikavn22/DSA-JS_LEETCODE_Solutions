var MyQueue = function() {
    this.stack1 = []; // Used for push operations
    this.stack2 = []; // Used for pop and peek operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};


var myQueue = new MyQueue();
myQueue.push(1);   // Queue: [1]
myQueue.push(2);   // Queue: [1, 2]
console.log(myQueue.peek()); // Returns 1
console.log(myQueue.pop());  // Returns 1, Queue: [2]
console.log(myQueue.empty()); // Returns false


// Time and Space Complexities:

// to transfer elements from stack1 to stack2 only when stack2 is empty. 
// This ensures an amortized O(1) time complexity for each operation.

// Worst-case space complexity: O(n)
// At any time, all n elements are either in stack1 or stack2, but never duplicated.
// Thus, the total space required remains O(n).