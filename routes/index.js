const express = require('express');
const router = express.Router();
const Post = require('../controllers/post.controller');
const Cate = require('../controllers/cate.controller');

/* GET home page. */
router.get('/', async (req, res) => {
  const obj = {};
  const posts = await Post.latestPost();
  if (posts) {
    obj.blogs = posts;
    obj.latestPost = posts.map(el => {
      return {
        title: el.title,
        alias: el.alias,
      }
    })
  }
  const categories = await Cate.allCate();
  if (categories) obj.categories = categories;
  res.render('index', { title: 'Kot\'s blog', obj });
});

router.get('/post/:alias', async (req, res) => {
  const obj = {};
  const post = await Post.getByAlias(req.params['alias']);
  if (post) obj.post = post;
  const posts = await Post.latestPost();
  if (posts) {
    obj.latestPost = posts.map(el => {
      return {
        title: el.title,
        alias: el.alias,
      }
    })
  }
  const categories = await Cate.allCate();
  if (categories) obj.categories = categories;
  res.render('post', { title: `${post.title} - Kot\'s blog`, obj });
});

router.get('/cate/:alias', async (req, res) => {
  const obj = {};
  const rs = await Post.getByCate(req.params['alias']);
  if (rs.posts) {
    obj.blogs = rs.posts;
    obj.latestPost = rs.posts.map(el => {
      return {
        title: el.title,
        alias: el.alias,
      }
    })
  }
  const categories = await Cate.allCate();
  if (categories) obj.categories = categories;
  res.render('index', { title: `${rs.cate.title} - Kot\'s blog`, obj });
});

module.exports = router;
