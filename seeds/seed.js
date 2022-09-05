const sequelize = require('../config/connection');
const seedUser = require('./userSeeds');
const seedBlog = require('./blogSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  process.exit(0);
};

seedAll();