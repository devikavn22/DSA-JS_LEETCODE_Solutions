var myAtoi = function (s) {
    let i = 0, sign = 1, result = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Step 1: Ignore leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits into integer
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');

        // Step 4: Handle overflow
        if (sign * result > INT_MAX) return INT_MAX;
        if (sign * result < INT_MIN) return INT_MIN;

        i++;
    }

    return sign * result;
};

// Test cases
console.log(myAtoi("42"));          // Output: 42
console.log(myAtoi("   -042"));     // Output: -42
console.log(myAtoi("1337c0d3"));    // Output: 1337
console.log(myAtoi("0-1"));         // Output: 0
console.log(myAtoi("words and 987")); // Output: 0


//  O(n) time complexity
// O(1) space complexity

/* 
Single pass (O(n)) – The algorithm processes the string in one pass, iterating through it at most once.
Constant space (O(1)) – It only uses a few integer variables (i, sign, result, INT_MAX, INT_MIN).
Immediate exit on boundary conditions – It stops processing as soon as an invalid character is encountered.
Prevents overflow early – It clamps values before overflowing, avoiding unnecessary computation.
*/