import React, { useState, useEffect, useContext } from 'react';
import SummaryCard from './SummaryCard';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import ExpenseChart from './ExpenseChart';
import { AuthContext } from '../context/AuthContext';
import { Wallet, TrendingUp, TrendingDown, Plus, LogOut } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ balance: 0, income: 0, expense: 0 });
  const [showAddModal, setShowAddModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/transactions', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setTransactions(data.data);
        calculateTotals(data.data);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotals = (txs) => {
    const income = txs.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = txs.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    setTotals({
      balance: income - expense,
      income,
      expense
    });
  };

  const handleTransactionAdded = (newTx) => {
    const updatedTxs = [newTx, ...transactions];
    setTransactions(updatedTxs);
    calculateTotals(updatedTxs);
  };

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header animate-fade-in-up">
        <div>
          <h1>Welcome back, {user?.name || 'User'}!</h1>
          <p>Here's a summary of your finances today.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="add-tx-btn" onClick={() => setShowAddModal(true)}>
            <Plus size={20} />
            <span>Add Transaction</span>
          </button>
          <button className="add-tx-btn" style={{ background: 'rgba(255,255,255,0.1)' }} onClick={logout}>
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <section className="summary-section">
        <SummaryCard 
          title="Total Balance" 
          amount={totals.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })} 
          trend={0} 
          icon={Wallet} 
          type="balance" 
          delayClass="delay-100"
        />
        <SummaryCard 
          title="Total Income" 
          amount={totals.income.toLocaleString('en-US', { minimumFractionDigits: 2 })} 
          trend={0} 
          icon={TrendingUp} 
          type="income" 
          delayClass="delay-200"
        />
        <SummaryCard 
          title="Total Expenses" 
          amount={totals.expense.toLocaleString('en-US', { minimumFractionDigits: 2 })} 
          trend={0} 
          icon={TrendingDown} 
          type="expense" 
          delayClass="delay-300"
        />
      </section>

      <section className="main-dashboard-grid">
        <div className="chart-placeholder glass-panel animate-fade-in-up delay-400">
          <h3>Income vs Expense</h3>
          {loading ? (
             <div className="chart-empty-state"><p>Loading...</p></div>
          ) : (
             <ExpenseChart transactions={transactions} />
          )}
        </div>
        {loading ? (
          <div className="transaction-list-container glass-panel animate-fade-in-up delay-500">
            <p style={{ padding: '2rem', textAlign: 'center' }}>Loading transactions...</p>
          </div>
        ) : (
          <TransactionList transactions={transactions} delayClass="delay-500" />
        )}
      </section>

      {showAddModal && (
        <AddTransaction 
          onClose={() => setShowAddModal(false)} 
          onAdd={handleTransactionAdded} 
        />
      )}
    </div>
  );
};

export default Dashboard;
