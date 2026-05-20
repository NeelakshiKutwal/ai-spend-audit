const request = require("supertest");
const app = require("../server");

describe("AI Spend Audit API Tests", () => {

    test("ChatGPT Team plan gives savings recommendation", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                tool: "ChatGPT",
                plan: "Team",
                spend: 100,
                teamSize: 2
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.monthlySavings).toBeGreaterThan(0);

    });

    test("Cursor Business plan gives optimization recommendation", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                tool: "Cursor",
                plan: "Business",
                spend: 200,
                teamSize: 3
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.recommendation)
            .toMatch(/Cursor Pro/i);

    });

    test("Claude high spend generates savings", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                tool: "Claude",
                plan: "Pro",
                spend: 500,
                teamSize: 4
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.monthlySavings)
            .toBeGreaterThan(0);

    });

    test("Optimized setup returns zero savings", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                tool: "ChatGPT",
                plan: "Plus",
                spend: 20,
                teamSize: 1
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.monthlySavings)
            .toBe(0);

    });

    test("Annual savings calculation is correct", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                tool: "Cursor",
                plan: "Business",
                spend: 200,
                teamSize: 2
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.annualSavings)
            .toBe(response.body.monthlySavings * 12);

    });

});