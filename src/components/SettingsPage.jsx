import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Dashboard.css';

const SettingsPage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header animate-fade-in-up">
        <div>
          <h1>Settings</h1>
          <p>Manage your account preferences.</p>
        </div>
      </header>

      <div className="glass-panel animate-fade-in-up delay-1" style={{ padding: '2rem', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Profile Information</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Name</label>
            <input 
              type="text" 
              value={user?.name || ''} 
              disabled 
              style={{ width: '100%', maxWidth: '400px', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email</label>
            <input 
              type="email" 
              value={user?.email || ''} 
              disabled 
              style={{ width: '100%', maxWidth: '400px', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)' }} 
            />
          </div>
        </div>

        <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <h3 style={{ color: 'var(--danger)', marginBottom: '1rem', fontSize: '1.1rem' }}>Danger Zone</h3>
          <button onClick={logout} style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>
            Log Out of all devices
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
