import React, { useState, useEffect } from 'react';
import ExpenseChart from './ExpenseChart';
import './Dashboard.css';

const ReportsPage = () => {
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
          <h1>Financial Reports</h1>
          <p>Analyze your spending patterns over time.</p>
        </div>
      </header>

      {loading ? (
        <p style={{ color: 'white' }}>Loading...</p>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          <ExpenseChart transactions={transactions} delayClass="delay-1" />
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
