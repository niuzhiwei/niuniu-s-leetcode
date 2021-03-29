/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0;
    let r = 0;
    const map = new Map()
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let needType = map.size
    let str = ''
    while (r < s.length) {
        const c = s[r]
        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) {
                needType -= 1
            }
        }
        while (needType === 0) {
            const c2 = s[l]
            const newStr = s.substring(l, r + 1)
            if (str === '' || str.length > newStr.length) {
                str = newStr
            }
            if (map.has(c2)) {
                map.set(c2, map.get(c2) + 1)
                if (map.get(c2) === 1) {
                    needType += 1
                }
            }
            l += 1
        }
        r += 1
    }
    return str
};