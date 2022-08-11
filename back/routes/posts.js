const express = require('express');
const router = express.Router();
const { Post, Image } = require('../models');
const { Op } = require('sequelize');

//LoadPosts
router.get('/', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 2,
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
