const { Router } = require('express');
const router = Router();

router.use('/admin', require('./admin')); // 폴더 지정
// router.use('/contacts', require('./contacts'));
router.get('/login', (req, res) => {
  res.render('login/index.html');
});
module.exports = router;
