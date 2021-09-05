'use strict'

const arr = [1,2,0,-1,-2]

const res  = arr.some(key => key < 0) // 0보다 작은 수가 1개라도 있으면
console.log(res)