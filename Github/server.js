const express = require('express');
const githubapi = require('./githubapi');
const app = express();

app.get('/userRepository/:userId', githubapi.getUserRepositoryList);

app.listen(3000, (req,res) => {
    console.log('Server is running');
})