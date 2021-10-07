const { Router } = require('express');
const router = Router();

router.use('/repository', require('./Repository')); // 폴더 지정 .. URL/repository/userRepositoryList/:userId

module.exports = router;

