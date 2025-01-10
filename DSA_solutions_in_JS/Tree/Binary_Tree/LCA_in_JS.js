/*** Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia:
 “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has 
 both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

***/

// Definition for a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Build the binary tree here:
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// The function to find the lowest common ancestor LCA:
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
};

// Nodes for which LCA is to be found
const p = root.left; // Node 5
const q = root.right; // Node 1

// Call the function and log the output
const result = lowestCommonAncestor(root, p, q);
console.log(result.val); // Output: 3
