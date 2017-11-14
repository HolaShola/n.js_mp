import { data } from './models/mock.js';
const tokens = require('./tokens.json');
import { users } from './passport/employees';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'firstName',
    passwordField: 'lastName',
    session: false
}, function (username, password, done) {
    let employee = _.find(data, { firstName: username });

    if (employee === undefined || employee.lastName !== password) {
        done(null, false, 'Bad username/password combination');
    } else {
        done(null, employee);
	}
  }
));

passport.use(new BearerStrategy(
    function (token, done) {
        let result = _.find(tokens, { token: token });

        if (result === undefined) {
            done(null, false);
        } else {
			done(null, result, { scope: 'all' })
		}

    }
));

app.use(passport.initialize());

// setup authentication route with local strategy
app.post('/authenticate', passport.authenticate('local', { session: false }), function (req, res) {
        let token = _.find(tokens, { id: req.user.id });

        res.json(token);
    }
);

// protect endpoint with bearer strategy
app.get('/employees', passport.authenticate('bearer', { session: false }), function (req, res) {
    res.json(data);
});

