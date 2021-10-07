const { Router } = require('express');
const router = Router();

router.use('/repository', require('./repository')); // 폴더 지정

module.exports = router;

