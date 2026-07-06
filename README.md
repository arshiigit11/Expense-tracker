# Expensify - Full Stack Expense Tracker     

A full-stack, aesthetically pleasing web application designed to help you track your income, expenses, and financial summaries. Built with the **MERN** stack (MongoDB, Express, React, Node.js) and featuring a stunning dark-themed UI with glassmorphism elements. 
expense-tracker-mu-navy-72.vercel.app
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


---
*Designed with ❤️ for better personal finance tracking.*
