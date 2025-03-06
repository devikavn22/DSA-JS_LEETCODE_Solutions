var frequencySort = function(s) {
    // Step 1: Count frequency of each character
    let freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Sort characters by frequency in descending order
    let sortedChars = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // Step 3: Build the result string
    let result = "";
    for (let [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }

    return result;
};


/* 
inal Time Complexity
Step 1: O(n) → Frequency Count
Step 2: O(k log k) → Sorting
Step 3: O(n) → Constructing the string
Since k ≤ 62, we approximate O(k log k) ≈ O(1), leading to:

Overall Complexity: O(n log k) ≈ O(n)


Space Complexity Analysis
freqMap stores unique characters → O(k)
sortedChars stores sorted key-value pairs → O(k)
result string stores the final output → O(n)
Total Space Complexity: O(n + k) ≈ O(n)
Since k is small, we approximate the space complexity to O(n).
*/