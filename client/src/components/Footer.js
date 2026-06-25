import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>Ayush<span className="logo-accent">Portfolio</span><span className="logo-bracket"> /&gt;</span>
        </div>
        <p className="footer-text">
          Built with <span className="heart">♥</span> using MongoDB · Express · React · Node.js
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Ayush Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
