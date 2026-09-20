# DecodeLabs Project 3 — Inventory Manager

A full-stack **MERN Inventory Management System** built for DecodeLabs Project 3: **Database Integration**.

The project demonstrates persistent storage with MongoDB, a Mongoose schema, RESTful CRUD operations, validation, filtering, and a responsive React interface.

## Project Objective

Connect a backend application to a database so data can be stored, retrieved, updated, and deleted reliably.

## Core Requirements Covered

- MongoDB database integration
- Mongoose schema design
- Create products
- Read products
- Update products
- Delete products
- Server-side validation
- Error handling
- Search and category filtering
- Stock status tracking
- Responsive frontend UI

## Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Data Schema

Each inventory item stores:

```js
{
  name: String,
  sku: String,
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

The `sku` field is unique so duplicate inventory records cannot be created accidentally.

## REST API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

Search and filter are also supported:

```text
GET /api/products?search=keyboard&category=Electronics
```

## Project Structure

```text
DecodeLabs-Project-3-Inventory-Manager/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductList.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

## How to Run

### 1. Install MongoDB

You can use either:

- MongoDB Atlas
- MongoDB Community Server on your computer

### 2. Configure the backend

Open the server folder:

```bash
cd server
npm install
```

Create a `.env` file using `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/decodelabs_inventory
```

For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

Start the server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Configure the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend normally opens at:

```text
http://localhost:5173
```

## Validation and Data Handling

The API validates:

- Product name is required
- SKU is required and unique
- Category is required
- Price cannot be negative
- Quantity must be a non-negative integer
- Invalid MongoDB IDs return a proper error
- Duplicate SKU values return a readable conflict response

## Suggested GitHub Repository Structure

If you are submitting several DecodeLabs projects in one repository:

```text
DecodeLabs-Internship/
├── Project-1/
├── Project-2/
├── Project-3-Inventory-Manager/
└── README.md
```

## Future Improvements

- User authentication
- Role-based admin access
- Product images
- Pagination
- CSV export
- Low-stock alerts
- Deployment
- Automated API tests

## Author

**Your Name**  
MERN Stack Developer

## Internship

DecodeLabs Industrial Training — Project 3
