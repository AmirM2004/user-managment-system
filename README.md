This project is a **User Management System** that provides backend functionality for managing user accounts, authentication, and roles. It allows for user registration, login, and data management via a RESTful API.

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ORM)
* **Authentication:** JWT (JSON Web Tokens)
* **Other:** dotenv for environment variables, bcrypt for password hashing

## Features

* **User Registration:** Create new users with hashed passwords.
* **User Login:** Authenticate users and return JWT tokens.
* **JWT Authentication:** Protect routes and ensure secure access.
* **CRUD Operations:** Create, read, update, and delete user information.
* **Error Handling:** Centralized error management for API requests.

## Folder Structure

```
backend/
├─ controllers/       # Route handlers (business logic)
├─ models/            # Mongoose schemas for users
├─ routes/            # Express routes
├─ middlewares/       # Auth and error handling middleware
├─ utils/             # Utility functions (e.g., token generation)
├─ server.js          # Entry point for the backend server
```

## API Endpoints

* `POST /api/register` – Register a new user
* `POST /api/login` – Authenticate user and return JWT
* `GET /api/users` – Get all users (protected route)
* `GET /api/users/:id` – Get a single user by ID
* `PUT /api/users/:id` – Update user info
* `DELETE /api/users/:id` – Delete a user

## Setup & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/AmirM2004/user-managment-system.git
   ```
2. Navigate to backend folder:

   ```bash
   cd user-managment-system/backend
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Create a `.env` file with your MongoDB URI and JWT secret.
5. Start the server:

   ```bash
   npm start
   ```

## Notes

* Ensure MongoDB is running before starting the server.
* Use Postman or similar tools to test the API endpoints.

