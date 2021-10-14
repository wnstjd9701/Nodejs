const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
  console.log('Start Server: localhost:3001');
});

console.log(uuidAPIKey.create()); // 원래는 DB에 저장

// API key
const key = {
  apiKey: 'SNAB4H6-T6JMSYV-KJR3958-SBWQ5M4',
  uuid: 'cd54b244-d1a5-4cfb-9cb0-3495caf972d0',
};

app.get('/api/users/:apikey/:type', async (req, res) => {
  let { apikey, type } = req.params;

  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    // 발급받은 apikey가 틀릴 경우
    res.send('apikey is not valid');
  } else {
    // apikey가 맞을경우

    if (type == 'seoul') {
      let data = [
        { name: '박지성', city: 'seoul' },
        { name: '손흥민', city: 'seoul' },
      ]; // DB에서 다루는 데이터 --> Query
      res.send(data);
    } else if (type == 'jeju') {
      res.send('jeju');
    } else {
      res.send('Type is not correct');
    }
    res.send('ok');
  }
});
