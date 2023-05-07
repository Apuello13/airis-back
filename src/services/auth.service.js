const userRepository = require('../infrastucture/repositories/user.repository');
const httpError  = require('../application/utils/http-error');
const { httpStatusKey } = require('../application/utils/http-status')
const jwtProvider = require('../application/utils/generate-token');

const userService = {
    login: (req, res) => {
        const body = req.body;
        const user = userRepository.findByEmailAndPassword({ email: body.email, password: body.password })
        if(!user) httpError(res, httpStatusKey.NOT_FOUND)
        const token = jwtProvider.generateAccessToken(user.name);
        res.send({ token, ...user });
    }
}

module.exports = userService;