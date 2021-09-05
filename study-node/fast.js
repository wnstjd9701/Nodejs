'use strict'

let string = 'node.js 올인원 패키지'

let isStartWith = string.startsWith('n') // '' 단어로 시작 하는지 
let isIncludes = string.includes('올인원') // '' 포함하고 있는지
let isEndWith = string.endsWith('지') // '' 로 끝나는지 

console.log(isStartWith)

const checkIfContains = () => {
    if(isStartWith && isIncludes && isEndWith){
        return true
    }
}

const ret = checkIfContains()
console.log(ret)
