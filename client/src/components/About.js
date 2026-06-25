import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="avatar-card">
              <div className="avatar-ring">
                <div className="avatar-inner">
                  <span className="avatar-emoji">👨‍💻</span>
                </div>
              </div>
              <div className="avatar-info-cards">
                <div className="info-card">
                  <span className="info-icon">🎓</span>
                  <div>
                    <span className="info-title">Student</span>
                    <span className="info-sub">B.Tech, Information Technology</span>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">📍</span>
                  <div>
                    <span className="info-title">Location</span>
                    <span className="info-sub">Kanpur, India</span>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">🤝</span>
                  <div>
                    <span className="info-title">Open To</span>
                    <span className="info-sub">Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Bridging Code, Data & Intelligence</h2>
            <div className="section-divider"></div>

            <p className="about-para">
              I'm a Information Technology student with a strong foundation in Full Stack Development
              using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).
              Beyond web development, I've ventured into the exciting worlds of
              <strong> Data Science</strong> and <strong>AI/ML</strong> — building models,
              analyzing data, and integrating intelligence into applications.
            </p>

            <p className="about-para">
              I believe in writing clean, scalable code and creating user experiences that
              are both functional and beautiful. I'm constantly learning, building projects,
              and pushing my limits across the full technology stack.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div>
                  <strong>Fast Learner</strong>
                  <p>Adapts quickly to new technologies and frameworks</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔬</div>
                <div>
                  <strong>Research-Oriented</strong>
                  <p>Strong interest in AI/ML research and applications</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div>
                  <strong>Project-Focused</strong>
                  <p>Builds end-to-end solutions from idea to deployment</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="https://drive.google.com/uc?export=download&id=1gI5HoYEg3BOs7GhB73cqx95-h7NPC8NA" className="btn-primary" target="_blank" rel="noreferrer">
                Download Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
