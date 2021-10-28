const express = require('express');
const app = express();
const port = 3000;

const { default: axios } = require('axios');
const { appendFile } = require('fs');
const GitHub = require('github-api'); // npm install github-api
const noAuth = new GitHub(); // noAuth 방식 -> token, noAuth,

const api = axios.create({
  baseURL: 'https://api.github.com',
});

app.get('/githubAPI/:userId', (req, res) => {
  var repository = noAuth.getUser(`${req.params.userId}`);
  res.json(repository.__user);
});

app.get('/', (req, res) => {
  res.send(axios.get('https://api.github.com/users/wnstjd9701/followers'));
});

app.listen(port, () => {
  console.log('Server is running');
});
