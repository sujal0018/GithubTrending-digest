const express = require('express')
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("GitHub Trending Digest API is running 🚀");
});

module.exports=app