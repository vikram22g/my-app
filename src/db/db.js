const mongoose = require("mongoose");


// basicly this function is to connect database with uri or tha database
async function connectDB() {
mongoose.connect("mongodb+srv://Vikram:vXxqAGyIji1L6in6@complete-backend.ivze2tu.mongodb.net/note")
.then(() => console.log("Connected"))
.catch(err => console.log(err));

    
}
module.exports = connectDB