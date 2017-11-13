import app from './app';
import { User, Product } from './models/index.js';
import * as config from './config/config.json';

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`)) 

// let user = new User();
// let product = new Product();

//console.log(config.name);
//console.log(port);
//console.log(app);