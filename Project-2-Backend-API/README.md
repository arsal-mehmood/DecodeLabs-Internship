# DecodeLabs Project 2 - Notes API

A simple backend API built with Node.js and Express.js.

This project is part of DecodeLabs Full Stack Development training and focuses on backend API development.

## Project Goal

Build a simple backend server that can:

- Create API endpoints
- Handle client requests
- Send JSON responses
- Accept user input
- Validate basic data

## Technologies

- Node.js
- Express.js
- JavaScript
- CORS

## API Endpoints

### Home

```http
GET /
```

Returns a simple message to confirm that the server is running.

### Get All Notes

```http
GET /api/notes
```

Returns all notes.

### Get One Note

```http
GET /api/notes/:id
```

Example:

```text
GET /api/notes/1
```

### Create a Note

```http
POST /api/notes
```

Example JSON body:

```json
{
  "title": "Practice Node.js",
  "content": "Build a few simple Express routes."
}
```

Both `title` and `content` are required.

## Project Structure

```text
DecodeLabs-Project-2-Notes-API/
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## How to Run

### 1. Open the project folder in VS Code

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```

or:

```bash
npm start
```

The API will run at:

```text
http://localhost:5000
```

## Testing

You can test the API using:

- Browser for GET requests
- Postman
- Thunder Client

## Important Note

This project stores notes in a JavaScript array only.

The data will reset whenever the server restarts. Permanent database storage is covered in Project 3.

## What I Practiced

- Express server setup
- GET routes
- POST routes
- Route parameters
- JSON request bodies
- Status codes
- Basic input validation
- Error responses

## Author

Your Name

## Internship

DecodeLabs Industrial Training - Full Stack Development - Project 2
