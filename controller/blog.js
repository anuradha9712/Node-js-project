const blogRouter = require('express').Router();
const blogService = require('../services/blog');

blogRouter.post('/create', async (req, res) => {
    try {
        let result = await blogService.createBlog({});
        if (result) {
            res.json(result);
        }
    } catch (err) { console.log("error inside catch controller", err) }

})

blogRouter.get('/list', async (req, res) => {
    try {
        let result = await blogService.getAllBlog({});
        if (result) {
            res.json(result);
        }
    } catch (err) { console.log("error inside catch controller", err) }

})

module.exports = blogRouter;