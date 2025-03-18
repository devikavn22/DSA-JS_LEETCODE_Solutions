// const nested = [1, [2, 3], [4, [5, 6]]];

// // Flatten by 1 level
// const flattened = nested.flat(1);
// console.log(flattened);


// Using Recursion
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
  }
  
  const nested = [1, [2, 3], [4, [5, 6]]];
  const flattened = flattenArray(nested);
  console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]


  // Using Recursion :

  function flattenArray(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], result); // Recursively flatten nested arrays
        } else {
            result.push(arr[i]); // Push non-array elements directly
        }
    }
    return result;
}


const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
/* 
Complexity Analysis
Time Complexity: O(n)
Every element in the nested array is visited exactly once.
Space Complexity: O(n) (in worst case)
If the array is deeply nested, recursion uses additional space in the call stack.
Also, an extra array (result) is used to store flattened values.
🔹 Worst case scenario: Deeply nested structures
 like [ [ [ [1] ] ] ] increase call stack depth → O(n) space due to recursion.
*/






// 2) Using Iterative Approach:

function flattenArrayIterative(arr) {
  let stack = [...arr]; // Copy the array into a stack
  let result = [];

  while (stack.length > 0) {
      let current = stack.pop(); // Get the last element

      if (Array.isArray(current)) {
          stack.push(...current); // Spread the array elements into the stack
      } else {
          result.unshift(current); // Insert at the beginning (to maintain order)
      }
  }
  return result;
}


// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArrayIterative(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
/* 
Complexity Analysis
Time Complexity: O(n)
Every element is processed once.
Space Complexity: O(n)
Stack stores elements temporarily, but no extra recursion stack is needed.
🔹 Better than recursion for very deep nesting because it avoids call stack overflow.
*/