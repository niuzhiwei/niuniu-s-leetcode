const bt = require('./bt')

//递归版本
// const preorder = (root) => {
//     if (!root) {
//         return
//     }
//     console.log(root.val)
//     preorder(root.left)
//     preorder(root.right)
// }
// preorder(bt)

//非递归版本
const preorder = (root) => {
    if (!root) {
        return
    }
    const stack = [root]
    while (stack.length ) {
        const n = stack.pop()
        console.log(n.val)
        if (n.right) {
            stack.push(n.right)
        }
        if (n.left) {
            stack.push(n.left)
        }
    }
}
preorder(bt)