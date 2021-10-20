const { Router } = require('express');
const router = Router();

router.use('/', require('./Repository')); // 폴더 지정 .. URL/repository/userRepositoryList/:userId
router.use('/', require('./MyPage'));
router.use('/test', () => {
  res.json({ message: 'test' });
});
router.use('/user', require('./User'));
module.exports = router;
