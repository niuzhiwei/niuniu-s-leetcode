//leetcode 20 有效的括号 

var isValid = (s) => {
    if (s.length % 2 === 1) {
        return false
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            const t = stack[stack.length - 1]
            if ((t === '(' && c === ')') || (t === '{' && c === '}') || (t === '[' && c === ']')) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}
isValid("{[]}")
//时间复杂度 o(n) 空间复杂度 o(n)