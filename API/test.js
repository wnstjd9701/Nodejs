const express = require('express');
const app = express();
// exoress
app.get('/:test1/:test2', async (req, res) => {
  let { test1, test2 } = req.params;
  console.log(test1);
  console.log(test2);
  console.log(req.query.test); // http://localhost:3000/test1/test3?id=querystring => 출력 req.query.id = querystring
  console.log(req.params);
  // // return res.render();
});

// frontend id -> backend server req.
app.get('/topic', (req, res) => {
  const obj = {
    advancedTeckStack: ['c++', 'c', 'java', 'javascript'],
  };
  console.log(obj.advancedTeckStack[0]);
});

app.listen(3000, () => {
  console.log('status ok');
});
