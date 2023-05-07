const router = require('express').Router();
const userService = require('../../services/auth.service');

router.post('/login', userService.login);

module.exports = router;