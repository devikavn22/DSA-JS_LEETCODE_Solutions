/**
 * @param {number[]} heights
 * @return {number}
 */


/* 
Problem: Given an array heights, return the number of indices where heights[i] != sorted(heights)[i].

Optimized Solution (Sorting)
TC: 
O(nlogn)

SC: 
O(n)
*/

var heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) count++;
    }

    return count;
};


// using Bucket/ Counting sort:
var heightChecker = function(heights) {
    // Step 1: Create a frequency array for heights (bucket sort)
    let maxHeight = 100; // Assuming height is between 1 and 100
    let countArr = new Array(maxHeight + 1).fill(0);

    // Count occurrences of each height
    for (let height of heights) {
        countArr[height]++;
    }

    // Step 2: Construct the sorted order from the frequency array
    let expected = [];
    for (let i = 1; i <= maxHeight; i++) {
        while (countArr[i] > 0) {
            expected.push(i);
            countArr[i]--;
        }
    }

    // Step 3: Compare original and sorted arrays
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) count++;
    }

    return count;
};


/* 
we can replace the built-in sort method with bucket sort (or counting sort) since the input values are 
non-negative integers and fall within a limited range.

Why Bucket Sort?
The given problem is about sorting heights, which are integers within a reasonable range (1 to 100).

Bucket sort (or counting sort, a variation of bucket sort for integers) is 
faster than comparison-based sorting (like quicksort or mergesort) when dealing with small, limited-range numbers.

Time Complexity: 

O(n+k), where 

n is the number of elements and 

k is the range of numbers.
*/