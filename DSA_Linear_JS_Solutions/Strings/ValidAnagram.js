/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 1) Optimized Approach (Sorting) – O(N log N) Time Complexity:
var isAnagram = function(s, t) {
     // base case
     if(s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// 2)  Using Array as Buckets: 
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    // for (var i = 0; i < count.length; i++) {
    //     if (count[i] !== 0) {
    //         return false;
    //     }
    // }
    
    return count.every(val => val === 0);

};
/* 
Track character frequencies using an array.
Compare both frequency counts.

Time Complexity of isAnagram Function:

The function loops through s once → O(N).
The .every() method checks 26 values → O(26) ≈ O(1).
Overall, the function runs in O(N) time complexity, which is efficient.
*/