const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("frontend"));

app.get("/", (req, res) => {
    res.send("AI Spend Audit Running");
});

app.post("/audit", (req, res) => {

    const { tool, plan, spend, teamSize } = req.body;

    let recommendation = "";
    let savings = 0;

    const numericSpend = Number(spend);
    const numericTeamSize = Number(teamSize);

    if (plan === "Enterprise" && numericTeamSize < 10) {

        recommendation =
            "Enterprise plans are usually excessive for teams under 10 users. Consider switching to a Team or Business plan.";

        savings = Math.round(numericSpend * 0.45);

    }

    else if (plan === "Business" && numericTeamSize <= 5) {

        recommendation =
            "Business tier may be unnecessary for a smaller team. Team plans can often provide similar value at lower cost.";

        savings = Math.round(numericSpend * 0.30);

    }

    else if (plan === "Team" && numericTeamSize <= 2) {

        recommendation =
            "Small teams can typically operate efficiently on lower-tier plans without losing critical features.";

        savings = Math.round(numericSpend * 0.40);

    }

    else if (numericSpend > 500) {

        recommendation =
            "Your AI tooling costs are relatively high. Consolidating tools or using discounted infrastructure credits through providers like Credex may significantly reduce spend.";

        savings = Math.round(numericSpend * 0.20);

    }

    else {

        recommendation =
            "Your current AI tooling setup appears reasonably optimized for your team size and spend level.";

        savings = 0;

    }

    res.json({
        tool,
        currentPlan: plan,
        monthlySpend: spend,
        recommendation,
        monthlySavings: savings,
        annualSavings: savings * 12,

        summary: `Your team is currently spending approximately $${numericSpend} monthly on ${tool}. Based on your selected ${plan} plan and team size of ${numericTeamSize}, there may be opportunities to reduce AI infrastructure costs while maintaining similar productivity and feature access.`

    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});