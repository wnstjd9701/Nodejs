const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// exoress framework
app.get('/:test1/:test2', async (req, res) => {
  let { test1, test2 } = req.params;
  console.log(test1);
  console.log(test2);
  console.log(req.query.test); // http://localhost:3000/test1/test3?id=querystring => 출력 req.query.id = querystring
  console.log(req.params);
  // // return res.render();
});

// frontend id -> backend server req.  test
app.post('/topic/:userId', (req, res) => {
  // const techStack = {
  //   advancedTechStack: ['c++', 'c', 'java', 'javascript'],
  //   experiencedTechStack: ['python'],
  // };
  const techStack = req.body;
  const { advanced, experienced } = req.body;
  console.log(advanced);
  //console.log(techStack);

  try {
    if (experienced[0] == undefined || experienced[0].name == '') {
      console.log(experienced[0].name);
      console.log('test');
    } else {
      console.log(experienced[0].name);
    }
    console.log(techStack.advancedTechStack);
    advanced.forEach(function (item, index) {
      const techName = item.name;
      console.log(techName, index);
    });
  } catch (err) {
    console.log(err);
  }
  res.json({ ErrorMessage: 'error' });
});

app.listen(3000, () => {
  console.log('status ok');
});
