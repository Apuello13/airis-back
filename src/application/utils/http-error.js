const { httpStatus } = require('./http-status');

const errorMessage = {
    NOT_FOUND: 'El elemento que busca no se encuentra',
    GENERAL_ERROR: 'Se ha presentado un inconveniente, intentalo mas tarde',
    NOT_REPEAT: 'El elemento que desea ingresar, ya existe',
    BAD_REQUEST: 'Estamos presentando incovenientes.',
    FORBIDDEN: "Token expirado o invalido"
}

const httpError = (res, key) => {
    res.status(httpStatus[key]).send({ message: errorMessage[key] });
}

module.exports = httpError;