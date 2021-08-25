// npm install express
// package.json - script -> start : npm start = nodemon app.js
// npm run xxx
const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser'); // express 내장 모듈 - 이제 사용하지 않음

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
app.use(express.urlencoded({extended : false}) );
app.use(express.json());

app.use('/uploads', express.static('uploads') ); // 앞 : url, 뒤 : 폴더명

app.use( (req, res, next) =>{
    app.locals.isLogin = false;
    app.locals.req_path = req.path; // current url
    next();
});

// app.use( (req, res, next) => {
//     req.body = {
        
//     }
// });

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

// 404
app.use( ( req , res, _ ) => {
    res.status(404).render('common/404.html')
});

// 500
app.use( (err, req, res,  _ ) => {
    res.status(500).render('common/500.html')
});

app.listen( port, ()=>{
    console.log('Express listening on port', port);
})