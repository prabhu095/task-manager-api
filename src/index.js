const express = require('express');
require('./db/moongoose')
const userRouter =  require('./routers/user')
const taskRouter = require('./routers/task')


const app = express();
const port = process.env.PORT





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, ()=>{
    console.log("Listening on Port "+ port)
})


const Task = require('./models/task');
const User = require('./models/user')


