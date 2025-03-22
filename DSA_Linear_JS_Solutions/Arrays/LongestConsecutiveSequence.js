/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let maxLength = 0;
    // Longest Consecutive Sequence Using Hash Set
    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // Start of a sequence
            let currentNum = num;
            let currentLength = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
};

// Time Complexity: O(n)

// Space Complexity: O(n)
