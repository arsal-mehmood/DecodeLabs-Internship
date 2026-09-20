# DecodeLabs Internship Projects

This repository contains my Full Stack Development internship projects completed during the DecodeLabs Industrial Training program.

The projects are arranged in three stages, starting from frontend development, moving to backend API development, and then adding database integration.

## Projects

### Project 1 - Responsive Frontend Interface

**Project:** Study Planner

A simple responsive study planner built using HTML, CSS, and basic JavaScript.

#### Features

- Responsive layout
- Mobile navigation
- Study task checklist
- Completed task counter
- Reset task option
- Dynamic current date
- Clean and simple user interface

#### Technologies

- HTML5
- CSS3
- JavaScript

#### Folder

```text
Project-1-Responsive-Frontend/
```

---

### Project 2 - Backend API Development

**Project:** Notes API

A simple backend API built with Node.js and Express.js.

The project focuses on handling requests and responses, creating API routes, accepting user input, and performing basic validation.

#### Features

- Express server
- GET API endpoints
- POST API endpoint
- Route parameters
- JSON request and response handling
- Basic input validation
- Error responses

#### Technologies

- Node.js
- Express.js
- JavaScript
- CORS

#### Main API Endpoints

```text
GET  /
GET  /api/notes
GET  /api/notes/:id
POST /api/notes
```

#### Folder

```text
Project-2-Backend-API/
```

---

### Project 3 - Database Integration

**Project:** Inventory Manager

A MERN-based inventory management application that connects the backend with MongoDB and performs CRUD operations on persistent data.

#### Features

- Create inventory products
- Read stored products
- Update products
- Delete products
- MongoDB database integration
- Mongoose schema validation
- Product search
- Category filtering
- Stock status
- Inventory statistics
- Responsive React interface

#### Technologies

- MongoDB
- Express.js
- React
- Node.js
- Mongoose
- Vite

#### Main API Endpoints

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

#### Folder

```text
Project-3-Database-Integration/
```

---

## Repository Structure

```text
DecodeLabs-Internship/
│
├── Project-1-Responsive-Frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Project-2-Backend-API/
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── README.md
│
├── Project-3-Database-Integration/
│   ├── client/
│   ├── server/
│   ├── package.json
│   ├── .gitignore
│   └── README.md
│
└── README.md
```

## How to Run

### Project 1

Open:

```text
Project-1-Responsive-Frontend/index.html
```

You can open the file directly in a browser or use Live Server in VS Code.

### Project 2

Open a terminal inside:

```text
Project-2-Backend-API
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The API runs at:

```text
http://localhost:5000
```

### Project 3

#### Backend

Open:

```text
Project-3-Database-Integration/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/decodelabs_inventory
```

Start the backend:

```bash
npm run dev
```

#### Frontend

Open another terminal inside:

```text
Project-3-Database-Integration/client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

## What I Learned

Through these projects, I practiced:

- Responsive frontend development
- Semantic HTML
- CSS Flexbox and Grid
- JavaScript DOM manipulation
- Node.js and Express.js
- REST API development
- Request and response handling
- Input validation
- MongoDB integration
- Mongoose schemas
- CRUD operations
- Connecting React frontend with an Express backend
- Organizing a full-stack project

## Important Notes

- `node_modules` folders are not included in the repository.
- `.env` files are not uploaded.
- Environment variable examples can be provided using `.env.example`.
- Install dependencies with `npm install` before running Node.js projects.

## Author

**Your Name**  
MERN Stack Developer

## Internship

**DecodeLabs Industrial Training**  
Full Stack Development  
Batch 2026
