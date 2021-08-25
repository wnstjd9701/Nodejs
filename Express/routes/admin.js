const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('admin 이후 url');
});

router.get('/products', (req, res)=>{
    // test
    res.render('admin/products.html', {
        message : '<h1>tag</h1>',
        online : 'express'
    })
});

module.exports = router;
