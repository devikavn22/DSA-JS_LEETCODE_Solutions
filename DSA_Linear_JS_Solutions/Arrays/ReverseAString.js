// 1) Solution 1: Two-pointer swap
var reverseString = function(s) {
    let left = 0, right = s.length - 1;

while (left < right) {
    // Swap the characters
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
}
};

let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); [ 'o', 'l', 'l', 'e', 'h' ]
// This solution modifies the input array in place as required and runs efficiently in O(n) time complexity with O(1) extra space

//----------------------------------------------------------------
// 2) Solution 2
var reverseString = function(s) {
    s.reverse(); // O(1) space complexity --reverses the elements of an array in place (without using extra space).
};

