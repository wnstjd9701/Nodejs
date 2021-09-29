const express = require('express');
const server = express();
const port = 3000;
server.use(express.json()); // body-parser 의 역할

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

server.get('/api/user', (req, res) => {
    res.json(users);
});

// post method.
server.post('/api/user', (req, res) => {
    console.log(req.body);
    users.push(req.body); // users 에 req.body 추가 
    res.json(users);
});

/* id 에 따른 user의 정보 가져오기 , URL 을 읽을 때 순서도 중요!!
server.get('/api/user/:id', (req,res) => {
    const test = req.params.id;
    res.json(users[test]);
});  
*/

server.get('/api/user/:id', (req, res) => {
    const user = users.find((u) => {
        console.log(u.id + "    " + " hi");
        return u.id === req.params.id; // u.id = user1, user2 이 된다. 
    })
    if (user) {   // user가 존재할 경우
        res.json(user);
    }
    else {   // user가 존재하지 않을 경우
        res.status(404).json({ errorMessage: "User was not found" });
    }
    console.log(req.params.id);
});

// 회원정보 수정
server.put('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1) { // user가 발견되지 않을 경우
        res.status(404).json({ errorMessage: 'User was not found' });
    }
    else {
        // console.log(users[foundIndex]);
        // console.log(req.body);
        users[foundIndex] = {...users[foundIndex], ...req.body };
        // console.log(users[foundIndex]);
        // console.log(req.body);
        res.json(users[foundIndex]);
    }
});

// 정보 삭제
server.delete('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1) {
        res.status(404).json({ errorMessage: "User was not found" });
    }
    else {
        let foundUser = users.splice(foundIndex, 1);
        res.json(foundUser[0]);
    }
})
server.listen(port, () => {
    console.log('Server is running');
})
