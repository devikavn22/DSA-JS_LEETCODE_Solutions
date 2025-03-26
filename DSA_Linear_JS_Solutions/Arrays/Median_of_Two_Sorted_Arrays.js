
// 1) Merge Sort merging technique.

    /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }

    while (i < nums1.length) merged.push(nums1[i++]);
    while (j < nums2.length) merged.push(nums2[j++]);

    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid-1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

/* 
Time Complexity: O(m + n)	We traverse both arrays once (O(m + n)) to merge them. 
Finding the median is O(1), so the total complexity remains O(m + n).
Space Complexity: O(m + n)	We store the merged array explicitly, which requires additional space.

*/







// 2) 
"Two-Pointer Merge" 
var findMedianSortedArrays = function(nums1, nums2) {
    // size of two given arrays:
    const n1 = nums1.length, n2 = nums2.length;
    const n = n1 + n2; // total size
    // required indices:
    const ind2 = Math.floor(n / 2);
    const ind1 = ind2 - 1;
    let cnt = 0;
    let ind1el = -1, ind2el = -1;

    // apply the merge step:
    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            if (cnt === ind1) ind1el = nums1[i];
            if (cnt === ind2) ind2el = nums1[i];
            cnt++;
            i++;
        }
        else {
            if (cnt === ind1) ind1el = nums2[j];
            if (cnt === ind2) ind2el = nums2[j];
            cnt++;
            j++;
        }
    }

    // copy the left-out elements:
    while (i < n1) {
        if (cnt === ind1) ind1el = nums1[i];
        if (cnt === ind2) ind2el = nums1[i];
        cnt++;
        i++;
    }
    while (j < n2) {
        if (cnt === ind1) ind1el = nums2[j];
        if (cnt === ind2) ind2el = nums2[j];
        cnt++;
        j++;
    }

    // Find the median:
    if (n % 2 === 1) {
        return ind2el;
    }

    return (ind1el + ind2el) / 2.0;
};
/* 
Time Complexity: O(m + n)	The algorithm processes all elements once in a single pass. 
It iterates through both arrays in a linear scan.

Space Complexity: O(1)	
No extra space is used apart from a few variables (ind1el, ind2el, cnt). No merged array is created.


approach to find the median of two sorted arrays
 without actually merging them. It is inspired by the merge step in the Merge Sort algorithm */



//  3) Binary Search : Binary search approach	TC : O(log(min(m, n))) ,	SC: O(1-->>>  Most efficient

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1); // Ensure nums1 is smaller

    let x = nums1.length, y = nums2.length, low = 0, high = x;

    while (low <= high) {
        let midX = Math.floor((low + high) / 2);
        let midY = Math.floor((x + y + 1) / 2) - midX;

        let leftX = midX ? nums1[midX - 1] : -Infinity;
        let rightX = midX < x ? nums1[midX] : Infinity;
        let leftY = midY ? nums2[midY - 1] : -Infinity;
        let rightY = midY < y ? nums2[midY] : Infinity;

        if (leftX <= rightY && leftY <= rightX) {
            return (x + y) % 2 ? Math.max(leftX, leftY) : (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
        }
        leftX > rightY ? (high = midX - 1) : (low = midX + 1);
    }
};
