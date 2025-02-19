const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, getPosts);
router.get('/:id', verifyToken, getPostById);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

module.exports = router;
