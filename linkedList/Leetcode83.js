/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let p = head
    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return head
};

//时间复杂度o(n) 空间复杂度o(1)