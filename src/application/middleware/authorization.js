const jwtUtil = require('../utils/jwt')
const httpError = require('../utils/http-error');
const { httpStatusKey } = require('../utils/http-status')
const jwtProvider = require('../utils/generate-token')

module.exports = Object.freeze({
    validateToken: (req, res, next) => {
        const FIRST_ELEMENT = 1;
        const WHITE_SPACE = " ";
        const header = req.headers[jwtUtil.AUTHORIZATION_KEY];
        if(!header) httpError(res, httpStatusKey.FORBIDDEN)
        const token = header.split(WHITE_SPACE)[FIRST_ELEMENT];
        if(!token) httpError(res, httpStatusKey.FORBIDDEN)
        jwtProvider.verifyToken(token, (user) => {
            if(!user) httpError(res, httpStatusKey.BAD_REQUEST)
            req.user = user;
            next();
        })
    }
})