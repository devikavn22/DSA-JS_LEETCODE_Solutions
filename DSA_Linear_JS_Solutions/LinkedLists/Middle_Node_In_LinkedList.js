// Two Pointer Approach for finding Middle Node in a LinkedList

// Definition for singly-linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to find the middle node
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // Return the middle node
};

// Function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(); // Dummy node
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next; // Return the actual head
}

// Function to print the linked list from the middle node
function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test Case 1
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let middle1 = middleNode(head1);
printLinkedList(middle1); // Expected Output: [3, 4, 5]

// Test Case 2
let head2 = createLinkedList([1, 2, 3, 4, 5, 6]);
let middle2 = middleNode(head2);
printLinkedList(middle2); // Expected Output: [4, 5, 6]


// Time & Space Complexity:
// Time Complexity: 

// O(N), where 

// N is the number of nodes (since we traverse the list only once).
// Space Complexity: 

// O(1), as we use only two extra pointers.
