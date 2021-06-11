const blogSchema = require('../model/db');


const createBlog = (req, res) => {
    try {

        return new Promise(async (reject, resolve) => {
            const blog = new blogSchema({
                "userName": "mayank423",
                "posts": {
                    "postId": "123",
                    "caption": "My first blog",
                    "upvotes": "12",
                    "imageUrl": "http:google.com"
                }
            })
          
            const savedBlog = await blog.save();
            console.log("savedBloggg-> ", savedBlog);
            resolve(savedBlog)
            
        })
    }catch (err) { console.log("error inside catch", err)}
}

const getAllBlog = (username) => {
    try {

        return new Promise(async (reject, resolve) => {
            // blogSchema.find({}).lean().exec((err, data) => {
            //     console.log("error-<><> ", err, "data-> ", data);
            //     if (err) {
            //         console.log("error--> ", err);
            //     }
            //     if (!data) return resolve("no data");
            //     resolve("resolve promise inside getAllBlog");
            // })
            blogSchema.find({})
            .then(data=>{
                console.log("data-<><> ", data)
                resolve("resolve promise inside getAllBlog");
            })
            
            
        })
    }catch (err) { console.log("error inside catch", err)}
}

module.exports = {
    createBlog: createBlog,
    getAllBlog: getAllBlog
}