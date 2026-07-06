import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Sidebar.css';
import { LayoutDashboard, Receipt, PieChart, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <aside className="sidebar glass-panel animate-fade-in-up">
      <div className="sidebar-brand">
        <div className="brand-logo"></div>
        <h2>Expensify</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>
              <Receipt size={20} />
              <span>Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
              <PieChart size={20} />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
              <Settings size={20} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={logout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
