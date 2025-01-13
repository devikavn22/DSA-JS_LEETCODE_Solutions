function maximumElementAfterOperations(arr) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Initialize the first element to 1 (as per the condition)
    let maxElement = 1;

    // Step 3: Adjust the array to meet conditions
    for (let i = 1; i < arr.length; i++) {
        // Ensure the current element is at most 1 greater than the previous and positive
        arr[i] = Math.min(arr[i], maxElement + 1);
        maxElement = arr[i];
    }

    // Step 4: Return the maximum value in the adjusted array
    return maxElement;
}

// Example usage:
console.log(maximumElementAfterOperations([2, 2, 1, 2, 1])); // Output: 2
console.log(maximumElementAfterOperations([100, 1, 1000])); // Output: 3
console.log(maximumElementAfterOperations([1, 2, 3, 4, 5])); // Output: 5

