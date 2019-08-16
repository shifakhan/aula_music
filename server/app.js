const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config/index');

const indexRouter = require('./routes/index');
const songsRouter = require('./routes/songs');

const app = express();

// Connect Database
const mongodbUrl = `mongodb+srv://${config.dbuser}:${config.dbpassword}@cluster0-zeorn.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(mongodbUrl, {useNewUrlParser: true });
mongoose.connection.on('open', () => { console.log('DB Connected') });
mongoose.connection.on('error', err => { console.log('DB Connection Error : ' + err) });

// Configure Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Map routers
app.use(cors())
app.use('/', indexRouter);
app.use('/songs', songsRouter);

module.exports = app;
