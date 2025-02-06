
// 450. Delete Node in a BST ------->> Leetcode--JS Solution

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  var deleteNode = function(root, key) {
      if (!root) return null;
  
      if (key < root.val) {
          root.left = deleteNode(root.left, key);
      } else if (key > root.val) {
          root.right = deleteNode(root.right, key);
      } else {
          // Node to be deleted found
          
          // Case 1: Node has no children
          if (!root.left && !root.right) {
              return null;
          }
  
          // Case 2: Node has one child
          if (!root.left) return root.right;
          if (!root.right) return root.left;
  
          // Case 3: Node has two children
          let minNode = findMin(root.right);
          root.val = minNode.val;
          root.right = deleteNode(root.right, minNode.val);
      }
  
      return root;
  };
  
  // Helper function to find the minimum value node in the right subtree
  function findMin(node) {
      while (node.left) {
          node = node.left;
      }
      return node;
  }
  



//   Searching for the node:

//   If key < root.val, search in the left subtree.
//   If key > root.val, search in the right subtree.
//   If key === root.val, the node to be deleted is found.
//   Handling deletion:
  
//   Case 1: If the node has no children, return null.
//   Case 2: If the node has one child, return the non-null child.
//   Case 3: If the node has two children:
//   Find the smallest node in the right subtree (findMin(root.right)).
//   Replace the current node's value with the smallest node's value.
//   Delete the smallest node recursively from the right subtree. 

// Complexity Analysis:


// Time Complexity: 

/*  O(h) where 

h is the height of the tree (worst case 

O(logn) for balanced BST, 

O(n) for a skewed tree).
Space Complexity: 

O(h) due to recursive function calls on the call stack */