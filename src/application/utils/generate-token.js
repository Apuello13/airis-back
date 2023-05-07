const jwt = require('jsonwebtoken');
const jwtUtil = require('./jwt');

module.exports = Object.freeze({
    generateAccessToken: (name) =>
        jwt.sign({ user: name }, jwtUtil.SECRET_KEY, { expiresIn: jwtUtil.TIME_EXPIRATION }),
    verifyToken: (token, callback) => jwt.verify(token, jwtUtil.SECRET_KEY, (err, user) => callback(user))
})