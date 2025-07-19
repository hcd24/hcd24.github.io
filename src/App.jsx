import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './styles/main.css';

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Home />
      </main>
    </div>
  );
}
