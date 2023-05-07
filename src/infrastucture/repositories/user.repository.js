const users = require('../../domain/user');

const userRepository = {
    findByEmailAndPassword: ({ email, password }) =>
        users.find(user => user.email === email && user.password === password)
};

module.exports = userRepository;