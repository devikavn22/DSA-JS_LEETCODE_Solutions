/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n = s.length;
let result = "";

let i = n - 1;

while (i >= 0) {
    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;

    if (i < 0) break; // No more words to process

    let j = i;

    // Find the start of the word
    while (j >= 0 && s[j] !== ' ') j--;

    // Append the word to result
    if (result.length > 0) result += " ";
    result += s.substring(j + 1, i + 1);

    // Move i to the next word
    i = j - 1;
}

return result;
};

/*
Time & Space Complexity
Time Complexity: O(n) → We traverse the string once.
Space Complexity: O(1) → We use only a few extra variables, no auxiliary arrays.
This solution follows the in-place principle while keeping operations efficient. 
*/



//--------------------SECOND APPROACH
/*
var reverseWords = function(s) {
 return s.split(' ').filter(word => word.length > 0).reverse().join(' ');
};
Time Complexity: O(n)
Space Complexity: O(n)
Why Brute Force? This creates unnecessary intermediate arrays, making it inefficient in terms of space.
*/