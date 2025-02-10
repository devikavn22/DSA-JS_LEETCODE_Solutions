// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to check if linked list is palindrome
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle using fast and slow pointers
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null, curr = slow;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // Step 3: Compare first half and reversed second half
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Test cases
let head1 = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(head1)); // Output: true

let head2 = createLinkedList([1, 2]);
console.log(isPalindrome(head2)); // Output: false
