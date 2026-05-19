# AI Spend Audit - Testing Notes

## Overview
This file documents basic testing checks performed to ensure the application works correctly.

---

## Frontend Testing
- Checked if index.html loads properly
- Verified form inputs are working
- Ensured result page displays data correctly
- Tested button clicks and navigation
- Checked responsive layout on different screen sizes

---

## Backend Testing
- Verified server starts without errors (server.js)
- Tested API endpoints using browser / Postman
- Checked JSON data is returned correctly from reports.json
- Ensured no crashes during invalid requests

---

## Integration Testing
- Frontend successfully sends requests to backend
- Backend processes data and returns response
- Result page displays backend response correctly

---

## Basic Edge Cases Checked
- Empty input handling
- Invalid or missing data response
- Server restart stability

---

## Known Limitations
- No automated test framework used
- No unit tests implemented yet
- Testing is manual only

---

## Future Improvements
- Add Jest for backend testing
- Add frontend testing using Cypress
- Automate API testing

---

## Author
Neelakshi Kutwal
