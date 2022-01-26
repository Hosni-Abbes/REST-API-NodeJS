//import posts model from models
const postsModel = require('../models/posts')


//add posts to database
exports.addPosts = async (req,res) => {
  try{
    //create new post
    const newPost = new postsModel({
      title:req.body.title,
      desc:req.body.desc
    })
    //save post to database
    const savePost = await newPost.save()
    res.status(200).send("Post Added")
  }catch(err){
    return res.status(500).send(err)
  }
}

//get all posts
exports.getAllPosts = async (req,res)=>{
  try{
    const posts = await postsModel.find({})
    const postsMap = {}
    if(posts.lenght < 1){
      res.status(403).send('No Posts Available!')
    }else{
      posts.forEach(post => postsMap[post._id] = post)
      res.status(200).send(postsMap)
    }
  }catch(err){
    return res.status(500).send(err)
  }
}

//get only one post (using post id)
exports.getOnePost = async (req, res)=>{
  try{
    const post = await postsModel.findById(req.params.id)
    if(post){
      res.status(200).send(post)
    }else{
      res.status(403).send("Post Not Found")
    }
  }catch(err){
    return res.status(404).send("Post Not Exist")
  }
}

//update post
exports.updatePost = async (req, res) => {
  try{
    const post = await postsModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.status(200).send('Post Updated.')
  }catch(err){
    return res.status(500).send(err)
  }
}

//delete post
exports.deletePost = async (req, res) => {
  try{
    const post = await postsModel.findByIdAndDelete(req.params.id)
    res.status(200).send('Post Deleted')
  }catch(err){
    return res.status(500).send(err)
  }
}