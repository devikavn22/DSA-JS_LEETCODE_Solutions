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
 * @param {number} val
 * @return {TreeNode}
 */


/* 
Approach
Since it's a BST, we can take advantage of its properties:
Left subtree contains nodes with values less than the current node.
Right subtree contains nodes with values greater than the current node.
We traverse the tree recursively or iteratively:
If val is smaller than the current node, search in the left subtree.
If val is greater than the current node, search in the right subtree.
If val matches the current node’s value, return the node.

*/

var searchBST = function(root, val) {
    if (!root || root.val === val) return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};

/* 
Time Complexity: 

O(h), where 
ℎ
h is the height of the tree. In the worst case (skewed tree), 

h=O(n), and in the best case (balanced tree), 
h=O(logn).

Space Complexity: 

O(h) due to recursion stack.


*/


var searchBST = function(root, val) {
    while (root && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    }
    return root;
};
/* 
Time Complexity: 

O(h), same as the recursive approach.

Space Complexity: 

O(1) since we are not using extra space for recursion.
*/