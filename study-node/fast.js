'use strict'
const test = new Set()

test.add(1)
test.add(1)
test.add(2)
test.add(2)
test.add(3)

for(const item of test){
    console.log(item)
}

const ret = test.has(2) // 2가 존재 하는가?
console.log(ret)