function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0, col = cols - 1; // Start at the top-right corner

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; // Target found----return true
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }

    return false; // Target not found
}

// Example Usage
const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];
const target = 5;

console.log(searchMatrix(matrix, target)); // Output: true

//Used: Staircase search (O(n + m))
// Rows and columns sorted independently