require("dotenv").config();

const { getTrendingRepos } = require("./src/services/githubService");
const { summarizeRepos } = require("./src/services/aiService");

(async () => {
	try {
		const repos = await getTrendingRepos();
		const result = await summarizeRepos(repos); 
		console.log(result);
	} catch (err) {
		console.error(err);
	}
})();
