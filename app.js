'use strict';
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)

app.listen(5000, function () {
    console.log('running 5000...')
});
