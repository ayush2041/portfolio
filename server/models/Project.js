const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  github: { type: String },
  live: { type: String },
  category: { type: String, enum: ['fullstack', 'ai', 'datascience', 'frontend'], default: 'fullstack' },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
