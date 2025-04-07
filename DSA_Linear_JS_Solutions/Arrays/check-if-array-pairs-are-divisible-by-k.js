/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const remainderMap = new Map();

    // Step 1: Count remainders
    for (let num of arr) {
        let rem = ((num % k) + k) % k; // handle negative numbers
        remainderMap.set(rem, (remainderMap.get(rem) || 0) + 1);
    }

    // Step 2: Check pairing logic
    for (let [rem, count] of remainderMap.entries()) {
        if (rem === 0) {
            if (count % 2 !== 0) return false;
        } else {
            let otherCount = remainderMap.get(k - rem) || 0;
            if (count !== otherCount) return false;
        }
    }

    return true;
    
};


console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5)); // true
console.log(canArrange([1,2,3,4,5,6], 7));         // true
console.log(canArrange([1,2,3,4,5,6], 10));        // false


/* 

Count the frequency of each remainder modulo k.

Check:

Remainder 0 must be even.

For each r from 1 to k/2:

freq[r] must match freq[k - r].


TC and SC: 

TC: O(n) >>
We iterate through the arr once to compute remainders → O(n)

Then we iterate through the remainder map → at most O(k) (since remainders can range from 0 to k-1)

But since k ≤ 1e5 and n can also go up to 1e5, we consider O(n + k) ⇒ O(n) in practice (because k is not always near n)



SC : O(K) >>
We're using a hash map (or Map) to store the frequency of remainders, which can have at most k unique keys.

So, space usage grows with k → O(k)



*/