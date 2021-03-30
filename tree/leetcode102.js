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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const q = [
        [root, 0]
    ]
    const res = []
    while (q.length) {
        const [n, level] = q.shift()
        if (!res[level]) {
            res.push([n.val])
        } else {
            res[level].push(n.val)
        }
        if (n.left) q.push([n.left, level + 1])
        if (n.right) q.push([n.right, level + 1])
    }
    return res
};