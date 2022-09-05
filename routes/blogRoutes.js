const router = require('express').Router();
const { Blog } = require('../../models/');
const withAuth = require('../../utils/auth');

// CREATE POST
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
    console.log(body);
  try {
    const newBlog = await Blog.create({ ...body, userId: req.session.userId });
    console.log("Here is the new post: ",  newBlog);
    res.json(newBlog);
     } catch (err) {
       console.log('IT FAILED!', err);
    res.status(500).json(err);
  }
});

// UPDATE POST
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('here is the req.body', req.body);
    const [affectedRows] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;;