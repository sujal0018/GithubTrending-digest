const axios = require('axios')
const cheerio = require('cheerio')  

const getTrendingRepos = async () => {
    //return a list of trending repos with name, description, language, stars, forks and stars today
    try {
        const html = await axios.get('https://github.com/trending', {
            headers: {
                "User-Agent": "Mozilla/5.0",
            }
        })
        // console.log(html.data)
        const $ = cheerio.load(html.data)
        
        const repos = []
       
        $( 'article.Box-row' ).each((index, ele) => {
            const repoName = $(ele).find('h2 a ').text().replace(/\s+/g, "").trim()
            const description = $(ele).find("p").text().trim() || "No description"
            const language = $(ele).find('span[itemprop="programmingLanguage"]').text().trim()||"Unknown"
            const stars = $(ele).find('a[href$="/stargazers"]').text().trim() || "0"
            const forks = $(ele).find('a[href$="/forks"]').text().trim() || "0"
            const startstoday = $(ele).find("span.d-inline-block.float-sm-right").text().trim()||"Not available"
        
            repos.push({repoName, description, language, stars, forks, startstoday})
            
        })

        return repos
    }catch (error) {
        console.error('Error fetching trending repositories:', error)
    }
}
module.exports = {
    getTrendingRepos
}