const express = require('express');
const app = express();

app.get('/:main1/:main2', async (req, res) => {
    let {
        test1,
        test2
    } = req.params
    console.log(test1);
    console.log(test2);
    console.log(req.query.id);
    console.log(req.params.test1);
    // return res.render();
});



app.listen(3000, () => {
    console.log('status ok');
});