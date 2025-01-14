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