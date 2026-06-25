import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'mern',
    label: 'MERN Stack',
    icon: '⚡',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Redux', level: 75 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'TensorFlow', level: 72 },
      { name: 'scikit-learn', level: 78 },
      { name: 'NLP', level: 70 },
      { name: 'OpenCV', level: 68 },
      { name: 'Keras', level: 72 },
    ],
  },
  {
    id: 'data',
    label: 'Data Science',
    icon: '📊',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 84 },
      { name: 'Matplotlib', level: 80 },
      { name: 'SQL', level: 82 },
      { name: 'Jupyter', level: 88 },
      { name: 'Power BI', level: 70 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Linux', level: 72 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 88 },
      { name: 'Firebase', level: 75 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('mern');
  const current = skillCategories.find((c) => c.id === active);

  return (
    <div className="skills-section">
      <div className="container">
        <p className="section-label">Technical Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>

        <div className="skill-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {current.skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-tags-section">
          <p className="tags-label">Also familiar with</p>
          <div className="tech-tags">
            {['TypeScript', 'GraphQL', 'AWS', 'Tailwind CSS', 'FastAPI', 'PostgreSQL',
              'Redis', 'Selenium', 'Hugging Face', 'LangChain', 'Next.js', 'WebSocket'].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
