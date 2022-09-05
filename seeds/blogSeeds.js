const { Blog } = require('../models');

const blogSeeds =
[
  {
    "postTitle": "It is sunny here in Seattle",
    "postContent": "Seattle is sunny",
    "userId": 1
  },
  {
    "postTitle": "Flowers",
    "postContent": "These flowers are beautiful",
    "userId": 2
  },
  {
    "postTitle": "Rainy days",
    "postContent": "it is always raining in seattle",
    "userId": 3
  }
];

const seedBlog = () => Blog.bulkCreate(blogSeeds);

module.exports = seedBlog;