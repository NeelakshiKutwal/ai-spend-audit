# AI Spend Audit - System Architecture

## Developed By
Neelakshi Kutwal

## Overview
AI Spend Audit is a full-stack web application designed to track and analyze AI tool spending. The system follows a simple client-server architecture using Node.js for backend logic and a static frontend built using HTML, CSS, and JavaScript.

---

## System Architecture Diagram (Text View)

User Browser (Frontend)
        ↓
HTML / CSS / JS (Frontend Layer)
        ↓ (API Calls / Fetch Requests)
Node.js + Express Server (Backend Layer)
        ↓
JSON File Storage (reports.json)

---

## Architecture Explanation

### 1. Frontend Layer
- Built using HTML, CSS, and JavaScript
- Responsible for UI rendering and user interaction
- Sends requests to backend using fetch API
- Displays analysis results and reports

---

### 2. Backend Layer
- Built using Node.js and Express.js
- Handles API requests from frontend
- Processes expense data
- Performs calculations and analysis
- Sends structured JSON responses back to frontend

---

### 3. Data Layer
- Uses a JSON file (`reports.json`) as a lightweight database
- Stores:
  - User expenses
  - AI tool subscriptions
  - Spending records

---

## Data Flow

1. User enters AI spending data in frontend
2. Frontend sends data to backend via API request
3. Backend processes and stores data in JSON file
4. Backend performs calculations (total cost, category-wise spending)
5. Response is sent back to frontend
6. UI displays results to user

---

## Key Design Decisions

- Chose JSON storage for simplicity and fast development
- Used Express.js for lightweight backend handling
- Separated frontend and backend for modular structure
- Designed API-driven communication between layers

---

## Future Improvements

- Replace JSON storage with PostgreSQL or MongoDB
- Add authentication system (login/signup)
- Implement caching for performance improvement
- Add real-time analytics dashboard
- Deploy using cloud services (AWS / Vercel / Render)

---

## Conclusion
The architecture is designed to be simple, scalable, and beginner-friendly while still following real-world full-stack development principles.
