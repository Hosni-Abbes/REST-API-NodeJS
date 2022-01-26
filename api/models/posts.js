const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    max:20
  },
  desc:{
    type:String,
    required:true,
    max:500
  }
},
{
  timestamps:true
}
)

module.exports = mongoose.model('posts', postsSchema)