'use strict'

const { resolve } = require("path")

const arr = ['node.js', '올인원']
const test = ['hello world']
const ret = arr.find(key => key === '올인원') // find - 실제 데이터 return 
const res = arr.includes('node.js') // includes - 포함하고 있는가 

for(const item of test){
    if(arr.includes(item)){
        console.log(item)
    }else{
        console.log('Nothing')
    }
}