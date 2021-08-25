// npm install express
// package.json - script -> start : npm start = nodemon app.js
// 
const express = require('express');

const app = express();
const port = 3000;

// url 을 추가하려면 routing 필요!!
app.get('/', (req, res) =>{
    res.send('Hello express');
})

app.get('/test', (req, res)=>{
    res.send('Hello express - test url...'); // response
})

app.listen( port, ()=>{
    console.log('Express listening on port', port);
})