var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routes selectors call(require)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// action.js 라우터 등록 
var actionRouter = require('./routes/action');
var actionRestRouter = require('./routes/actionRest');
var actionReactFormRouter = require('./routes/actionReactForm');


// add a CORS 
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes path name defined.
app.use('/', indexRouter);
app.use('/users', usersRouter);
// action.js 라우터에 대한 URL주소 등록
app.use('/action', actionRouter);
app.use('/actionRest', actionRestRouter);
app.use('/actionReactForm', actionReactFormRouter);


// add a CORS 
app.use(cors());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
