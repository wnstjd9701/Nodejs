const http = require('http'); // Nodejs MOdule

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(80); // xx번 포트 사용

// express 사용하지 않고 서버 만들기

/*
1xx = 조건부응답
2xx = 응답성공
3xx = 리다이렉션
4xx = 요청오류
5xx = 서버오류
*/