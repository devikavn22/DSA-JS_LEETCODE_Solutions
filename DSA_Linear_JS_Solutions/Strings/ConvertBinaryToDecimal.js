function binaryToDecimal(binaryStr) {
    let decimal = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        decimal = decimal * 2 + Number(binaryStr[i]);
    }
    return decimal;
}


/* 
Time Complexity:
The function iterates through binaryStr exactly once.

Since the length of binaryStr is n, the loop runs O(n) times.

Each iteration performs constant-time operations: multiplication, addition, and type conversion.

✅ Final Time Complexity: O(n) (linear time complexity)

Space Complexity:
The function uses a single integer variable (decimal), which takes O(1) space.

The input binaryStr is not modified or copied, so no extra memory is used.

✅ Final Space Complexity: O(1) (constant space complexity)

*/


// Solution 2
// const binary = "1011"; // Binary representation of 11
const decimal = parseInt(binary, 2);
console.log(decimal); // Output: 11



// The parseInt() function takes two arguments:

/* The binary string ("1011").

The radix (base) of the number system (for binary, it's 2).

It converts the binary string into a decimal number. */