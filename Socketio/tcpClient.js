const net = require('net');

const socket = net.connect({ port: 5000 });
socket.on('connect', () => {
  console.log('Connected to server');

  setInterval(() => {
    socket.write('Banan');
  }, 1000);
});

// 서버로부터 받은 데이터를 화면에 출력
socket.on('data', (chunk) => {
  console.log('Recieve: ' + chunk);
});

// 접속이 종료되었을 때 메시지 출력
socket.on('end', () => {
  console.log('Disconnected');
});

// Error
socket.on('err', (err) => {
  console.log(err);
});

// connection Timeout
socket.on('timeout', () => {
  console.log('Connection Timeout.');
});
