# Library API Backend Documentation

## 🚀 Overview

The Library API Backend is a robust Express.js-powered RESTful API designed to manage a comprehensive library management system. Built with modern web development practices, this backend provides efficient endpoints for managing books, users, and reservations.

## ✨ Key Features

- **User Authentication**
  - JWT-based secure authentication
  - Password hashing with bcrypt
  - Role-based access control

- **Resource Management**
  - CRUD operations for books, users, and reservations
  - Comprehensive input validation
  - MongoDB database integration with Mongoose

## 📂 Project Structure

```plaintext
library-backend/
├── conn/               # Database connection
│   └── connexion.js    # MongoDB connection configuration
├── controllers/        # Business logic
│   ├── bookController.js
│   ├── userController.js
│   └── reservationController.js
├── models/             # Mongoose schemas
│   ├── Book.js
│   ├── User.js
│   └── Reservation.js
├── routes/             # API route definitions
│   ├── book.js
│   ├── user.js
│   └── reservation.js
├── requests/           # Validation logic
│   └── userValidation.js
├── docker-compose.yaml # Docker configuration
├── Dockerfile          # Container definition
├── index.js            # Application entry point
└── package.json        # Dependency management
```

## 🔧 Prerequisites

- Node.js (v14+ recommended)
- MongoDB
- npm or Yarn

## 🛠 Installation & Setup

1. Install dependencies
   ```bash
   npm install
   ```

2. Run the application
   ```bash
   # Development mode
   nodemon index.js

   # Production mode
   node index.js
   ```

## 🔐 Authentication Workflow

1. User Registration
   - Endpoint: `POST /api/users/register`
   - Required Fields: `name`, `email`, `password`
   - Returns: JWT token and user ID

2. User Login
   - Endpoint: `POST /api/users/login`
   - Required Fields: `email`, `password`
   - Returns: JWT token for authenticated sessions

## 📘 API Endpoints

### Users
- `GET /api/users`: Retrieve all users
- `POST /api/users/register`: Create new user
- `POST /api/users/login`: Authenticate user

### Books
- `GET /api/books`: List all books
- `GET /api/books/:id`: Get specific book
- `POST /api/books`: Add new book
- `PUT /api/books/:id`: Update book details
- `DELETE /api/books/:id`: Remove book

### Reservations
- `GET /api/reservations`: List all reservations
- `POST /api/reservations`: Create reservation
- `DELETE /api/reservations/:id`: Cancel reservation

## 🛡️ Security Features

- Password encryption using bcrypt
- JWT-based authentication
- Input validation with Joi
- Protected routes requiring authentication

## 📦 Tech Stack

- **Backend**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Joi
- **Password Hashing**: bcrypt

## 🐳 Docker Support

- Containerized application
- `docker-compose.yaml` for easy deployment
- Separate configurations for development and production

## 🚧 Error Handling

Standardized error responses:
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

[Specify your license, e.g., MIT]

## 📞 Support

For issues or questions, please open a GitHub issue or contact support@yourdomain.com