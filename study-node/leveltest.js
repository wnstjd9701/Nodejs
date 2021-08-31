'use strict'

const obj = {
    title: 'node.js 올인원 패키지'
};

console.log(obj.title);

const isEmptyObj = () => obj.title ? true : false

function test(){
    if(obj.title){
        return true; 
    }else{
        return false;
    }
}

test();
isEmptyObj();