import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import './Dashboard.css'; // Reuse some layout styles

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/transactions`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setTransactions(data.data);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header animate-fade-in-up">
        <div>
          <h1>All Transactions</h1>
          <p>Review your complete history of income and expenses.</p>
        </div>
      </header>

      {loading ? (
        <p style={{ color: 'white' }}>Loading...</p>
      ) : (
        <TransactionList transactions={transactions} delayClass="delay-1" />
      )}
    </div>
  );
};

export default TransactionsPage;
