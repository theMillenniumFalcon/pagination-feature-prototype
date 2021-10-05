const Post = require('../models/Post')

const getAllPosts = async (req, res) => {
   res.send("All posts are here!")
}

module.exports = {
    getAllPosts
}
