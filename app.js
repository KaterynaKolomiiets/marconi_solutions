const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require("./routes/routes");
const fatturasRouter = require('./routes/fatturas')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.options("*", cors());





app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

// app.use(express.static(path.join(__dirname, '/client/build')));
// // app.use("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "/client/build'", "index.html"));
// // });

app.use('/', indexRouter);
app.use('/', fatturasRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
