// Merge two sorted arrays (With/Without extra space):

function merge(nums1, m, nums2, n) {
    // Start from the end of both arrays and the end of nums1
    let i = m - 1; // Pointer for the last element in nums1's actual data
    let j = n - 1; // Pointer for the last element in nums2
    let k = m + n - 1; // Pointer for the last position in nums1

    // Merge the arrays starting from the largest elements
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // No need to check for remaining elements in nums1 since they're already in place
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]


// Time Complexity: 

// O(m+n)
// Space Complexity: 

// O(1)