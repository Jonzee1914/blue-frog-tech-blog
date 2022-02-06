const { User } = require('../models');

const userData = [{
        username: 'User1',
        password: 'password123'

    },
    {
        username: 'User2',
        password: 'password123'
    },
    {
        username: 'User3',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;