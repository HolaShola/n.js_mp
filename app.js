import express from 'express';
const _ = require('lodash');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

import {
  getProducts,
  getProduct,
  getProductReviews,
  getUsers,
  setProduct,
  getAnswerIfSuccess,
  getAnswerIfError,
  data
} from './models/mock.js';

import checkToken from './middlewares/checkToken';
const router = express.Router();

import data2 from './employees.json';
import tokens from './tokens.json';

import products from './routes/products';

import passport from 'passport';
import LocalStrategy from 'passport-local';
const BearerStrategy = require('passport-http-bearer').Strategy;

// router
//   .route('/api/products')
//   .post(checkToken, (request, response) => {
//     if (setProduct(JSON.stringify(request.body))) response.status(201).end();
//     response.status(401).end();
//   })
//   .get(checkToken, (request, response) => {
//     response.json(getProducts());
//   });

// router
//   .route('/api/products/:id')
//   .get(checkToken, (request, response) => {
//     response.json(getProduct(request.params.id));
//   });

// router
//   .route('/api/products/:id/reviews')
//   .get(checkToken, (request, response) => {
//     response.json(getProductReviews(request.params.id));
//   });

// router
//   .route('/api/users')
//   .get(checkToken, (request, response) => {
//     response.json(getUsers(request.params.id));
//   });

// router
//   .route('/auth')
//   .post((request, response) => {
//     let user = _.find(data, { username: request.body.username });
    
//     if (user === undefined || user.email !== request.body.email) {
// 		  response.status(404).json(getAnswerIfError());		
//     } else {
//       let payload = { "userId": user.id, "userName": user.username };
//       let token = jwt.sign(payload, 'secret', { expiresIn: 70 });
//       response.json(getAnswerIfSuccess(token, user.username, user.email));
//     }
//   });

// router
//   .route('/users')
//   .get(checkToken, (request, response) => {
//     console.log(data);
//     response.json(data);
// });

// passport.use(new LocalStrategy({
//     usernameField: 'firstName',
//     passwordField: 'lastName',
//     session: false
// }, function (username, password, done) {
//     let employee = _.find(data2, { firstName: username });

//     if (employee === undefined || employee.lastName !== password) {
//         done(null, false, 'Bad username/password combination');
//     } else {
//         done(null, employee);
// 	}
//   }
// ));

// passport.use(new BearerStrategy(
//   function (token, done) {
//       let result = _.find(tokens, { token: token });

//       if (result === undefined) {
//           done(null, false);
//       } else {
//     done(null, result, { scope: 'all' })		
//   }
     
//   }
// ));

// auth with passwopt
// router
//   .route('/authenticate')
//   .post(passport.authenticate('local', { session: false }), (request, response) => {
//     let token = _.find(tokens, { id: request.user.id });

//     response.json(token);
//   }
// );

// router
//   .route('/employees')
//   .get(passport.authenticate('bearer', { session: false }), (request, response) => {
//     res.json(data);
//   });

export default {
  listen(port, cb) {
    const app = express();

 // without bodyParser request.body === undefined
//    app.use(bodyParser.json());
//    app.use(passport.initialize());
    app.use(router);
    
    app.use('/api', products);

    app.listen(port);
    if (typeof cb === 'function') {
      cb();
    }
  }
}