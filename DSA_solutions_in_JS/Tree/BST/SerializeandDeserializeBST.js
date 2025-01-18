// Serialize and Deserialize BST

class TreeNode {
    constructor(val){
        this.val=val;
        this.left=this.right=null;
    }
}
  
  // Serialize the BST to a compact string
  function serialize(root) {
    const result = [];
  
    function preorder(node) {
      if (!node) return;
      result.push(node.val);
      preorder(node.left);
      preorder(node.right);
    }
  
    preorder(root);
    return result.join(","); // Compact representation as comma-separated values
  }
  
  // Deserialize the string back to the BST
  function deserialize(data) {
    if (!data) return null;
  
    const values = data.split(",").map(Number);
    let index = 0;
  
    function buildTree(lower, upper) {
      // Base case: If no values are left or the current value is out of range, return null
      if (index === values.length || values[index] < lower || values[index] > upper) {
        return null;
      }
  
      const val = values[index++];
      const node = new TreeNode(val);
      node.left = buildTree(lower, val); // Left subtree has upper bound of the current value
      node.right = buildTree(val, upper); // Right subtree has lower bound of the current value
      return node;
    }
  
    return buildTree(-Infinity, Infinity);
  }
  
  // Example Usage
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  
  console.log("Original Tree:", root);
  
  const serialized = serialize(root);
  console.log("Serialized Tree:", serialized);
  
  const deserialized = deserialize(serialized);
  console.log("Deserialized Tree:", deserialized);
  


//   Complexity:
//   Time Complexity:

//   Serialization: 
//   O(n), where n is the number of nodes in the tree.

//   Deserialization: 
//   O(n), as each node is processed exactly once.


//   Space Complexity:

//   Serialization: 
//   O(n) to store the serialized string.
//   Deserialization: 
//   O(n) for the array and recursive stack.