# TTRPG Library Frontend

## What This Project Does

This React application is the frontend for the TTRPG Library project. It displays a list of tabletop role-playing games retrieved from the Flask backend and allows users to add new games using a form.

The frontend communicates with the backend using the Fetch API.

## Requirements

- Node.js
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the project with the following:

```env
VITE_API_URL=http://127.0.0.1:5000
```

## Running the Frontend

Start the React development server:

```bash
npm run dev
```

Open your browser and navigate to the address shown in the terminal (typically `http://localhost:5173`).

**Note:** The Flask backend must also be running for the application to load and add games successfully.