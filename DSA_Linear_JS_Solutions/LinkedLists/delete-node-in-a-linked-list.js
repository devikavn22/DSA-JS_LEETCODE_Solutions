// delete-node-in-a-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;  // Copy next node's value into the current node
    node.next = node.next.next;  // Skip the next node, effectively deleting it
};




/* 
⏰ Time complexity: O(1), as we're only modifying the current node
🧺Space complexity: O(1), no extra space is used. */


// another solution:
var deleteNode = function(node) {
    Object.assign(node, node.next);
};



/* Unused Memory Deletion
In Python, Java, JavaScript and Kotlin garbage collector will then handle the deallocation of memory / deleting next node.
But in C++ we have to manually delete next node from memory.

class Solution {
public:
    void deleteNode(ListNode* node) {
        ListNode* nextNode = node -> next;
        node->val = node->next->val;
        node->next = node->next->next;
        delete nextNode;
    }
}; */