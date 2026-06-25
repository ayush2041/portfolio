import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    type: 'education',
    title: 'B.Tech in Information Technology',
    organization: 'Dr. A.P.J. Abdul Kalam Technical University',
    duration: '2023 – 2027',
    location: 'kanpur, India',
    description: 'Pursuing degree in Information Technology with focus on software engineering, data structures, algorithms, AI/ML, and web development.',
    points: [
      'Relevant coursework: DSA, DBMS, OS, Machine Learning, Web Development',
      'Active member of the coding club and tech society',
      'Participated in multiple hackathons and coding competitions',
    ],
    icon: '🎓',
  },
  {
    id: 2,
    type: 'internship',
    title: 'Student Research Associate',
    organization: 'IIT Kanpur\'s Research and Development Lab',
    duration: 'Dec 2025 – Jan 2026',
    location: 'Contractual, On-site',
    description: 'Developed and deployed interactive virtual laboratory simulations for chemistry education, collaborating with faculty members to deliver scalable remote learning solutions.',
    points: [
      'Built 5+ browser-based chemistry simulations using JavaScript, HTML5, and CSS3, enabling virtual lab experiments for 100+ students',
      'Automated experiment result generation and reporting workflows, reducing manual effort by 60% and improving reproducibility of academic outputs',
      'Collaborated with IIT Kanpur faculty to validate, optimize, and deploy simulation modules, providing remote laboratory access for 100+ students',
   ],
    icon: '💼',
  },
  {
    id: 2,
    type: 'internship',
    title: 'Web Development Intern',
    organization: 'Infosys springboard',
    duration: 'Sep 2025 – Nov 2025',
    location: 'Remote',
    description: 'Built and maintained full-stack features using MERN stack. Collaborated with senior developers on production-level code.',
    points: [
      'Developed RESTful APIs using Node.js and Express serving 500+ daily users',
      'Built React components reducing page load time by 30%',
      'Integrated MongoDB aggregation pipelines for analytics dashboard',
    ],
    icon: '💼',
  },
  {
    id: 3,
    type: 'research',
    title: 'Machine Learning Research Project',
    organization: 'University',
    duration: 'Jan 2024 – Apr 2024',
    location: 'On-site',
    description: 'Developed ML models for predictive analytics as part of a faculty-guided research initiative.',
    points: [
      'Built classification model achieving 91% accuracy on validation set',
      'Applied NLP for text preprocessing and feature extraction',
      'Presented findings to faculty and peers',
    ],
    icon: '🔬',
  },
  {
    id: 4,
    type: 'certification',
    title: 'Certifications & Achievements',
    organization: 'Various Platforms',
    duration: '2023 – Present',
    location: 'Online',
    description: 'Continuous learning through industry-recognized certifications.',
    points: [
      'Meta Front-End Developer Certificate – Coursera',
      'Machine Learning Specialization – Andrew Ng (Coursera)',
      'MongoDB Atlas Associate Developer – MongoDB University',
      'AWS Cloud Practitioner Essentials – AWS',
      ' Hands-on Training in Signal Processing, DAQ, and AI Inference – Atal Bihari Vajpayee Research Centre',
    ],
    icon: '🏆',
  },
];

const typeColors = {
  education: '#3b5bdb',
  internship: '#059669',
  research: '#7c3aed',
  certification: '#d97706',
};

const typeLabels = {
  education: 'Education',
  internship: 'Internship',
  research: 'Research',
  certification: 'Certifications',
};

export default function Experience() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="experience-section">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience & Education</h2>
        <div className="section-divider"></div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`timeline-item ${activeId === exp.id ? 'expanded' : ''}`}
              onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
            >
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ background: typeColors[exp.type] }}>
                  <span>{exp.icon}</span>
                </div>
                {i < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <span
                      className="exp-type-badge"
                      style={{ color: typeColors[exp.type], background: `${typeColors[exp.type]}18`, border: `1px solid ${typeColors[exp.type]}40` }}
                    >
                      {typeLabels[exp.type]}
                    </span>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-meta">
                      <span className="exp-org">{exp.organization}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-duration">{exp.duration}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-location">📍 {exp.location}</span>
                    </div>
                  </div>
                  <div className={`expand-icon ${activeId === exp.id ? 'open' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                {activeId === exp.id && (
                  <ul className="exp-points">
                    {exp.points.map((pt, j) => (
                      <li key={j}>
                        <span className="bullet">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
