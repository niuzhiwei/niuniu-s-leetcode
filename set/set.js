let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some text')
let o = {
    a: 1,
    b: 2
}
mySet.add(o)
mySet.add({
    a: 1,
    b: 2
})

const has = mySet.has(o)

mySet.delete(5)
mySet.size()

for (let item of mySet) console.log(item)
for (let item of mySet.keys()) console.log(item)
for (let item of mySet.values()) console.log(item)

const myArr = [...mySet]
