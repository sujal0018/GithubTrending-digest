const express = require('express')
const app = express()
app.use(express.json())

const digestRouter = require('./routes/digest.routes')

app.use('/digest', digestRouter)

app.get("/", (req, res) => {
  res.send("GitHub Trending Digest API is running 🚀");
});

module.exports=app