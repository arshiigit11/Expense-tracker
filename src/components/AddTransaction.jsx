import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddTransaction.css';

const AddTransaction = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().slice(0, 10)
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ['Food & Dining', 'Shopping', 'Utilities', 'Transportation', 'Housing', 'Health', 'Income', 'Other'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        onAdd(data.data); // Update dashboard
        onClose(); // Close modal
      } else {
        setError(data.error || 'Failed to add transaction');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="add-transaction-modal glass-panel animate-fade-in-up">
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <h2>Add New Transaction</h2>
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Starbucks Coffee" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Amount</label>
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required min="0" step="0.01" placeholder="0.00" />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="" disabled>Select Category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Adding...' : 'Add Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
