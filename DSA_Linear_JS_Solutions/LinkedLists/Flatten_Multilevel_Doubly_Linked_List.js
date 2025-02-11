// Flatten a Multilevel Doubly Linked List:


// Definition for a Node
function Node(val, prev = null, next = null, child = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

// Flatten function
var flatten = function(head) {
    if (!head) return null;

    let current = head;

    while (current) {
        if (current.child) {
            let nextNode = current.next;
            let childTail = getTail(current.child);

            current.next = current.child;
            current.next.prev = current;
            current.child = null;

            if (nextNode) {
                childTail.next = nextNode;
                nextNode.prev = childTail;
            }
        }
        current = current.next;
    }

    return head;
};

// Helper function to get the tail of a child list
function getTail(node) {
    while (node.next) {
        node = node.next;
    }
    return node;
}

// Helper function to print the list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Sample Input: Create a multilevel doubly linked list
let head = new Node(1);
head.next = new Node(2, head);
head.next.next = new Node(3, head.next);
head.next.next.next = new Node(4, head.next.next);
head.next.next.child = new Node(7);
head.next.next.child.next = new Node(8, head.next.next.child);
head.next.next.child.next.child = new Node(11);
head.next.next.child.next.child.next = new Node(12, head.next.next.child.next.child);

// Flatten and print
console.log("Before flattening:");
printList(head);

let flattenedHead = flatten(head);

console.log("After flattening:");
printList(flattenedHead);



/* Time Complexity: 

O(n)
Each node is processed only once:

We traverse through each node once (while (current) loop).
For nodes with a child, we find the tail of the child list using getTail(node), which in the worst case takes linear time.
However, the total number of nodes remains 

O(n), so the overall traversal still remains 

O(n).

Space Complexity: 

O(1)
No extra data structures like a stack or recursion call stack.
Only a few extra pointers (current, nextNode, childTail) are used, which does not scale with input size.
Everything is modified in-place.
 Final Space Complexity: 

O(1) (constant space).
*/


/*



var flatten = function(head) {
    if (!head) return null;

    let current = head;

    while (current) {
        if (current.child) {
            let nextNode = current.next;
            let childTail = getTail(current.child);

            current.next = current.child;
            current.next.prev = current;
            current.child = null;

            if (nextNode) {
                childTail.next = nextNode;
                nextNode.prev = childTail;
            }
        }
        current = current.next;
    }

    return head;
};

// Helper function to get the tail of a child list
function getTail(node) {
    while (node.next) {
        node = node.next;
    }
    return node;
}

*/