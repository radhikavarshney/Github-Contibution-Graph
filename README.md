# GitHub Data Fetching Web Application

This web application is designed to fetch and display a user's GitHub contribution graph and repository images using Node.js, Express.js, and React.js.

## Project Overview

The project consists of a backend built with Node.js and Express.js, which handles API routes for retrieving GitHub data. On the frontend, React.js is used to create an interactive user interface to view contribution graphs and repository images.

## Project Structure

### Backend (Node.js with Express.js)

- **`index.js`**: Entry point for the Node.js server, setting up the server to run on port 3000 and managing API routes.
- **`user.js`**: Express router configuration defining endpoints to fetch contribution graph data and repository images using Axios from the GitHub API.

### Frontend (React.js)

- **`App.jsx`**: Main React component responsible for the user interface. It includes input fields to enter a GitHub username, fetches contribution graph data, and displays it using ReactCalendarHeatmap. It also showcases repository images associated with the user's GitHub profile.

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Install Dependencies**: Install Node.js and npm if not already installed. Then navigate to the project directory and run `npm install` to install dependencies for both backend and frontend.
3. **Set Up Environment Variables**: Create a `.env` file in the backend directory and add your GitHub access token as `PUBLIC_ACCESS_TOKEN`.
4. **Start the Servers**:
    - Run `node index.js` to start the backend server.
    - Launch the frontend development server with `npm start`.
5. **Access the Web App**: Open your browser and access the web application at `http://localhost:3000`.

## Features

- **Contribution Graph Display**: Fetches and displays a user's contribution graph using ReactCalendarHeatmap.
- **Repository Image Showcase**: Retrieves and showcases repository images associated with the user's GitHub profile.

## Dependencies

### Backend
- Express.js
- Axios
- Dotenv

### Frontend
- React.js
- Axios
- ReactCalendarHeatmap

## API Endpoints

### Contribution Graph Data
- **Endpoint**: `/api/contributionGraph/:username`
- **Method**: `GET`
- **Description**: Fetches contribution graph data for the specified GitHub user.

### Repository Image Data
- **Endpoint**: `/api/repositoryImage/:username`
- **Method**: `GET`
- **Description**: Retrieves repository image URLs for repositories owned by the specified GitHub user.

## GitHub API Limitations

- **Transaction Limit**: GitHub's GraphQL API limits fetching to only the last 30 transactions.
- **Timeframe**: Historical data retrieval is limited to a maximum of 60 past days.

### Note:
- Due to these limitations, the application may display partial contribution history beyond the specified limits.

## GitHub Events Utilized

- **PushEvent**: Utilized to capture code commit-related contributions for display on the calendar heatmap.

### Note:
- Other event types (e.g., `CreateEvent`, `DeleteEvent`, `ForkEvent`, `IssuesEvent`, etc.) are not utilized for displaying contributions on the calendar heatmap.
