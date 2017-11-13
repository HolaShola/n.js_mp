import express from 'express';
const _ = require('lodash');
const bodyParser = require('body-parser');

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
// import { cookiesParser, queryParser } from './middlewares';

const router = express.Router();

router
  .route('/api/products')
  .post((request, response) => {
    if (setProduct(JSON.stringify(request.body))) response.status(201).end();
    response.status(401).end();
  })
  .get((request, response) => {
    response.json(getProducts());
  });

router
  .route('/api/products/:id')
  .get((request, response) => {
    response.json(getProduct(request.params.id));
  });

router
  .route('/api/products/:id/reviews')
  .get((request, response) => {
    response.json(getProductReviews(request.params.id));
  });

router
  .route('/api/users')
  .get((request, response) => {
    response.json(getUsers(request.params.id));
  });

router
  .route('/authenticate')
  .post((request, response) => {
    console.log(data);
    let user = _.find(data, { username: request.body.username });
    
    if (user === undefined || user.email !== request.body.email) {
		  response.status(404).json(getAnswerIfError());		
    } else {
      response.json(getAnswerIfSuccess());
      // let payload = { "sub": employee.id, "isActive": employee.isActive };
      // let token = jwt.sign(payload, 'secret', { expiresIn: 10 });
      // res.send(token);
    }
  });

export default {
  listen(port, cb) {
    const app = express();
 //   app.use(cookiesParser);
 //   app.use(queryParser);

 // without bodyParser request.body === undefined
    app.use(bodyParser.json());
    app.use(router);
    app.listen(port);
    if (typeof cb === 'function') {
      cb();
    }
  }
}