const Post = require('../models/Post')

const getAllPosts = async (req, res) => {
    try {
        let query = Post.find()

        // we will start by getiing the page number
        let page = parseInt(req.query.page) || 1
        // then we will limit the number of documents on each page
        let pageSize = parseInt(req.query.limit) || 50
        // then we will calculate how many documents we need to skip before getting to a specific page of document
        let skip = (page - 1) * pageSize
        let total = await Post.countDocuments()
     
        let pages = Math.ceil(total / pageSize)
     
        query = query.skip(skip).limit(pageSize)

        if(page > pages) {
            return res.status(404).json({
                status: 'fail',
                message: "No page found",
            })
        }

        const result = await query

        res.status(200).json({
            status: 'success',
            count: result.length,
            page, 
            pages,
            data: result 

        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            status: 'error',
            message: "Server error",
        })
    }

}

module.exports = {
    getAllPosts
}
