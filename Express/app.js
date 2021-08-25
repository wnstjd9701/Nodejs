// npm install express
// package.json - script -> start : npm start = nodemon app.js
// npm run xxx
const express = require('express');
const nunjucks = require('nunjucks');

// Router 
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', { // 폴더 지정
    autoescape : true , // true : html 공격방지, false : html tag 그대로 출력
    express : app // 객체 선택
});


// url 을 추가하려면 routing 필요!!
app.get('/', (req, res) =>{
    res.send('Hello express');
})

app.get('/admin', (req, res) =>{
    res.send('Hello admin');
})

app.get('/test', (req, res)=>{
    res.send('Hello express - test url...'); // response
})

// Router Middleware
app.use('/admin', admin)
app.use('/contacts', contacts);

app.listen( port, ()=>{
    console.log('Express listening on port', port);
})