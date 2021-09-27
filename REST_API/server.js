const express = require('express');
const server = express();

server.use(express.json()); // body-parser 의 역할

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

server.get('/api/user', (req,res) => {
    res.json(users);
});

// post method
server.post('/api/user', (req,res) => {
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

server.get('/api/user/:id', (req,res) => {
    const user = users.find((u) => {
        console.log(u.id + "    " + " hi");
        return u.id === req.params.id; // u.id = user1, user2 이 된다. 
    })
    if(user){   // user가 존재할 경우
        res.json(user);
    }
    else{   // user가 존재하지 않을 경우
        res.status(404).json({errorMessage: "User was not found"});
    }
    console.log(req.params.id);
});


server.listen(port, () => {
    console.log('Server is running');
})
