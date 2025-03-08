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

// 1) Recursive Inorder Traversal:
var inorderTraversal = function(root) {
    let result = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);   // Visit left subtree
        result.push(node.val); // Visit root
        inorder(node.right);  // Visit right subtree
    }

    inorder(root);
    return result;
};

/* 
Recursive	TC: O(n)	SC: O(h) (call stack)	Simple, but uses stack memory
*/


// 2) Iterative Inorder Traversal Using a Stack:
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
};
/* 
Iterative (Stack)	TC: O(n)	SC: O(h) (explicit stack)	Simulates recursion using a stack
*/

// 3) Morris Inorder Traversal (Optimized Space):
var inorderTraversal = function(root) {
    let result = [];
    let current = root;

    while (current !== null) {
        if (current.left === null) {
            result.push(current.val);
            current = current.right;
        } else {
            let predecessor = current.left;
            while (predecessor.right !== null && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }

    return result;
};

/* 
Morris Traversal	TC: O(n)	SC: O(1)	Most space-efficient (modifies tree temporarily):

If current.left is null → Add current.val to result and move to current.right.
If current.left exists → Find its inorder predecessor (rightmost node in left subtree).
If predecessor's right is null, set it to current and move left.
If predecessor's right is current, restore it to null, visit current, and move right.
Repeat until current becomes null.

*/