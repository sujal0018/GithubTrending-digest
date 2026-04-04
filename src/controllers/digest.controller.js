const getTrendingRepos = require('../services/githubService').getTrendingRepos;

async function getTrendingReposController(req, res) {
    try {
        const repos = await getTrendingRepos();
        res.status(200).json({
            message:"Fetched trending repositories successfully",
            data: repos
        })
    }catch (error) {
        console.error('Error fetching trending repositories:', error)
        res.status(500).json({ error: 'Failed to fetch trending repositories' })
    }
}

module.exports = {
    getTrendingReposController
}