# Motorcycle Inventory Management System
A full-stack motorcycle dealership inventory application built with React and Express.

## Live Demo
* **Frontend:** https://inventory-app-4enp.vercel.app/
* **Backend API:** https://inventory-app-production-49ee.up.railway.app

## Screenshot
<img width="1593" height="1076" alt="image" src="https://github.com/user-attachments/assets/d9137596-6383-41d4-b45a-9d538a5648d0" /> | <img width="1399" height="1205" alt="image" src="https://github.com/user-attachments/assets/9b54a60a-fae0-431a-a1f9-67ce84fb9d9f" />



## Features
* View all motorcycles in a responsive grid layout
* Add new motorcycles with detailed information
* Search motorcycles by mdoel in real-time
* Delete motorcycles with confirmation dialog
* Responsive design for desktop and mobile
* Toggle form visibility for clean interface

## Technologies Used
**Frontend:**
* React with Hooks (useState, useEffect)
* JavaScript ES6+
* CSS3 with responsive grid layout
* Vite for build tooling

**Backend:**
* Express.js REST API
* PostgreSQL database
* Node.js
* CORS middleware for cross-origin requests

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
