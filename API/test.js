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
app.post('/topic', (req, res) => {
  // const techStack = {
  //   advancedTechStack: ['c++', 'c', 'java', 'javascript'],
  //   experiencedTechStack: ['python'],
  // };
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('status ok');
});
