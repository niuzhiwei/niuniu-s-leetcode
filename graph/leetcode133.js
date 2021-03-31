/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

//深度优先
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return
    const visited = new Map()
    const dfs = (n) => {
        const nCopy = new Node(n.val)
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(neighbor => {
            if (!visited.has(neighbor)) {
                dfs(neighbor)
            }
            nCopy.neighbors.push(visited.get(neighbor))
        })
    }
    dfs(node)
    return visited.get(node)
};

//广度优先
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return
    const visited = new Map()
    visited.set(node, new Node(node.val))
    const q = [node]
    while (q.length) {
        const n = q.shift();
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne)
                visited.set(ne, new Node(ne.val))
            }
            visited.get(n).neighbors.push(visited.get(ne))
        })
    }
    return visited.get(node)
};