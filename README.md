# Expensify - Full Stack Expense Tracker 🚀

![Expensify Cover](https://via.placeholder.com/1200x600/1B1B1B/FFFFFF?text=Expensify+-+Your+Personal+Finance+Tracker)

A full-stack, aesthetically pleasing web application designed to help you track your income, expenses, and financial summaries. Built with the **MERN** stack (MongoDB, Express, React, Node.js) and featuring a stunning dark-themed UI with glassmorphism elements.

## ✨ Features

*   **User Authentication**: Secure Login & Registration using JWT and bcrypt.
*   **Dynamic Dashboard**: Protected routes showing a real-time summary of your finances (Total Balance, Income, Expenses).
*   **Transaction Management**: Add and track incomes and expenses instantly.
*   **Financial Reports**: Visual analytics using `recharts` to map out your spending patterns.
*   **Modern UI/UX**: Premium dark mode design, glassmorphism (`backdrop-filter`), smooth staggered animations, and modern iconography via `lucide-react`.

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), React Router v6, CSS3 (Glassmorphism & CSS Variables)
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Atlas)
*   **Authentication**: JSON Web Tokens (JWT) & bcryptjs
*   **Data Visualization**: Recharts

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed and a [MongoDB Atlas](https://www.mongodb.com/atlas/database) account.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arshiigit11/Expense-tracker.git
   cd Expense-tracker
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   ```

4. **Environment Setup:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

### Running the Application

To run both the backend server and the frontend Vite server simultaneously, open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd server
node server.js
```

**Terminal 2 (Frontend):**
```bash
# From the root directory
npm run dev
```

The application will be running at `http://localhost:5173`.

## 📂 Folder Structure

```
expense-tracker/
├── server/                 # Backend Express application
│   ├── config/             # DB Connection
│   ├── controllers/        # Route logic (Auth, Transactions)
│   ├── middleware/         # Custom middleware (JWT verification)
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # Express API routes
│   └── server.js           # Entry point
├── src/                    # Frontend React application
│   ├── assets/             # Static assets
│   ├── components/         # Reusable UI components
│   ├── context/            # Global React Context (Auth)
│   ├── App.jsx             # Main router configuration
│   └── index.css           # Global styles and variables
└── ...
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---
*Designed with ❤️ for better personal finance tracking.*
