require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected 😍"))
.catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!, This is my first server deployment and I excited about it 😍🥳 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} 😎`)
})