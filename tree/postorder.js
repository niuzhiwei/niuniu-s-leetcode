const bt = require('./bt')
// const postorder = (root) => {
//     if (!root) {
//         return
//     }
//     postorder(root.left)
//     postorder(root.right)
//     console.log(root.val)
// }
// postorder(bt)

const postorder = (root) => {
    if (!root) {
        return
    }
    const stack = [root]; //先做先序遍历
    const outputStack = []
    while (stack.length) {
        const n = stack.pop()
        outputStack.push(n.val)
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }
    while (outputStack.length) {
        const n = outputStack.pop()
        console.log(n.val)
    }
}
postorder(bt)