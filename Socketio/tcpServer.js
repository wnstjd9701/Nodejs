const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
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
