function maxSlidingWindow(nums, k) {
    if (nums.length === 0) return [];
    
    const result = [];
    const deque = []; // Will store indices of array elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices whose corresponding values are less than nums[i]
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);

        // Add the max value to the result array if the window is valid
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // Output: [1]


// Time Complexity: 

// O(n), where 

// n is the length of the array. Each element is added and removed from the deque at most once.
// Space Complexity: 

// O(k), for the deque, where 

// k is the window size.