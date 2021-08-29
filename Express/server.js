const app = require('./app');
const port = 3000;
const test = 'hello world';

app.listen( port, ()=>{
    console.log('Express listening on port', port);
    console.log(test);
});
