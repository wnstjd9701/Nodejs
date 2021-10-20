const { Router } = require('express');
const router = Router();
const myprofile = require('./myprofile');

router.get('/', myprofile.getUserProfile);
router.get('/:userId', myprofile.getUserProfile);

module.exports = router;
