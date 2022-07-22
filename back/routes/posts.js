const express = require('express');
const router = express.Router();
const { Post, Image } = require('../models');

//LoadPosts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Image,
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
  // res.send('/posts');
});

module.exports = router;
