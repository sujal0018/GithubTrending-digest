const getTrendingRepos = require('../services/githubService').getTrendingRepos;
const summarizeRepos = require('../services/aiService').summarizeRepos;

async function getTrendingReposController(req, res) {
    try {
        const repos = await getTrendingRepos();
        const summary = await summarizeRepos(repos);
        res.status(200).json({
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