const express = require('express');
const server = express();
const port = 3000;
server.use(express.json()); // body-parser 의 역할

// users
const users = [
  {
    id: 'user1',
    name: 'Yun',
    email: 'wnstjd9701@gmail.com',
  },
  {
    id: 'user2',
    name: 'Kim',
    email: 'hello@gmail.com',
  },
];

const products = [
  {
    productId: '1',
    name: 'car',
    price: '30000',
  },
  {
    productId: '2',
    name: 'ipad',
    price: '40000',
  },
];
// 상품 조회
server.get('/api/products', (req, res) => {
  res.json(products);
});

// 상품 등록
server.post('/api/products', (req, res) => {
  products.push(req.body);
  if (req.body.id) {
    res.json(products);
  } else {
    res.status(404).json({ errorMessage: 'Something is empty' });
  }
});

// 상품 조회
server.get('/api/products/:id', (req, res) => {
  const product = products.find((u) => {
    return u.productId === req.params.id;
  });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ errorMessage: 'Product is not exists' });
  }
});

// 상품 정보 수정
server.put('/api/products/:id', (req, res) => {
  const foundIndex = products.findIndex((u) => u.productId === req.params.id);
  if (foundIndex === -1) {
    res.status(404).json({ errorMessage: '' });
  } else {
    products[foundIndex] = { ...products[foundIndex], ...req.body };
    res.json(products[foundIndex]);
  }
});

// 사용자 조회
server.get('/api/user', (req, res) => {
  res.json(users);
});

// 사용자 등록
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

// 사용자 조회
server.get('/api/user/:id', (req, res) => {
  const user = users.find((u) => {
    return u.id === req.params.id; // u.id = user1, user2 이 된다.
  });
  if (user) {
    // user가 존재할 경우
    res.json(user);
  } else {
    // user가 존재하지 않을 경우
    res.status(404).json({ errorMessage: 'User was not found' });
  }
  // console.log(req.params.id);
});

// 회원정보 수정
server.put('/api/user/:id', (req, res) => {
  let foundIndex = users.findIndex((u) => u.id === req.params.id); // 틀리면(없을경우) -1
  if (foundIndex === -1) {
    // user가 발견되지 않을 경우
    res.status(404).json({ errorMessage: 'User was not found' });
  } else {
    // console.log(users[foundIndex]);
    // console.log(req.body);
    users[foundIndex] = { ...users[foundIndex], ...req.body };
    // console.log(users[foundIndex]);
    // console.log(req.body);
    res.json(users[foundIndex]);
  }
});

// 정보 삭제
server.delete('/api/user/:id', (req, res) => {
  let foundIndex = users.findIndex((u) => u.id === req.params.id);
  if (foundIndex === -1) {
    res.status(404).json({ errorMessage: 'User was not found' });
  } else {
    let foundUser = users.splice(foundIndex, 1);
    res.json(foundUser[0]);
  }
});
server.listen(port, () => {
  console.log('Server is running');
});
