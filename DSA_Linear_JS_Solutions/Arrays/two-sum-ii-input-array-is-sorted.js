var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];  // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

/* 


 Optimal Approach: Two Pointers
 Intuition:
Use two pointers: left at the beginning, right at the end of the array.

Move them inward based on whether the current sum is smaller or greater than the target.

 Steps:
Initialize left = 0 and right = numbers.length - 1.

While left < right:

Calculate sum = numbers[left] + numbers[right].

If sum == target: Return [left + 1, right + 1] (because array is 1-indexed).

If sum < target: Move left pointer to the right → left++.

If sum > target: Move right pointer to the left → right--.



Time & Space Complexity:
Time: O(n), where n is the length of the array.

Space: O(1), constant space as required.



*/