const express = require('express');
const contacts = express.Router();

contacts.get('/', (req,res)=>{
    res.send('Hello Contacts');
});


contacts.get('/list', (req,res)=>{
    res.send('Contacts list');
});

module.exports = contacts;
