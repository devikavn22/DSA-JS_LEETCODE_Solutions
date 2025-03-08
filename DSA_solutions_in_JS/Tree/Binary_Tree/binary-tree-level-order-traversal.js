// BFS or Level Order Traversal:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []; // If root is null, return an empty array

let result = [];
let queue = [root]; // Initialize queue with the root node

while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    let currentLevel = []; // Store values of the current level
    
    for (let i = 0; i < levelSize; i++) {
        let node = queue.shift(); // Dequeue the first node
        currentLevel.push(node.val);
        
        // Enqueue left and right children if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel); // Add the current level to result
}

return result;
};

// Sample binary tree:
const root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: { 
        val: 20, 
        left: { val: 15, left: null, right: null }, 
        right: { val: 7, left: null, right: null }
    }
};

console.log(levelOrder(root)); 
// Output: [[3], [9, 20], [15, 7]]


/* 
Time & Space Complexity:

Time Complexity: 

O(N) - Each node is processed once.


Space Complexity: 

O(N) - The queue holds nodes for each level.
*/