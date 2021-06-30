const logger = require("morgan");
const cors = require("cors");
const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')


// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const groceryRouter = require("./routes/controller/groceryRouter");

mongoose
  .connect("mongodb://localhost:27017/grocery-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>{
    console.log("MONGO DB CONNECTED")
  })
  .catch((e) => {
    console.log(e);
  })


const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/groceries", groceryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error" });
});

module.exports = app;
