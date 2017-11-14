import app from './app';
import { User, Product } from './models/index.js';
import * as config from './config/config.json';
const Sequelize = require('sequelize');

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`)) 

// let user = new User();
// let product = new Product();

//console.log(config.name);
//console.log(port);
//console.log(app);


//import * as config from '../config/config.json';

//const sequelize = new Sequelize(config.database, config.username, config.password);
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });