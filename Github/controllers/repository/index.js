const { Router } = require('express');
const router = Router();
const githubapi = require('./githubapi');

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);

module.exports = router;
