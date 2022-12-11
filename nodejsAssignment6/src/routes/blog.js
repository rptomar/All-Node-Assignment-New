const router = require('express').Router();
const Blog = require('../models/Blog');
const  bodyparser = require("body-parser");

// Your routing code goes here


// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })


router.get('/blog', async (req,res)=>{
    try{
        const user = await Blog.find({topic: req.query.search})
        res.status(200).json({
            status: "Sucess",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})


router.post('/blog',async (req,res)=>{
    try{
        const user = await Blog.create(req.body)
        res.status(200).json({
            status: "Sucess",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})


router.put("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        console.log(req.body)
        const user = await Blog.update({_id: req.params.id}, req.body);

        res.status(200).json({
            status: "Sucess",
            user
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


router.delete("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        const user = await Blog.deleteOne({_id : req.params.id});

        res.status(200).json({
            status: "Sucess",
            user
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


module.exports = router;