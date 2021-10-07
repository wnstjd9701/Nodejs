const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res)=>{
    res.send('admin 이후 url');
});