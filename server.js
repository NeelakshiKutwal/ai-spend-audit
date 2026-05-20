const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/result", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "result.html"));
});

app.post("/audit", (req, res) => {

    const { tool, plan, spend, teamSize } = req.body;

    const numericSpend = Number(spend);
    const numericTeamSize = Number(teamSize);

    let recommendation = "";
    let savings = 0;

    if (tool === "ChatGPT") {

        if (plan === "Team" && numericTeamSize <= 2) {

            recommendation =
                "ChatGPT Team may be unnecessary for a very small team. ChatGPT Plus can provide similar functionality at lower cost.";

            savings = 25 * numericTeamSize;

        }

        else if (plan === "Enterprise" && numericTeamSize < 10) {

            recommendation =
                "Enterprise plans are usually cost-effective only for larger organizations. Smaller teams can reduce spend using Team plans.";

            savings = Math.round(numericSpend * 0.40);

        }

        else {

            recommendation =
                "Your ChatGPT setup appears reasonably optimized for your current usage.";

            savings = 0;

        }

    }

    else if (tool === "Claude") {

        if (numericSpend > 200) {

            recommendation =
                "Your Claude spend is relatively high. Consider consolidating workflows or using discounted infrastructure credits.";

            savings = Math.round(numericSpend * 0.20);

        }

        else {

            recommendation =
                "Your Claude usage appears appropriately sized.";

            savings = 0;

        }

    }

    else if (tool === "Cursor") {

        if (plan === "Business" && numericTeamSize <= 5) {

            recommendation =
                "Cursor Business may be excessive for smaller engineering teams. Cursor Pro often provides sufficient functionality.";

            savings = Math.round(numericSpend * 0.35);

        }

        else {

            recommendation =
                "Your Cursor configuration appears cost-efficient.";

            savings = 0;

        }

    }

    else {

        if (numericSpend > 500) {

            recommendation =
                "Your AI infrastructure costs are relatively high. Reviewing vendor plans and discounted credits may reduce operational expenses.";

            savings = Math.round(numericSpend * 0.15);

        }

        else {

            recommendation =
                "Your current AI tooling stack appears reasonably optimized.";

            savings = 0;

        }

    }

    res.json({

        tool,
        currentPlan: plan,
        monthlySpend: numericSpend,

        recommendation,

        monthlySavings: savings,

        annualSavings: savings * 12,

        summary:
            `Your organization currently spends approximately $${numericSpend} monthly on ${tool}. Based on the selected ${plan} plan and team size of ${numericTeamSize}, this audit identified potential optimization opportunities that could reduce recurring AI tooling expenses while preserving core productivity capabilities.`

    });

});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}

module.exports = app;