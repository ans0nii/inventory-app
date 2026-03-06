# Motorcycle Inventory Management System
A full-stack motorcycle dealership inventory application built with React and Express.

## Live Demo
* **Frontend:** https://inventory-app-4enp.vercel.app/
* **Backend API:** https://inventory-app-production-49ee.up.railway.app

## Screenshot
<img width="1580" height="1017" alt="image" src="https://github.com/user-attachments/assets/0735e11b-ba4d-40b6-976a-e60a4b99caf5" />
<img width="1273" height="1186" alt="image" src="https://github.com/user-attachments/assets/789b883b-cab7-40b4-a04b-96cb483041e7" />

## Features
* View all motorcycles in a responsive CSS Grid layout
* Add new motorcycles with comprehensive form validation
* Real-time search and filtering by model name
* Delete motorcycles with confirmation dialogs
* Responsive design for desktop and mobile
* Toggle form visibility for clean user interface

## Security & Validation
* XSS attack prevention (Front and backend sanitization)
* Input length validation and character limits
* Server-side data validation

## User Experience
* Fully responsive design for desktop, tablet and mobile
* CSS modules for component-scoped styling

## Technologies Used
**Frontend:**
* React with Hooks (useState, useEffect)
* CSS modules
* JavaScript ES6+
* CSS3 with responsive grid layout
* Vite for build tooling

**Backend:**
* Express.js REST API
* PostgreSQL database with parameterized queries
* Node.js runtime
* Input sanitization
* CORS middleware for cross-origin requests

## Deployment
* Frontend: Vercel with automatic deployments
* Backend: Railway with PostgreSQL database
* Environment variable management

## API Endpoints
* `GET /api/items` - Fetch all motorcycles
* `POST /api/items` - Create new motorcycle
* `DELETE /api/items/:id` - Delete motorcycle
* `GET /api/categories` - Fetch categories

## Installation & Setup

### Backend Setup
1. Clone the repository
2. Navigate to backend folder: `cd inventory-app`
3. Run `npm install`
4. Create a `.env` file with your database credentials:
```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=motorcycle_inventory
   DB_PORT=5432
   PORT=3000
```
5. Set up PostgreSQL database
6. Run `npm start`

### Frontend Setup
1. Navigate to frontend folder: `cd motorcycle-frontend`
2. Run `npm install`
3. Run `npm run dev`

## Things I Learned/Demonstrated
* Full-stack application architecture
* RESTful API design with Express.js
* PostgreSQL database integration with parameterized queries
* React component composition and props communication
* State management across multiple components
* Async/await for API integration
* CRUD operations with real-time UI updates
* Input validation and error handling
* Responsive CSS Grid layouts
* Environment variable configuration
* Professional development workflow (Git, proper project structure)
