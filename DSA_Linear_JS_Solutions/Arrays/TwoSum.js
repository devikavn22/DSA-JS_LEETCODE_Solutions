function twoSum(nums, target) {
    const map = new Map(); // Create a map to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement
        
        if (map.has(complement)) {
            // If complement exists in the map, return the indices
            return [map.get(complement), i];
        }
        
        // Otherwise, add the current number and its index to the map
        map.set(nums[i], i);
    }
    
    // Return an empty array if no solution is found (this won't happen per the problem constraints)
    return [];
}

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]



// Time Complexity:
// O(n): Each number in the array is visited only once.

// Space Complexity:
// O(n): The Map can store up to n entries in the worst case.