const express = require('express');
const logger = require('morgan');
const adminRouter = require('./routes/admin');

class App {

    constructor () {
        this.app = express();
        
        // 미들웨어 셋팅
        this.setMiddleWare();

        // 라우팅
        this.getRouting();
    }


    setMiddleWare (){
        
        // 미들웨어 셋팅
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

    }

    getRouting (){
        this.app.use(require('./controllers'))
        this.app.use('/admin', adminRouter);
    }

}

module.exports = new App().app; // app 객체 생성