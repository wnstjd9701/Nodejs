const express = require('express');
const app = express();

app.get('/:test1/:test2', async (req, res) => {
    let {
        test1,
        test2
    } = req.params
    console.log(test1);
    console.log(test2);
    console.log(req.query.test); // http://localhost:3000/test1/test3?id=querystring => 출력 req.query.id = querystring
    console.log(req.params);
    // // return res.render();
});

app.get('/topic', (req,res) => {
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href ='/topic?id=0'> Javascript!! </a><br>
        <a href ='/topic?id=1'> Nodejs!! </a><br>
        <a href ='/topic?id=2'> Express!! </a><br>
        ${topics[req.query.id]}
        `
    res.send(output);
});


app.listen(3000, () => {
    console.log('status ok');
});