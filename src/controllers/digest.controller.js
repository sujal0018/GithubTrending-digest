const getTrendingRepos = require('../services/githubService').getTrendingRepos;
const summarizeRepos = require('../services/aiService').summarizeRepos;
const {sendTelegramMessage} = require('../services/telegramServices');

async function getTrendingReposController(req, res) {
    let summary="AI summary could not be generated at this time.";
    try {
        const repos = await getTrendingRepos();
         summary = await summarizeRepos(repos);
        await sendTelegramMessage(`Trending repositories updated!:->\n\n${summary}`);
        res.status(200).json({
            success: true,  
            message:"Fetched trending repositories successfully",
            data: repos,
            summary: summary
        })
    }catch (error) {
        console.error('Error fetching trending repositories:', error)
        res.status(500).json({ error: 'Failed to fetch trending repositories' })
    }
}

module.exports = {
    getTrendingReposController
}