// npm install express
// package.json - script -> start : npm start = nodemon app.js
// npm run xxx
const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

// Router 
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', { // 폴더 지정
    autoescape : true , // true : html 공격방지, false : html tag 그대로 출력
    express : app // 객체 선택
});

// 미들웨어 셋팅
app.use(logger('dev'));

// url 을 추가하려면 routing 필요!!
app.get('/', (req, res) =>{
    res.send('Hello express');
})

app.get('/test', (req, res)=>{
    res.send('Hello express - test url...'); // response
})

function vipMiddleware(req, res, next){
    console.log('최우선 미들웨어');
    next();
}

// Router Middleware
app.use('/admin', vipMiddleware, admin)
app.use('/contacts', contacts);

app.listen( port, ()=>{
    console.log('Express listening on port', port);
})