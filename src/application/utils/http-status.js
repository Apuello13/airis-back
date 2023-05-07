const httpStatus = {
    OK: 200,
    NOT_FOUND: 404,
    GENERAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_REPEAT: 406,
    FORBIDDEN: 403
}

const httpStatusKey = {
    GENERAL_ERROR: "GENERAL_ERROR",
    BAD_REQUEST: "BAD_REQUEST",
    NOT_FOUND: "NOT_FOUND",
    FORBIDDEN: "FORBIDDEN"
}

module.exports = { httpStatus, httpStatusKey };