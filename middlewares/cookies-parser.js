const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

//  middleware for cookie parsing
const cookiesParser = (request, response, next) => {
  request.parsedCookies = request.cookies;
  next();
};
