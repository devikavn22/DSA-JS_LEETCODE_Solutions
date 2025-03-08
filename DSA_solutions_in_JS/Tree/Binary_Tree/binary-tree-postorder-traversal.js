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

// 1. Recursive Approach (Simple):
var postorderTraversal = function (root) {
    let result = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);  // Left subtree
        traverse(node.right); // Right subtree
        result.push(node.val); // Root
    }

    traverse(root);
    return result;
};

/* 
Recursive	
TC:
O(N)	
SC:
O(N)	Simple, but uses stack space.
*/

// 2. Iterative Approach Using Two Stacks:
var postorderTraversal = function(root) {
    if (!root) return [];

    let stack1 = [root], stack2 = [];
    let result = [];

    while (stack1.length) {
        let node = stack1.pop();
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    while (stack2.length) {
        result.push(stack2.pop().val);
    }

    return result;
};

/* 
Two Stacks	
TC:
O(N)	
SC:
O(N)	Extra space but easy to implement.
*/


// 3. Iterative Approach Using One Stack (Optimized):
var postorderTraversal = function(root) {
    if (!root) return [];

    let stack = [], result = [];
    let lastVisited = null, current = root;

    while (current || stack.length) {
        if (current) {
            stack.push(current);
            current = current.left; // Move to left child
        } else {
            let peekNode = stack[stack.length - 1];

            if (peekNode.right && peekNode.right !== lastVisited) {
                current = peekNode.right;
            } else {
                result.push(peekNode.val);
                lastVisited = stack.pop();
            }
        }
    }

    return result;
};

/* 
One Stack	
TC:
O(N)	
SC:
O(N)	Optimized, better than two-stack approach.
*/

// 4. Morris Traversal (O(1) Space):
var postorderTraversal = function(root) {
    let result = [];
    let dummy = new TreeNode(0);
    dummy.left = root;
    let curr = dummy;

    while (curr) {
        if (curr.left) {
            let pred = curr.left;
            while (pred.right && pred.right !== curr) {
                pred = pred.right;
            }

            if (!pred.right) {
                pred.right = curr;
                curr = curr.left;
            } else {
                pred.right = null;
                collectReverse(curr.left, pred, result);
                curr = curr.right;
            }
        } else {
            curr = curr.right;
        }
    }

    return result;
};

function collectReverse(from, to, result) {
    let nodes = [];
    while (from !== to) {
        nodes.push(from.val);
        from = from.right;
    }
    nodes.push(to.val);
    nodes.reverse();
    result.push(...nodes);
}

/* 
Morris Traversal	
TC:
O(N)	
SC:
O(1)	Best space complexity, but modifies the tree temporarily.
*/

