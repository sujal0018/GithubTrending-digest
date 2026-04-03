# GitHub Trending Digest Backend

Backend service for a GitHub Trending Digest app. The current implementation includes:

- An Express server with a basic health route.
- MongoDB connection setup through Mongoose.
- A GitHub Trending scraper service that fetches the trending page and parses the HTML with Cheerio.
- Environment-based configuration for the app port and database connection string.

## What has been done so far

- Set up the Node.js backend project structure.
- Added the server entry point in `server.js`.
- Created the Express app in `src/app.js`.
- Added MongoDB connection logic in `src/config/database.js`.
- Added a GitHub trending fetcher in `src/services/githubService.js`.
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
- On startup, the app connects to MongoDB and runs the trending repositories fetcher.

## Notes

- The trending service is still a work in progress and currently logs the parsed GitHub trending articles.
- Routes, controllers, jobs, and models are present in the folder structure but are not implemented yet.
