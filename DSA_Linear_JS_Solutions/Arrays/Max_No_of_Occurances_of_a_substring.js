/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    const freqMap = new Map();
    let maxCount = 0;

    for (let i = 0; i <= s.length - minSize; i++) {
        const sub = s.substring(i, i + minSize);
        const uniqueChars = new Set(sub);

        if (uniqueChars.size <= maxLetters) {
            freqMap.set(sub, (freqMap.get(sub) || 0) + 1);
            maxCount = Math.max(maxCount, freqMap.get(sub));
        }
    }

    return maxCount;
};

/* 

We are looping through all substrings of length minSize:

There are about O(n - minSize + 1) ≈ O(n) substrings of length minSize.

For each substring:

substring(i, i + minSize) is O(minSize).

Creating a Set(sub) to count unique characters is also O(minSize).

O(minSize)≈ O(n)


SC:
freqMap stores up to O(n) substrings of length minSize (worst case).

Each substring can have up to minSize characters.

Set to count unique characters takes O(minSize) per iteration (but this is temporary).
 since minSize is small (max 26), space complexity is approximately O(n) in practice.



*/