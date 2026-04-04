# GitHub Trending Digest Backend

Backend service for a GitHub Trending Digest app. The current implementation includes:

- An Express server with a basic health route.
- MongoDB connection setup through Mongoose.
- A GitHub Trending scraper service that fetches the trending page and parses the HTML with Cheerio.
- A digest API route/controller flow for returning trending repositories as JSON.
- Environment-based configuration for the app port and database connection string.

## What has been done so far

- Set up the Node.js backend project structure.
- Added the server entry point in `server.js`.
- Created the Express app in `src/app.js`.
- Added MongoDB connection logic in `src/config/database.js`.
- Added a GitHub trending fetcher in `src/services/githubService.js`.
- Added digest route wiring in `src/routes/digest.routes.js` and mounted it in `src/app.js`.
- Added digest controller in `src/controllers/digest.controller.js` to expose trending data via API.
- Added placeholder `src/services/aiService.js` for AI summarization integration.
- Added dev and start scripts in `package.json`.

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- Axios
- Cheerio
- dotenv

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the backend folder with at least:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

3. Start the server:

```bash
npm run dev
```

or

```bash
npm start
```

## Current Behavior

- The root route responds with: `GitHub Trending Digest API is running 🚀`
- `GET /digest/trending` returns fetched trending repositories.
- On startup, the app connects to MongoDB.

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
	]
}
```

## Notes

- The AI summarization service file exists as a scaffold and is not implemented yet.
- Jobs and models folders are present for upcoming scheduling and persistence work.
