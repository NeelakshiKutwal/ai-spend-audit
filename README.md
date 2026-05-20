# AI Spend Audit

## Developed By
Neelakshi Kutwal

---

## Live Demo
https://ai-spend-audit-beta-nine.vercel.app

---

## Project Overview
AI Spend Audit is a lightweight web application that helps developers and small teams analyze their spending on AI tools such as ChatGPT, Claude, Cursor, and others.

It provides instant cost optimization insights and highlights potential savings opportunities based on usage patterns.

This tool is designed as a decision-support system for reducing unnecessary AI subscription costs.

---

## Problem Statement
Most developers and startups use multiple AI tools without tracking actual monthly spending efficiency.

This leads to:
- Hidden subscription waste
- Overpaying for unused plans
- Lack of visibility into AI costs
- Poor budgeting decisions

AI Spend Audit solves this by giving an instant financial optimization report.

---

## Key Features
- AI tool selection-based audit system
- Plan-level cost optimization suggestions
- Monthly and annual savings estimation
- Instant result generation (no login required)
- Shareable audit result links
- Persistent form inputs using localStorage

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Data:
- JSON-based storage

Deployment:
- Vercel

---

## Architecture
- User fills audit form
- Data sent to Express backend via API
- Backend applies rule-based audit engine
- Response returned with savings + recommendations
- Frontend renders result page dynamically

---

## Decisions & Trade-offs
1. Chose rule-based engine instead of ML model for accuracy and transparency
2. Used localStorage instead of database for faster MVP development
3. Selected Express.js for simplicity and fast backend setup
4. Avoided authentication to keep user friction low
5. Used vanilla JS instead of React to reduce complexity

---

## Challenges
- Designing meaningful audit logic without overcomplicating
- Handling data flow between frontend and backend
- Ensuring consistent result rendering across pages

---

## Future Improvements
- Add database integration (PostgreSQL)
- Introduce user accounts
- Add AI-based recommendations
- Improve visualization with charts
- Add PDF export of reports

---

## Learning Outcomes
- Full-stack application development
- API design and integration
- Frontend state management
- Real-world product thinking
- Deployment workflow using Vercel

---

## Screenshots / Demo
<img width="575" height="546" alt="Screenshot 2026-05-20 133217" src="https://github.com/user-attachments/assets/57772959-9764-4380-a2b0-25144f429753" />


<img width="509" height="605" alt="Screenshot 2026-05-20 133202" src="https://github.com/user-attachments/assets/d47ec1ae-2d96-46f3-8f6c-e2a1a96dbdef" />

---

## Author
Neelakshi Kutwal
This project is for educational and learning purposes.
