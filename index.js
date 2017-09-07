//require('babel-register')({
//    presets: [ 'es2015' ]
//});

import { User, Product } from './models/index.js';

import * as config from './config/config.json';

let user = new User();
let product = new Product();

console.log(config.name);