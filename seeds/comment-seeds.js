const { Comment } = require('../models');

const commentData = [{
        comment_text: "Wow, truly amazing!!!!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Pssshh, ok -I guess...",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "w00t, first post!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;