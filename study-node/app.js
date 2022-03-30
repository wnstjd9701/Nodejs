const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Listening On 3000 port');
});

app.post('/', (req, res) => {
  const { id, password, asdf } = req.body;
  console.log('id: ' + id);
  console.log(password);
  console.log(asdf);
  console.log(req.body);
});
