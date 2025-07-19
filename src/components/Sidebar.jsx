import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar">
        {/* Replace with your image */}
        <img src="/assets/avatar.png" alt="Avatar" />
      </div>
      <h2 className="name">Hrishi Deshmukh</h2>
      <p className="title">Web Developer</p>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}
