const params = new URLSearchParams(window.location.search);

const auditId = params.get("id");

const auditData = JSON.parse(
    localStorage.getItem(`audit-${auditId}`)
);

if (auditData) {

    document.getElementById("result").innerHTML = `

        <div class="result-card">

            <div class="result-item">
                <strong>AI Tool:</strong> ${auditData.tool}
            </div>

            <div class="result-item">
                <strong>Current Plan:</strong> ${auditData.currentPlan}
            </div>

            <div class="recommendation">
                <strong>Recommendation:</strong><br><br>
                ${auditData.recommendation}
            </div>

            <div class="result-item savings">
                Estimated Monthly Savings: $${auditData.monthlySavings}
            </div>

            <div class="result-item savings">
                Estimated Annual Savings: $${auditData.annualSavings}
            </div>

            <div class="recommendation">
                <strong>AI Summary:</strong><br><br>
                ${auditData.summary}
            </div>

        </div>

    `;

}