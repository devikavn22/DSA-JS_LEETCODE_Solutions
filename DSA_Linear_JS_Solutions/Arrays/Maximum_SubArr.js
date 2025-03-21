/**
 * @param {number[]} nums
 * @return {number}
 */


// find the subarray with the largest sum, and return its sum.

var maxSubArray = function(nums) {
    let current_sum = nums[0];
    let max_sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        current_sum = Math.max(nums[i], current_sum + nums[i]);
        max_sum = Math.max(max_sum, current_sum);
    }
    
    return max_sum;
};

// Input
// nums =
// [-2,1,-3,4,-1,2,1,-5,4]
// Output
// 6

/* 

Time complexity: O(n), as we only iterate through the array once.
Space complexity: O(1), as we only use a few variables for storing the sum.
*/