const { Router } = require('express');
const router = Router();
const githubapi = require('./githubapi');
const test = require('./test');

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
// router.get('/userRepoList', test.ghrepos);

module.exports = router;
