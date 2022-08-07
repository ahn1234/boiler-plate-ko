const express = require('express')
const app = express()
const port = 5000

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://jin:1234@boilerplate.6waoh5h.mongodb.net/?retryWrites=true&w=majority',{
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false       ##몽고db 6.0이상에서 발생하는 에러
}).then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))



app.get('/', (req, res)=>res.send("hello world"))

app.listen(port, () => console.log('Example app listening on port ${port}!'))