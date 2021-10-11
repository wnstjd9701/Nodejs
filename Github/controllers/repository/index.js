const { Router } = require('express');
const router = Router();
const githubapi = require('./githubapi');
const db = require('./dbconnection');

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
// router.get('/userRepoList', test.ghrepos);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
