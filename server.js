require('dotenv').config()
const app = require('./src/app')
const connectDb = require('./src/config/database')
const { getTrendingRepos } = require('./src/services/githubService')


connectDb()
getTrendingRepos()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})