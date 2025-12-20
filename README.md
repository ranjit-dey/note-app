# Note Application

A full-stack note-taking application built with the **MERN** stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone Repository](#clone-repository)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local or Atlas URI)
- **Upstash Account** (for Redis rate limiting)

## Clone Repository

```bash
git clone https://github.com/ranjit-dey/note-app.git
```

## Backend Setup

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Create Environment File

Create a `.env` file in the backend directory:

```bash
touch .env
```

### Step 3: Configure Environment Variables

Add the following environment variables to the `.env` file:

```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# Server Port
PORT=5001

# Rate Limiting (Upstash Redis)
# Sign up at https://upstash.com to get these credentials
UPSTASH_REDIS_REST_URL=https://<your-upstash-url>.upstash.io
UPSTASH_REDIS_REST_TOKEN=<your-upstash-token>
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start Backend Server

```bash
npm run dev
```

The backend server will start on **<http://localhost:5001>**

> **Note:** The server uses `nodemon` for development, which auto-restarts when files change.

## Frontend Setup

### Step 1: Open New Terminal and Navigate to Frontend

```bash
cd frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Frontend Development Server

```bash
npm run dev
```

The frontend will typically start on **<http://localhost:5173>**

> **Note:** Vite uses hot module replacement (HMR) for instant updates during development.

## Running the Application

### Option 1: Using Two Terminals (Recommended for Development)

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

Once both servers are running:

- Open your browser
- Navigate to **<http://localhost:5173>**
- The frontend will communicate with the backend API at `http://localhost:5001`

### Option 2: Running Sequentially

If you prefer to run from a single terminal:

```bash
# Start backend
cd backend
npm run dev &

# In a new terminal, start frontend
cd frontend
npm run dev
```

## Available Scripts

### Backend Scripts

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| `npm run dev` | Start development server with auto-reload (nodemon) |
| `npm start`   | Start production server                             |

### Frontend Scripts

|Script             |Description                                                 |
|-------------------|------------------------------------------------------------|
| `npm run dev`     |Start development server with Vite (<http://localhost:5173>)|
| `npm run build`   | Build for production                                       |
| `npm run lint`    | Run ESLint to check code quality                           |
| `npm run preview` | Preview production build locally                           |

## Key Features

- **Create, Read, Update, Delete** notes
- **Rate limiting** using Upstash Redis to prevent abuse
- **Real-time UI updates** with React
- **MongoDB** for persistent data storage
- **Express.js** RESTful API
- **Responsive design** with Tailwind CSS
- **Form validation** and error handling

## Troubleshooting

### Backend won't start

- Check if port 5001 is in use: `lsof -i :5001`
- Verify MongoDB connection string is correct
- Ensure `.env` file exists in the backend directory

### Frontend won't connect to backend

- Verify backend is running on `http://localhost:5001`
- Check browser console for CORS errors
- Ensure backend's CORS configuration allows frontend origin

### Rate limiting errors

- Check Upstash Redis credentials in `.env`
- Verify your Upstash account is active and has available quota

## License

ISC

## Author

Ranjit Dey
