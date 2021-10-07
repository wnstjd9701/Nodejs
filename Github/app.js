const express = require('express');

class App {
    constructor(){
        this.app = express();

        this.setMiddleWare();

        this.getRouting();
    }

    setMiddleWare(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    getRouting(){
        this.app.use(require('./controllers'));
    }
}

module.exports = new App().app;


