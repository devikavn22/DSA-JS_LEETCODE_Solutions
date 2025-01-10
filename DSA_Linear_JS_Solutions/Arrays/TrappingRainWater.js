/*
optimized solution to calculate the trapped rainwater using 
the two-pointer approach in JavaScript. This approach has a time 
complexity of O(n) and a space complexity of O(1)
*/

function trap(height) {
    if (height.length < 3) return 0; // If less than 3 bars, no water can be trapped

    let left = 0; // Left pointer
    let right = height.length - 1; // Right pointer
    let leftMax = 0; // Maximum height on the left
    let rightMax = 0; // Maximum height on the right
    let waterTrapped = 0; // Total water trapped

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

// Example usage:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9


/*
Trapping Rain Water:
For any position i:
Water at i=min⁡(leftMax,rightMax)−height[i]
>> leftMax: The tallest bar to the left of i
>> rightMax: The tallest bar to the right of i
>> height[i]: The height of the bar at position i

*/