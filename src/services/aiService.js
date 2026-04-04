const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
	model: "gemini-2.5-flash",
	generationConfig: {
		maxOutputTokens: 3000, 
		temperature: 0.5,
	},
});

const summarizeRepos = async (repos) => {
	const repoText = repos
		.map((repo, idx) => {
			return `${idx + 1}. ${repo.repoName}\nDescription: ${repo.description}\nStars: ${repo.stars}\nLanguage: ${repo.language}`;
		})
		.join("\n\n");

	const prompt = `Summarize the following GitHub repositories.

Rules:
- Be concise but complete
- Do NOT cut off mid-sentence
- Use bullet points
- Cover ALL repositories

Format:
1. Repo Name
   - What it does:
   - Why it's useful:

Repositories:
    ${repoText}`;

	const result = await model.generateContent(prompt);
	const response = await result.response;
	
	return response.text();
};

module.exports = { summarizeRepos };
