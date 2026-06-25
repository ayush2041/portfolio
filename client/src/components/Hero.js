import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'Data Scientist',
  'AI/ML Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="name-highlight">Ayush Singh</span>
        </h1>

        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-desc">
          I'm a developer passionate about building intelligent solutions by combining full-stack development with machine learning. Currently exploring AI/ML through hands-on projects and learning new concepts every day.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Tech Domains</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-outline" onClick={() => scrollToSection('contact')}>
            Get in Touch
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/ayush2041" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/ayush-singh2541" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:singhayush2041@gmail.com" className="social-link" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </div>
  );
}
