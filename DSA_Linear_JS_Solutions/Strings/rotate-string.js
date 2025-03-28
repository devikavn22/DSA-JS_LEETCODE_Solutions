/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};


/* 

Concatenation (s + s) creates a string that contains all possible rotations of s.

.includes(goal) checks if goal appears in the concatenated string.

The length check ensures that s and goal have the same number of characters before proceeding.

Complexity Analysis:


Time Complexity: 

O(N) (Checking substring using .includes is O(N)).

Space Complexity: 

O(N) (Due to string concatenation).
*/