const { Router } = require('express');
const router = Router();

router.use('/admin', require('./admin')); // 폴더 지정
// router.use('/contacts', require('./contacts'));

module.exports = router;

