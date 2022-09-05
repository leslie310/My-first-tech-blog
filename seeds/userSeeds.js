const { User } = require('../models');

const userSeeds =
[
  {
    "username": "Les123",
    "password": "password"
  },
  {
    "username": "John",
    "password": "password"
  },
  {
    "username": "Emily",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userSeeds, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;