const jwt = require('jsonwebtoken');

<<<<<<< HEAD
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

=======
// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
>>>>>>> 633628d7eb6cf4d5317c3cc5cf6749d67476fc30
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
<<<<<<< HEAD
      return req;
    }

    try {
=======
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      console.log('result')
>>>>>>> 633628d7eb6cf4d5317c3cc5cf6749d67476fc30
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
<<<<<<< HEAD
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
=======
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

>>>>>>> 633628d7eb6cf4d5317c3cc5cf6749d67476fc30
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
