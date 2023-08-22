const express = require('express');
const router = express.Router();
const Post = require('../controllers/post.controller');
const Cate = require('../controllers/cate.controller');
const config = require('../configs/index.config');

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
    const categories = await Cate.allCate();
    if (categories) obj.categories = categories;
    res.render('index', { title: `${config.title}`, obj, config });
  } else {
    return res.render('error', { title: `404 - ${config.title}`, message: 'Not found', error: {status: 'Something went wrong !', stack: null}, config });
  }
});

router.get('/post/:alias', async (req, res) => {
  const obj = {};
  const post = await Post.getByAlias(req.params['alias']);
  if (post) {
    obj.post = post;
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
    res.render('post', { title: `${post.title} - ${config.title}`, obj, config });
  } else {
    return res.render('error', { title: `404 - ${config.title}`, message: 'Not found', error: {status: 'Something went wrong !', stack: null}, config });
  }
});

router.get('/cate/:alias', async (req, res) => {
  const obj = {};
  const rs = await Post.getByCate(req.params['alias']);
  if (rs && rs.posts) {
    obj.blogs = rs.posts;
    obj.latestPost = rs.posts.map(el => {
      return {
        title: el.title,
        alias: el.alias,
      }
    })
    const categories = await Cate.allCate();
    if (categories) obj.categories = categories;
    return res.render('index', { title: `${rs.cate.title} - ${config.title}`, obj, config });
  } else {
    return res.render('error', { title: `404 - ${config.title}`, message: 'Not found', error: {status: 'Something went wrong !', stack: null}, config });
  }
});

module.exports = router;
