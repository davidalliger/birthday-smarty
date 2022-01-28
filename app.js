const express = require('express');
const logger = require('morgan');

const app = express();

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
