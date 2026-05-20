# AI Spend Audit - Development Log

## Developed By
Neelakshi Kutwal

---

## Day 1 — Project Planning
**Hours worked:** 3  
**What I did:**  
Defined the idea for an AI Spend Audit tool after noticing how startups often overspend on AI subscriptions without tracking usage properly. Finalized core MVP features and user flow.

**What I learned:**  
How important it is to clearly define MVP scope before coding to avoid overbuilding.

**Blockers / what I'm stuck on:**  
Unclear about how detailed audit logic should be (rules vs AI-based reasoning).

**Plan for tomorrow:**  
Start frontend structure and basic UI.

---

## Day 2 — Frontend Development
**Hours worked:** 4  
**What I did:**  
Built the initial UI using HTML, CSS, and JavaScript. Created input form for AI tool selection, plan type, monthly spend, and team size.

**What I learned:**  
DOM manipulation and form handling using vanilla JavaScript.

**Blockers:**  
Layout alignment issues between form fields and responsiveness.

**Plan for tomorrow:**  
Connect form submission to backend API.

---

## Day 3 — Backend Setup
**Hours worked:** 5  
**What I did:**  
Created Node.js + Express server. Built `/audit` endpoint to process spend data and generate recommendations.

**What I learned:**  
How request/response flow works in Express APIs.

**Blockers:**  
Initial issue where API was not parsing JSON correctly due to missing middleware.

**Fix:**  
Added `express.json()` middleware.

---

## Day 4 — API Integration Issues
**Hours worked:** 4  
**What I did:**  
Connected frontend to backend using Fetch API.

**What went wrong:**  
First implementation was not returning correct data in frontend.

**Debugging steps:**
- Checked network tab in browser
- Verified API response manually using Postman
- Found mismatch in JSON keys

**Fix:**  
Aligned backend response keys with frontend expectations.

---

## Day 5 — Audit Logic Improvements
**Hours worked:** 5  
**What I did:**  
Improved audit engine logic to include:
- plan-based recommendations
- team-size based cost optimization
- savings calculation logic

**What I learned:**  
How to structure conditional business logic in a scalable way.

---

## Day 6 — Testing & Debugging
**Hours worked:** 4  
**What I did:**  
Tested multiple scenarios for different AI tools and plans. Fixed calculation bugs in savings logic.

**Issue found:**  
Annual savings was incorrectly calculated in one case.

**Fix:**  
Standardized formula: `monthlySavings * 12`

---

## Day 7 — Deployment & Final Fixes
**Hours worked:** 3  
**What I did:**  
Deployed application on Vercel. Fixed routing issues and ensured frontend loads correctly in production.

**What I learned:**  
Difference between local environment and production deployment behavior.

**Final result:**  
Fully working AI Spend Audit web app with working backend, frontend, and deployed URL.

---

## Overall Reflection
This project helped me understand full-stack integration, debugging real API issues, and structuring a production-like application under time constraints. The biggest learning was not just coding features, but ensuring everything works end-to-end in a deployed environment.
## Future Improvements
- Add database support (MongoDB/PostgreSQL)
- Implement authentication system
- Improve UI/UX design
- Deploy project online
- Add charts and visual analytics
