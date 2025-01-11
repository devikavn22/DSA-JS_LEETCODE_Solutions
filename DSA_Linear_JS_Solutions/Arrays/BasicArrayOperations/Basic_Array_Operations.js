let arr = [10, 20, 30];

// Access elements
console.log(arr[0]); // Output: 10

// Insert elements
arr.push(40); // Add to end
arr.unshift(5); // Add to start
console.log(arr); // Output: [5, 10, 20, 30, 40]

// Delete elements
arr.pop(); // Remove from end
arr.shift(); // Remove from start
console.log(arr); // Output: [10, 20, 30]

// Update element
arr[1] = 25;
console.log(arr); // Output: [10, 25, 30]
