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

form.addEventListener("submit", function(event) {

    event.preventDefault();

    localStorage.setItem("tool", toolInput.value);

    localStorage.setItem("plan", planInput.value);

    localStorage.setItem("spend", spendInput.value);

    localStorage.setItem("teamSize", teamSizeInput.value);

    window.location.href = "/result.html";

});