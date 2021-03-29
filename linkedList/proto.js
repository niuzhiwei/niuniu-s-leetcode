const obj = {}
const func = () => {}
const arr = []

//instanceof的原理，并用代码实现
const instanceOf = (A, B) => {
    let p = A
    while (p) {
        if (p === B.prototype) {
            return true
        }
        p = p.__proto__
    }
    return false
}