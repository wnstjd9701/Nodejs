const net = require('net');

const server = net.createServer(function (socket) {
  console.log(socket.address().address + ' connected.');

  // client 로 부터 오는 data를 화면에 출력
  socket.on('data', (data) => {
    console.log('recieve: ' + data);
  });
  // client와 접속이 끊기는 메시지 출력
  socket.on('close', () => {
    console.log('client disconnected. ');
  });
  // client가 접속하면 화면에 출력해주는 메시지
  socket.write('welcome to server');
});

// Error
server.on('error', (err) => {
  console.log('err: ' + err);
});

// Port 5000
server.listen(5000, () => {
  console.log('Listening on 5000 Port');
});
