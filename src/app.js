const express = require('express')
const multer = require('multer') // ye package files ko read karne ke kaam ata hai jaise images
const postModel = require('./models/post.model')// to post data on database this is model
const uploadFile = require('./services/storage.service')
const cors = require("cors")
const app = express()
const upload = multer({storage: multer.memoryStorage()}) // to read files like image
app.use(cors()) // ye different locelhost address se data fetch karene ka kaam ata hia
app.use(express.static("public")) // public folder me html pages ko connect karta hia

// api to create post on our app
app.post("/create-post", upload.single("image") ,async (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    const result= await uploadFile(req.file.buffer) // ye line uploadfile() fulction ko call kar rahi hai buffer parameter ke sath ye fucntion image ko image kit pe upload karta hai or image url return karta hai
    console.log(result)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({
        massage: "post created successfully",
        post
    })
})

app.get("/posts", async (req, res)=>{
    const post = await postModel.find()
    res.status(200).json({
        massage: "post got successfully",
        posts:post
    })
})


module.exports = app