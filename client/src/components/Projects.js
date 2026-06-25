import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const categoryColors = {
  fullstack: { label: 'Full Stack', color: '#3b5bdb' },
  ai: { label: 'AI / ML', color: '#7c3aed' },
  datascience: { label: 'Data Science', color: '#0891b2' },
  frontend: { label: 'Frontend', color: '#059669' },
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('API not available, using fallback data');
        setProjects([
          {
            _id: '1', title: 'AI-Powered Resume Analyzer',
            description: 'An intelligent resume parser using NLP and ML models to score resumes against job descriptions.',
            tech: ['Python', 'Flask', 'React', 'MongoDB', 'scikit-learn'],
            github: 'https://github.com', category: 'ai', featured: true
          },
          {
            _id: '2', title: 'E-Commerce MERN Platform',
            description: 'Full-stack e-commerce with JWT authentication, Stripe payments, and real-time inventory.',
            tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
            github: 'https://github.com', category: 'fullstack', featured: true
          },
          {
            _id: '3', title: 'Data Dashboard & Visualizer',
            description: 'Interactive analytics dashboard for visualizing large datasets with D3.js and pandas pipelines.',
            tech: ['Python', 'Pandas', 'React', 'D3.js', 'FastAPI'],
            github: 'https://github.com', category: 'datascience', featured: true
          },
          {
            _id: '4', title: 'Real-Time Chat Application',
            description: 'WebSocket-based chat app with rooms, private messaging, and message persistence.',
            tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
            github: 'https://github.com', category: 'fullstack', featured: false
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const categories = ['all', ...new Set(projects.map((p) => p.category))];

  return (
    <div className="projects-section">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Projects' : categoryColors[cat]?.label || cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="projects-loading">
            {[1,2,3].map(i => <div key={i} className="project-skeleton"></div>)}
          </div>
        ) : (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const cat = categoryColors[project.category] || { label: project.category, color: '#3b5bdb' };

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-card-header">
        <div className="project-folder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
          </svg>
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <span className="project-cat-badge" style={{ color: cat.color, background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
        {cat.label}
      </span>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech?.slice(0, 5).map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
        {project.tech?.length > 5 && (
          <span className="tech-pill more">+{project.tech.length - 5}</span>
        )}
      </div>
    </div>
  );
}
