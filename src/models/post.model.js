const mongoose = require('mongoose')


// ye hamare data ko database me store karene ki schema hai ki hamara data database kaise store hoga or kis format me hoga
const postSchema = new mongoose.Schema({
    image:String,
    caption: String
})

const postModel= mongoose.model("post", postSchema) // learning......

module.exports = postModel;