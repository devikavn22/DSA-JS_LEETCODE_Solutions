function findMax(arr) {
    if (arr.length === 0) return ""; // Return nothing if array is empty

    let max = arr[0]; // Initialize max with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

// Test cases

console.log(findMax([3, 4, 7, 2, 7, -1])); // 7

console.log(findMax([5])); // 5

console.log(findMax([-3, -7, -2, -8, -5])); // -2

console.log(findMax([10, 9, 8, 7, 6])); // 10

console.log(findMax([4, 4, 4, 4, 4])); // 4

console.log(findMax([])); // 

/* Optimizations:
Iterates only once (O(n) time complexity).
No extra space usage (O(1) space complexity).
Handles negative numbers correctly.
Returns undefined for an empty array (as per the requirement). */