// backend/index.js

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const jwt = require('jsonwebtoken');
const config = require('./config');

// Express Route
const studentRoute = require("./routes/student.routes");
// Connecting mongoDB Database
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use("/students", studentRoute);


// Middleware to verify JWT
function verifyToken(req, res, next) {
  // Retrieve the token from the "Authorization" header in the request
  let token = req.headers['authorization'];

  console.log('header Token: ', token);

  if (!token || token === 'undefined') {
    return res.status(403).json({
      auth: false,
      message: 'No valid token provided.',
      status: 403,
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(500).json({
        auth: false,
        message: 'Failed to authenticate token.',
        status: 500,
      });
    }

    req.userId = decoded.id;
    next();
  });
}


// Apply the middleware to all routes except /signup and /login
app.use('/students', verifyToken, studentRoute);

// Export the secret for signing tokens
module.exports = config;

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});