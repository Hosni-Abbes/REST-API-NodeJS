const express = require('express')
const router = express.Router()

//IMPORT CONTROLLERS FUNCTIONS
const {addPosts, getAllPosts, getOnePost, updatePost, deletePost} = require('../controllers/posts')

//CREATE ROUTES
  //add posts to database
  router.post('/posts', addPosts)

  //get all posts from db
  router.get('/posts', getAllPosts)

  //get only one post
  router.get('/posts/:id', getOnePost)

  //update post
  router.put('/posts/:id', updatePost)

  //delete post
  router.delete('/posts/:id', deletePost)

//EXPORT ROUTER
module.exports = router