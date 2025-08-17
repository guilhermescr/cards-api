# 🃏 CardShare API

A RESTful API for managing collectible or game cards using **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture**.

---

## 🚀 Project Overview

**Goal:**  
Develop a robust backend service to handle card-related data and user authentication, complete with CRUD operations, validation, testing, and deployment.

**Tech Stack:**

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – Data persistence
- **Mongoose** – ODM for MongoDB
- **JWT** – JSON Web Token for authentication

---

## 🧱 Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

```
├── models/
├── controllers/
├── routes/
├── middlewares/
├── services/
└── tests/
```

---

## 🃏 Card Schema

Here's the current structure for a `Card`:

```ts
Card {
  _id: ObjectId,
  name: string,         // Name of the card
  type: string,         // Type or category of the card
  description: string,  // Card effect or explanation
  imageUrl: string,     // Link to the card's image
  likes: number,        // Count of user likes
  visibility: 'private' | 'public' | 'unlisted',    // Visibility flag
  createdBy: ObjectId,  // User who created the card
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication & User Management

- JWT-based authentication
- Protected routes for:
  - Creating cards
  - Updating cards
  - Deleting cards
- Public routes for:
  - User registration (`/register`)
  - User login (`/login`)
  - Browsing public cards (`/cards?public=true`)

---

## 🔄 API Endpoints

| Method | Endpoint     | Description                         | Auth Required |
| ------ | ------------ | ----------------------------------- | ------------- |
| POST   | `/register`  | Register a new user                 | ❌            |
| POST   | `/login`     | Authenticate user                   | ❌            |
| POST   | `/cards`     | Create a new card                   | ✅            |
| GET    | `/cards`     | Retrieve all cards (public/private) | ❌ / ✅       |
| GET    | `/cards/:id` | Get card by ID                      | ❌ / ✅       |
| PUT    | `/cards/:id` | Update card by ID                   | ✅            |
| DELETE | `/cards/:id` | Delete card by ID                   | ✅            |

---

## ✅ Features

- ✅ MVC Architecture
- ✅ Card CRUD operations
- ✅ JWT-based auth
- ✅ Input validation
- ✅ Centralized error handling
- ✅ Public/Private card visibility
- ✅ Likes support
- ✅ Unit & integration tests

---

## 🧪 Testing

Tests are written for:

- Controllers
- Models
- Auth middleware

Run tests with:

```bash
npm test
```

---

## 📦 Deployment

Deploy this API on services like:

- [Render](https://render.com)
- [Vercel](https://vercel.com)
- [Heroku](https://www.heroku.com)

Make sure to configure environment variables properly (e.g., JWT_SECRET, DB_URI).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
