// 1) Iterative Approach:

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next; // Store next node
        current.next = prev; // Reverse current node's pointer
        prev = current; // Move prev forward
        current = next; // Move current forward
    }

    return prev; // prev becomes the new head
}


// Time & Space Complexity:

// Time Complexity: 

// O(n), where 
// n is the number of nodes (since we iterate through the list once).

// Space Complexity: 

// O(1) since we are using only a few extra pointers (no extra space required).



// 2) Recursive Approach:
function reverseListRecursive(head) {
    if (!head || !head.next) return head;

    let newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

// Time Complexity: 

// O(n) (each node is processed once).
// Space Complexity: 

// O(n) due to the recursive stack.