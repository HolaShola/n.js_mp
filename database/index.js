const Sequelize = require('sequelize');
import * as config from '../config/config.json';

const sequelize = new Sequelize(config.database, config.username, config.password);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });