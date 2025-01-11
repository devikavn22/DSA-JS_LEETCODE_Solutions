function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the mid element is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Determine if the left side is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target lies within the sorted left side
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Move to the left
            } else {
                left = mid + 1; // Move to the right
            }
        } 
        // Otherwise, the right side is sorted
        else {
            // Check if the target lies within the sorted right side
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Move to the right
            } else {
                right = mid - 1; // Move to the left
            }
        }
    }

    // If we exit the loop, the target was not found
    return -1;
}


console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
console.log(search([1, 3, 5], 5)); // Output: 2
console.log(search([7,8,1,2,3,4,5,6], 2)); // Output: 3


/*
Time Complexity
The binary search ensures 
O(logn) runtime.
Space Complexity

The solution uses 
O(1) space as it only uses a few variables.
*/