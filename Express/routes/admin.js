const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
  console.log('admin1 미들웨어');
  next();
}

function testMiddleWare2(req, res, next) {
  console.log('admin2 미들웨어');
  next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
  res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
  res.send('admin/products');
  //   res.render('admin/products.html', {
  //     message: '<h1>H1 tag</h1>',
  //     online: 'express',
  //   });
});

router.get('/products/write', (req, res) => {
  res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
  res.send(req.body);
});

router.get('/login', (req, res) => {
  res.render('login/index.html');
});
module.exports = router;
