# GitHub Trending Digest Backend

Backend service for collecting GitHub trending repositories and returning an AI-generated digest summary.

## What is implemented

- Express API server and basic health route.
- MongoDB connection setup via Mongoose.
- GitHub Trending scraper using Axios + Cheerio.
- Digest endpoint that:
	- fetches trending repositories,
	- limits results to top 5,
	- generates a Gemini summary,
	- returns both raw data and summary in one JSON response.
- Standalone local test script (`test.js`) for running scraper + summarizer without the API route.

## Project Structure

- `server.js` - Server entry point.
- `src/app.js` - Express app setup and route mounting.
- `src/config/database.js` - MongoDB connection config.
- `src/routes/digest.routes.js` - Digest route definitions.
- `src/controllers/digest.controller.js` - Controller that fetches repos and summary.
- `src/services/githubService.js` - Trending scraper (top 5 repositories).
- `src/services/aiService.js` - Gemini summarization service.
- `test.js` - Local script to test fetching + summarization quickly.

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- Axios
- Cheerio
- Google Gemini SDK (`@google/generative-ai`)
- dotenv

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

3. Start the server:

```bash
npm run dev
```

or

```bash
npm start
```

## API Behavior

- Root route responds with: `GitHub Trending Digest API is running 🚀`
- `GET /digest/trending`:
	- scrapes GitHub Trending,
	- keeps top 5 repositories,
	- generates an AI summary,
	- returns both list + summary.

### Sample Response (`GET /digest/trending`)

```json
{
	"message": "Fetched trending repositories successfully",
	"data": [
		{
			"repoName": "owner/repo",
			"description": "Repository description",
			"language": "JavaScript",
			"stars": "12345",
			"forks": "678",
			"startstoday": "123 stars today"
		}
	],
	"summary": "1. owner/repo\n- What it does: ...\n- Why it's useful: ..."
}
```

## Quick Local Test

Run this to test scraping + summarization directly:

```bash
node test.js
```

## Notes

- `@google/genai` exists in dependencies but is not currently used by the service layer.
- Jobs and models folders are present for upcoming scheduling and persistence features.
