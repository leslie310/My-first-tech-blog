const router = require('express').Router();
// const { join } = require('path');
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// URL: 3001/api/blogs/
router.post('/', withAuth, async (req,res) => {
    try {
        const newBlog = await Blog.create(req.body);
            req.session.save(() => {
            req.session.user_id = newBlog.id;
        });

        res.status(200).json(newBlog);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// URL: 3001/api/blogs/ID NUMBER
router.delete('/:id', withAuth, async (req,res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;