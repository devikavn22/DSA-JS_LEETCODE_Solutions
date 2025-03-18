/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    
    return false;
};

/* Explanation:
Optimized Approach (Using Set) – O(N) Time Complexity

Use a Set to track numbers seen so far.
If a number appears again, return true. 

Return true if any integer appears at least twice in the array, otherwise return false.

*/