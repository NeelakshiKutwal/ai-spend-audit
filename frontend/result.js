window.addEventListener("load", async () => {

    const tool = localStorage.getItem("tool");
    const plan = localStorage.getItem("plan");
    const spend = localStorage.getItem("spend");
    const teamSize = localStorage.getItem("teamSize");

    const response = await fetch("/audit", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            tool,
            plan,
            spend,
            teamSize
        })

    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `

        <div class="result-card">

            <div class="result-item">
                <strong>AI Tool:</strong> ${data.tool}
            </div>

            <div class="result-item">
                <strong>Current Plan:</strong> ${data.currentPlan}
            </div>

            <div class="recommendation">
                <strong>Recommendation:</strong><br><br>
                ${data.recommendation}
            </div>

            <div class="result-item savings">
                Estimated Monthly Savings: $${data.monthlySavings}
            </div>

            <div class="result-item savings">
                Estimated Annual Savings: $${data.annualSavings}
            </div>

            <div class="recommendation">
                <strong>AI Summary:</strong><br><br>
                ${data.summary}
            </div>

        </div>

    `;

});