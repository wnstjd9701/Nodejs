const express = require('express');
const app = express();
const port = 3000;

const { default: axios } = require('axios');
const { appendFile } = require('fs');
const GitHub = require('github-api'); // npm install github-api
const noAuth = new GitHub(); // noAuth 방식 -> token, noAuth,
// api test
const api = axios.create({
  baseURL: 'https://api.github.com',
});

app.get('/test', (req, res) => {
  const test = {
    id: 1,
    tc_id: 2,
    tc_name: 'test',
  };
  console.log(test.id);
  return res.json(test);
});

app.get('/', async (req, res) => {
  const { data } = await axios.get('http://localhost:3000/test');
  console.log(data);
  res.json({ success: 'success' });
  // res.send(axios.get('https://api.github.com/users/wnstjd9701/followers'));
});

app.listen(port, () => {
  console.log('Server is running');
});
