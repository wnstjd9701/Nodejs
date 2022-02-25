const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();
const userRouter = require('./api/users/user_router');

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log('PORT Check');
});

app.get('/login', (req, res) => {});
