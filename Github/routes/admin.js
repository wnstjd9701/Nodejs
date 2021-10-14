const express = require('express');
const router = express.Router();
const baseResponse = require('../config/baseResponseStatus');

function testMiddleWare(req, res, next) {
  console.log('첫번째 미들웨어');
  next();
}

function testMiddleWare2(req, res, next) {
  console.log('두번째 미들웨어');
  next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
  res.send('error 이후 url');
});
router.get('/error', (req, res) => {
  res.send(baseResponse.SUCCESS);
});
module.exports = router;
