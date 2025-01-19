class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findDistance(root, p, q) {
    if (!root) return -1;

    // Helper function to find the Lowest Common Ancestor (LCA)
    function findLCA(node, p, q) {
        if (!node) return null;

        if (node.val === p || node.val === q) return node;

        const left = findLCA(node.left, p, q);
        const right = findLCA(node.right, p, q);

        if (left && right) return node;

        return left || right;
    }

    // Helper function to find the distance from a given node to a target
    function findLevel(node, target, level) {
        if (!node) return -1;

        if (node.val === target) return level;

        const left = findLevel(node.left, target, level + 1);
        if (left !== -1) return left;

        return findLevel(node.right, target, level + 1);
    }

    // Step 1: Find LCA of p and q
    const lca = findLCA(root, p, q);
    if (!lca) return -1;

    // Step 2: Find distances from LCA to p and q
    const distanceP = findLevel(lca, p, 0);
    const distanceQ = findLevel(lca, q, 0);

    // Step 3: Add the distances
    return distanceP + distanceQ;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const p = 4, q = 7;
console.log(findDistance(root, p, q)); // Output: 4


// Find the Lowest Common Ancestor (LCA): The LCA of two nodes is the deepest node that is an ancestor of both nodes.
// Calculate Distance from LCA to Each Node: Use a helper function to find the distance from the LCA to each of the two given nodes.
// Add the Distances: The sum of the distances from the LCA to each node gives the distance between the two nodes.


//Space Complexity:  O(h), where H is the height of the tree.
// Time Complexity: Finding LCA : O(N) + Finding distances: 2×O(n)=O(n) = O(n), So O(n) is the overall time complexity.

