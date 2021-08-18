const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/posts', isAuth, feedController.getPosts);

router.post(
  '/posts',
  [
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  isAuth,
  feedController.createPost
);

router.get('/posts/:postId', feedController.getPost);

router.put(
  '/posts/:postId',
  [
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  isAuth,
  feedController.updatePost
);

router.delete('/posts/:postId', isAuth, feedController.deletePost);

module.exports = router;
