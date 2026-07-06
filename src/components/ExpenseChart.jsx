import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ExpenseChart = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="chart-empty-state">
        <p>Not enough data to display chart.</p>
      </div>
    );
  }

  // Aggregate transactions by Date
  const aggregatedData = {};
  transactions.forEach((tx) => {
    const dateStr = new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    if (!aggregatedData[dateStr]) {
      aggregatedData[dateStr] = { name: dateStr, Income: 0, Expense: 0 };
    }
    if (tx.type === 'income') {
      aggregatedData[dateStr].Income += tx.amount;
    } else {
      aggregatedData[dateStr].Expense += tx.amount;
    }
  });

  // Convert to array and reverse so oldest is first
  const data = Object.values(aggregatedData).reverse().slice(-7); // Last 7 days with data

  return (
    <div style={{ width: '100%', height: '300px', marginTop: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888' }} />
          <YAxis stroke="#888" tick={{ fill: '#888' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a2e', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} 
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="Income" fill="#4ade80" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Expense" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
