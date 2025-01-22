function longestValidSubstring(word, forbidden) {
    const forbiddenSet = new Set(forbidden);
    let stack = [];
    let maxLength = 0;

    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);

        // Build the current substring from the stack (up to 10 characters)
        let temp = "";
        for (let j = stack.length - 1; j >= 0 && j >= stack.length - 10; j--) {
            temp = stack[j] + temp;

            if (forbiddenSet.has(temp)) {
                // If forbidden substring is found, truncate the stack
                stack = stack.slice(stack.length - temp.length + 1); // Remove forbidden part
                break;
            }
        }

        // Update the maximum valid substring length
        maxLength = Math.max(maxLength, stack.length);
    }

    return maxLength;
}

// Example Usage
const word1 = "cbaaaabc";
const forbidden1 = ["aaa", "cb"];
console.log(longestValidSubstring(word1, forbidden1)); // Output: 4

const word2 = "leetcode";
const forbidden2 = ["de", "le", "e"];
console.log(longestValidSubstring(word2, forbidden2)); // Output: 4
