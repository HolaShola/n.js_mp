const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  middleware for cookie parsing
app.use((request, response, next) => {
  request.parsedCookies = request.cookies;
  next();
});

//  middleware for query parsing
app.use((request, response, next) => {
  request.parsedQuery = request.body;
  console.log(request);
  next();
});

app.listen(8080)