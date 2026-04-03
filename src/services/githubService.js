const { ExecutableCodeLanguage } = require('@google/generative-ai')
const axios = require('axios')
const cheerio = require('cheerio')  

const getTrendingRepos = async () => {
    try {
        const html = await axios.get('https://github.com/trending', {
            headers: {
                "User-Agent": "Mozilla/5.0",
            }
        })
        // console.log(html)
        const $ = cheerio.load(html)
        console.log($('article.Box-row'))
        
    }catch (error) {
        console.error('Error fetching trending repositories:', error)
    }
}
module.exports = {
    getTrendingRepos
}