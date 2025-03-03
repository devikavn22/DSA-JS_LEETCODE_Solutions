// Expand Around Center Approach: 


var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0, end = 0;
    
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    };
    
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i);     // Odd length palindrome
        let len2 = expandAroundCenter(i, i + 1); // Even length palindrome
        let maxLen = Math.max(len1, len2);
        
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    return s.substring(start, end + 1);
};

// Test cases
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"

/* 
Approach:
Iterate through each character in the string.
Treat each character as a potential center for a palindrome.
Expand outward from the center to check for the longest palindrome.
Consider both even-length and odd-length palindromes. */

/* 
Time Complexity:
O(n²) in the worst case (e.g., "aaaaa"). 

Space Complexity:
O(1)
*/