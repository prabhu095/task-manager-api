
const mongoose = require('mongoose'); 
const User = require('mongoose');


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

})









