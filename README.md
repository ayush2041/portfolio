# 🚀 MERN Stack Portfolio Website

A professional, fully-featured portfolio built from scratch with the **MERN stack** — MongoDB, Express.js, React, and Node.js.

---

## 📁 Project Structure

```
portfolio/
├── client/                  ← React Frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.js / .css
│       │   ├── Hero.js / .css
│       │   ├── About.js / .css
│       │   ├── Skills.js / .css
│       │   ├── Projects.js / .css
│       │   ├── Experience.js / .css
│       │   ├── Contact.js / .css
│       │   └── Footer.js / .css
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── index.css
│
├── server/                  ← Express Backend
│   ├── models/
│   │   ├── Contact.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── projects.js
│   ├── index.js
│   ├── .env.example
│   └── package.json
│
├── package.json             ← Root (runs both)
└── README.md
```

---

## ⚙️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 18, React Router, Axios     |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB + Mongoose                |
| Styling    | Custom CSS with CSS Variables     |
| Animation  | CSS Animations                    |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone & Install

```bash
# Install all dependencies at once
npm run install-all
```

### 2. Set up Environment Variables

```bash
cd server
```

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

### 3. Run in Development

```bash
# From root directory — runs both server and client
npm run dev #server
npm start #client
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🔌 API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| GET    | /api/health       | Server health check     |
| GET    | /api/projects     | Fetch all projects      |
| POST   | /api/projects     | Add a new project       |
| POST   | /api/contact      | Submit contact form     |
| GET    | /api/contact      | View all messages       |

---

## ✏️ Customization Checklist

- [ ] Update your **name** in `Hero.js` (replace "Alex Dev")
- [ ] Update **social links** in `Hero.js` and `Contact.js`
- [ ] Update **email** in `Contact.js`
- [ ] Edit **about text** in `About.js`
- [ ] Replace **projects** via the API or directly in `Projects.js`
- [ ] Update **experience** entries in `Experience.js`
- [ ] Add your **resume PDF** as `client/public/resume.pdf`
- [ ] Update `<title>` in `client/public/index.html`

---

## 🌐 Deployment

### Deploy Frontend (Vercel / Netlify)
```bash
cd client && npm run build
```
Upload the `build/` folder.

### Deploy Backend (Railway / Render / Heroku)
Point to `server/index.js`.
Set env vars: `MONGO_URI`, `CLIENT_URL`, `PORT`.

### Database (MongoDB Atlas)
Replace `MONGO_URI` with your Atlas connection string.

---

## 📸 Sections

| Section    | Description                                        |
|------------|----------------------------------------------------|
| Hero       | Animated typing role, stats, CTA, social links     |
| About      | Bio, highlights, resume download                   |
| Skills     | Tabbed skill categories with progress bars         |
| Projects   | Filterable cards fetched from backend API          |
| Experience | Interactive timeline (click to expand details)     |
| Contact    | Form connected to Express backend + validation     |

---

Built with ❤️ using the MERN Stack
