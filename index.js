const EventEmitter = require('events');

import { User, Product } from './models/index.js';
import * as config from './config/config.json';

import DirWatcher from './dirwatcher';
import Importer from './importer';

let user = new User();
let product = new Product();

console.log(config.name);

let dirWatcherFoo = new EventEmitter();
let dirwatcher = new DirWatcher(dirWatcherFoo);
let importer = new Importer(dirWatcherFoo);

dirwatcher.watch('./data', 3000);
importer.subscriber();