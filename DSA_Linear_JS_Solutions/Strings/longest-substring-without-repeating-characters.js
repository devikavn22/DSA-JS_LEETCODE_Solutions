/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));         // Output: 0
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3



/* 
Time Complexity Analysis:
Each character is processed once (O(n)).

The left pointer never moves back, ensuring each character is visited at most twice.

Thus, O(n) time complexity.

Space Complexity Analysis:
Uses a HashMap that stores at most m unique characters (m is the character set size).

If m is much smaller than n, the space complexity is O(min(n, m)).
*/