const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('../seeds/useData.json');
const blogData = require('../seeds/blogData.json');

const seedDatabase = async () => {
    // console.log("hello!");

    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData) {
        await Blog.create({
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();