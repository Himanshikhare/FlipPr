Real Estate Admin Panel and Landing Page

Table of Contents

Project Overview

Features

Technologies Used

Installation

Usage

API Endpoints

File Structure

Future Enhancements

Project Overview

This project consists of a Landing Page and an Admin Panel for a real estate platform. The Landing Page allows users to explore real estate services, submit contact forms, and subscribe to newsletters. The Admin Panel enables administrators to manage projects, clients, contact form submissions, and subscribers.

Features

Landing Page

Responsive design showcasing services.

Form submission for contacting the team.

Newsletter subscription.

Real-time display of happy clients and projects.

Admin Panel

Project Management: Add, update, and delete projects.

Client Management: Add, update, and delete client details.

Contact Form Responses: View all user-submitted contact forms.

Subscribed Users: View all email addresses subscribed to newsletters.

Technologies Used

Frontend: React.js, Tailwind CSS, Axios

Backend: Node.js, Express.js, Multer (for file uploads), Sharp (for image processing)

Database: MongoDB Atlas

Installation

Prerequisites

Node.js (v16 or above)

MongoDB Atlas account

Steps

Clone the repository:

git clone https://github.com/Himanshikhare/FlipPr.git
cd your-project-directory

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory.

Add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the backend server:

npm run dev

Navigate to the frontend directory, install dependencies, and start the React app:

cd frontend
npm install
npm start

Usage

Landing Page

Accessible at http://localhost:5000.

Users can explore services, submit contact forms, and subscribe to newsletters.

Admin Panel

Accessible at http://localhost:5000/admin.

Admins can manage projects, clients, contacts, and subscribers.

API Endpoints

Projects

POST /api/projects: Add a new project.

PUT /api/projects/:id: Update an existing project.

DELETE /api/projects/:id: Delete a project.

GET /api/projects: Fetch all projects.

Clients

POST /api/clients: Add a new client.

PUT /api/clients/:id: Update an existing client.

DELETE /api/clients/:id: Delete a client.

GET /api/clients: Fetch all clients.

Contacts

GET /api/contacts: Fetch all contact form responses.

Subscribers

POST /api/subscribers: Add a new subscriber.

GET /api/subscribers: Fetch all subscribers.

File Structure
project-directory/
|-- backend/
|   |-- models/
|   |   |-- Client.js
|   |   |-- Contact.js
|   |   |-- Project.js
|   |   |-- Subscriber.js
|   |-- routes/
|   |   |-- clientRoutes.js
|   |   |-- contactRoutes.js
|   |   |-- projectRoutes.js
|   |   |-- subscriberRoutes.js
|   |-- server.js
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |   |-- AdminPanel/
|   |   |   |-- LandingPage/
|   |   |   |-- Shared/
|   |   |-- App.js
|   |   |-- index.js
|-- .env
|-- package.json