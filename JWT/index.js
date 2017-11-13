const express = require('express');
const app = express();

const _ = require('lodash');
const data = require('./employees.json');

const jwt = require('jsonwebtoken');

app.use(express.json());

app.listen(4000);

app.post('/authenticate', function (req, res) {
    let employee = _.find(data, { firstName: req.body.firstName });
    
    if (employee === undefined || employee.lastName !== req.body.lastName) {
		res.status(403).send({ success: false,  message: 'Bad username/password combination.' });		
    } else {
		let payload = { "sub": employee.id, "isActive": employee.isActive };
		let token = jwt.sign(payload, 'secret', { expiresIn: 10 });
		res.send(token);
	} 	
});

// middleware for token check
function checkToken(req, res, next) {
    let token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // some business logic here
                next();
            }
        });
    } else {
        res.status(403).send({ success: false, message: 'No token provided.' });
    }
}

// protect endpoint with JWT token
app.get('/employees', checkToken, function (req, res) {
    res.json(data);
});

