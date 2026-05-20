const form = document.getElementById("auditForm");

const toolInput = document.getElementById("tool");
const planInput = document.getElementById("plan");
const spendInput = document.getElementById("spend");
const teamSizeInput = document.getElementById("teamSize");

window.addEventListener("load", () => {

    toolInput.value = localStorage.getItem("tool") || "ChatGPT";

    planInput.value = localStorage.getItem("plan") || "Plus";

    spendInput.value = localStorage.getItem("spend") || "";

    teamSizeInput.value = localStorage.getItem("teamSize") || "";

});

toolInput.addEventListener("change", () => {
    localStorage.setItem("tool", toolInput.value);
});

planInput.addEventListener("change", () => {
    localStorage.setItem("plan", planInput.value);
});

spendInput.addEventListener("input", () => {
    localStorage.setItem("spend", spendInput.value);
});

teamSizeInput.addEventListener("input", () => {
    localStorage.setItem("teamSize", teamSizeInput.value);
});

document.getElementById("auditForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const tool = document.getElementById("tool").value;
    const plan = document.getElementById("plan").value;
    const spend = document.getElementById("spend").value;
    const teamSize = document.getElementById("teamSize").value;

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

    const auditId = Date.now();

    localStorage.setItem(`audit-${auditId}`, JSON.stringify(data));

    window.location.href = `/result.html?id=${auditId}`;

});