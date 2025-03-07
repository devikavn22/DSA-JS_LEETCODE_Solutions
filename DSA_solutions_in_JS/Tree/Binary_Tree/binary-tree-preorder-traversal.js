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
 * @return {number[]}
 */


// 1. Recursive Approach:
var preorderTraversal = function(root) {
    let result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val); // Visit node
        dfs(node.left);  // Go left
        dfs(node.right); // Go right
    }
    
    dfs(root);
    return result;
};
// Recursive	TC: O(n)	SC: O(n) (worst), O(log n) (best)	-->> Simple but can cause stack overflow

// 2. Iterative Approach (Using Stack)
var preorderTraversal = function(root) {
    if (!root) return [];
    
    let stack = [root], result = [];
    
    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right); // Push right first
        if (node.left) stack.push(node.left);   // Push left last (so it gets processed first)
    }
    
    return result;
};
// Iterative (Stack)	TC: O(n)	SC: O(n) (worst), O(log n) (best)	Avoids recursion overhead

// 3. Optimized Approach - Morris Traversal (O(1) Space):
var preorderTraversal = function(root) {
    let result = [];
    let curr = root;

    while (curr) {
        if (!curr.left) {
            result.push(curr.val);  // Visit node
            curr = curr.right;
        } else {
            let prev = curr.left;
            while (prev.right && prev.right !== curr) {
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = curr;  // Create a thread
                result.push(curr.val); // Visit node before going left
                curr = curr.left;
            } else {
                prev.right = null; // Remove the thread
                curr = curr.right;
            }
        }
    }
    
    return result;
};


//Morris Traversal	TC: O(n)	SC:O(1)	Efficient but modifies tree temporarily


/* 
Use recursion if tree depth is not a concern.
Use iteration (stack-based) for a safe, efficient, and simple solution.
Use Morris Traversal if you want O(1) space and don't mind modifying the tree.
*/