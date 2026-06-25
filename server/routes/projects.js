const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Seed data for demo
const seedProjects = [
  {
    title: 'AI-Powered Resume Analyzer',
    description: 'An intelligent resume parser using NLP and ML models to score resumes against job descriptions, providing actionable feedback and keyword optimization.',
    tech: ['Python', 'Flask', 'React', 'MongoDB', 'scikit-learn', 'spaCy'],
    github: 'https://github.com',
    category: 'ai',
    featured: true
  },
  {
    title: 'E-Commerce MERN Platform',
    description: 'Full-stack e-commerce web application with JWT authentication, Stripe payments, real-time inventory management, and admin dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Stripe'],
    github: 'https://github.com',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Data Dashboard & Visualizer',
    description: 'Interactive data analytics dashboard for visualizing large datasets using D3.js charts, pandas data pipelines, and RESTful API integration.',
    tech: ['Python', 'Pandas', 'React', 'D3.js', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    category: 'datascience',
    featured: true
  },
  {
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat app with rooms, private messaging, file sharing, and message persistence using MongoDB.',
    tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com',
    category: 'fullstack',
    featured: false
  }
];

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    let projects;
    if (require('mongoose').connection.readyState === 1) {
      const count = await Project.countDocuments();
      if (count === 0) {
        await Project.insertMany(seedProjects);
      }
      projects = await Project.find().sort({ featured: -1, createdAt: -1 });
    } else {
      projects = seedProjects.map((p, i) => ({ ...p, _id: `seed-${i}` }));
    }
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
