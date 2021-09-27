const express = require('express');
const server = express();
const port = 3000;

const users = [
    {
        id: "user1",
        name: "Yun",
        email: "wnstjd9701@gmail.com"
    },
    {
        id: "user2",
        name: "Kim",
        email: "hello@gmail.com"
    },
]

server.get('/api/user/:id', (req,res) => {
    const test = req.params.id;
    res.json(users[test]);
}); // id 에 따른 user의 정보 가져오기

server.listen(port, () => {
    console.log('Server is running');
})
