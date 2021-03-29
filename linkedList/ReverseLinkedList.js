//leetcode 206 时间复杂度o(n) 空间复杂度 o(1)

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
var reverseList = function (head) {
    let p1 = head
    let p2 = null
    while (p1) {
        const tmp = p1.next
        p1.next = p2
        p2 = p1
        p1 = tmp
    }
    return p2
};