/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
     const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;

};

/*
We use a stack to keep track of opening brackets.
A hash map (object) stores the mapping of closing brackets to their respective opening brackets.
We iterate through the string:
If the character is a closing bracket, we check:
If the stack is empty or the top of the stack doesn’t match the expected opening bracket, return false.
Otherwise, pop the stack.
If the character is an opening bracket, push it onto the stack.
Finally, if the stack is empty, return true (valid string); otherwise, return false.


--------------------------------
Time Complexity: O(n) → We iterate through s once.
Space Complexity: O(n) → In the worst case, we store all opening brackets in the stack.
*/