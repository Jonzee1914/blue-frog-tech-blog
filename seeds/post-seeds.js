const { Post } = require('../models');

const postData = [{
        title: 'New Stuff For discord',
        content: 'Discord will start testing a handful of new features',
        user_id: 1

    },
    {
        title: 'Why your warpdrive might be offline.',
        content: `There's a quantum breakdown in the nanowave bubble shift recorder. You need to realign the gluon housing.`,
        user_id: 2
    },
    {
        title: 'Why All the Tech Stuff?',
        content: `Because you can't be nerdy without it.`,
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;