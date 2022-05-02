const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const user = {
  id: 'test',
  password: '1234',
}; // 데이터 베이스를 대신 해줄 user 정보
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const id = req.body.user_id;
  const password = req.body.user_pwd;
  console.log(id);
  if (id === user.id && password === user.password) res.redirect('/');
  // 데이터 베이스 연결을 하게 되면 쿼리문이 들어가게 됨
  else res.send('아이디나 비밀번호가 틀렸습니다. ');
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});

io.on('connection', (socket) => {
  console.log(socket.id, 'Connected');

  socket.emit('msg', `${socket.id}가 연결 되었습니다. `);

  socket.on('msg', (data) => {
    console.log(socket.id, data);
    var result = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === data[i].toUpperCase()) {
        result += data[i].toLowerCase();
      } else {
        result += data[i].toUpperCase();
      }
    }
    socket.emit('msg', `Server: ${result}를 받았습니다. `);
  });
});
