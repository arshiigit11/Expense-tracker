import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, amount, trend, icon: Icon, type, delayClass }) => {
  return (
    <div className={`summary-card glass-panel animate-fade-in-up ${delayClass}`}>
      <div className="summary-header">
        <h3 className="summary-title">{title}</h3>
        <div className={`icon-wrapper ${type}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="summary-body">
        <h2 className="summary-amount">${amount}</h2>
        <div className={`summary-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
          <span>{trend >= 0 ? '+' : ''}{trend}%</span> from last month
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
