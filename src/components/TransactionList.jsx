import React from 'react';
import './TransactionList.css';
import { ArrowUpRight, ArrowDownLeft, Coffee, ShoppingBag, Zap, Car, DollarSign, Home, Heart } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch(category?.toLowerCase()) {
    case 'food & dining': return Coffee;
    case 'shopping': return ShoppingBag;
    case 'utilities': return Zap;
    case 'transportation': return Car;
    case 'income': return ArrowDownLeft;
    case 'housing': return Home;
    case 'health': return Heart;
    default: return DollarSign;
  }
};

const TransactionList = ({ transactions, delayClass }) => {
  if (!transactions || transactions.length === 0) {
    return (
      <div className={`transaction-list-container glass-panel animate-fade-in-up ${delayClass}`}>
        <div className="transaction-list-header">
          <h3>Recent Transactions</h3>
        </div>
        <div className="transaction-empty-state" style={{ padding: '2rem', textAlign: 'center', opacity: 0.6 }}>
          <p>No transactions found. Add one to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`transaction-list-container glass-panel animate-fade-in-up ${delayClass}`}>
      <div className="transaction-list-header">
        <h3>Recent Transactions</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="transaction-list">
        {transactions.map((tx) => {
          const IconComponent = getCategoryIcon(tx.category);
          const dateStr = new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });
          return (
            <div key={tx._id || tx.id} className="transaction-item">
              <div className="tx-left">
                <div className={`tx-icon ${tx.type}`}>
                  <IconComponent size={20} />
                </div>
                <div className="tx-details">
                  <h4>{tx.title}</h4>
                  <p>{tx.category} • {dateStr}</p>
                </div>
              </div>
              <div className="tx-right">
                <span className={`tx-amount ${tx.type}`}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TransactionList;
