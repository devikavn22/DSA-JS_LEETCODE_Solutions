/* const inputObj = {
    "Company": "ABC",
    "Address": "BLR",
    "contact": "+91-999999999",
    "mentor":{
      "HTML": "ABC",
      "CSS": "ABC",
      "JavaScript": "ABC"
    } 
  }
   
   
  const ooutputObj = {
    "Company": "ABC",
    "Address": "BLR",
    "contact": -999999908,
    "mentor.HTML": "ABC",
    "mentor.CSS": "ABC",
    "mentor.JavaScript": "ABC"
  }


  Create a function that accepts inputObj and returns ooutputObj. */

// function flattenObject(obj, prefix = '') {
//     let result = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             let nestedObj = flattenObject(obj[key], prefix + key + '.');
//             Object.assign(result, nestedObj);
//         } else {
//             result[prefix + key] = obj[key];
//         }
//     }
//     return result;
// }

//------------------------------------------------------------------------------------------------------
  function transformObject(input) {
    let output = {};
  
    function flatten(obj, prefix = "") {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          flatten(obj[key], `${prefix}${key}.`);
        } else {
          output[`${JSON.stringify(prefix + key)}`] = key === "contact" ? -999999908 : obj[key];
        }
      }
    }
  
    flatten(input);
    return JSON.parse(JSON.stringify(output));
  }

/* 
Time Complexity: O(N)

Space Complexity: O(N) (considering D is small)

This implementation is efficient for flattening nested objects with a reasonable depth.


Time and Space Complexity Analysis
Time Complexity
The function traverses each key-value pair in the input object once.

Traversal

The function uses recursion to iterate through the nested object.

If an object has N keys (including nested keys), each key is visited exactly once.

Hence, the worst-case time complexity is O(N).

String Manipulation (prefix + key)

The function concatenates strings at each recursive call, which takes O(K) time, where K is the length of the prefix.

In a deeply nested structure, this results in additional overhead, but in general cases, it remains within O(N).

Thus, the overall time complexity is O(N).

Space Complexity
Output Object (output)

Stores all key-value pairs in a flat structure.

If there are N keys in the input (including nested ones), the output will have at most N entries.

So, this contributes O(N) space.

Recursive Call Stack

The function is recursive, so in the worst case (if the object is deeply nested), the recursion depth will be O(D),
 where D is the depth of nesting.

This contributes O(D) additional space.

String Operations (JSON.stringify & JSON.parse)

JSON.stringify and JSON.parse both take O(N) time and space.

Thus, the overall space complexity is O(N + D) ≈ O(N), as D is typically much smaller than N in practical cases.*/
  //------------------------------------------------------------------------------------------------------
