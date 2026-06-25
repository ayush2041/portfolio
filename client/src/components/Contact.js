import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="section-divider"></div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm actively looking for internships, collaborations, and exciting projects.
              Whether you have an opportunity, a question, or just want to say hello — my inbox is open.
            </p>

            <div className="contact-cards">
              <a href="mailto:singhayush2041@gmail.com" className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">singhayush2041@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/ayush-singh2541" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-card-icon">💼</div>
                <div>
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/ayush-singh2541</span>
                </div>
              </a>
              <a href="https://github.com/ayush2041" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-card-icon">💻</div>
                <div>
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/ayush2041</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
                <button className="btn-outline" onClick={() => setStatus('')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label>Name</label>
                    <input
                      type="text" name="name" value={form.name}
                      placeholder="Your full name"
                      onChange={handleChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label>Email</label>
                    <input
                      type="email" name="email" value={form.email}
                      placeholder="your@email.com"
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    placeholder="What's this about?"
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label>Message</label>
                  <textarea
                    name="message" value={form.message} rows="5"
                    placeholder="Tell me more about your project or opportunity..."
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="form-alert error">
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="spinner"></span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
