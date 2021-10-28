const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
});

app.use(
  session({
    secret: 'ras',
    resave: true,
    secure: false,
    saveUninitialized: false,
  }),
); //세션을 설정할 때 쿠키가 생성된다.&&req session의 값도 생성해준다. 어느 라우터든 req session값이 존재하게 된다.

const github = {
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: 'http://localhost:3000/login',
};
app.get('/', async (req, res) => {
  const url = `https://github.com/login/oauth/access_token?client_id=${github.clientId}&client_secret=${github.clientSecret}`;
  try {
    const access_token = await axios({
      method: 'POST',
      url: url,
      HEADERS: {
        'contenct-type': 'application/json',
      },
    });
  } finally {
    console.log('SUCCESS');
  }

  res.send('SUCCESS LOGIN');
});

app.get('/login', async (req, res) => {
  console.log('SUCCESS');
  res.send('SUCCESS');
});
app.listen(3000, () => {
  console.log(`server start 3000`);
});
