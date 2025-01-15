function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midElement = matrix[Math.floor(mid / cols)][mid % cols];

        if (midElement === target) {
            return true;
        } else if (midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

// Ex: 
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
const target = 3;

console.log(searchMatrix(matrix, target)); // Output: true


// Used : Binary search (O(log(m * n)))
//Matrix behaves as a globally sorted array
// Last element of one row < First element of next row