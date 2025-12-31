here// INIT USER
if (!localStorage.getItem("credits")) {
  localStorage.setItem("credits", 25);
}
if (!localStorage.getItem("name")) {
  localStorage.setItem("name", "Guest User");
}
if (!localStorage.getItem("plan")) {
  localStorage.setItem("plan", "Free");
}

// UPDATE UI
function updateCredits() {
  const credits = localStorage.getItem("credits");
  const creditText = document.getElementById("creditText");
  const profileCredits = document.getElementById("profileCredits");

  if (creditText) creditText.innerText = "Credits: " + credits;
  if (profileCredits) profileCredits.innerText = credits;
}
updateCredits();

// MENU
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show");
}

// PROFILE
function toggleProfile() {
  const box = document.getElementById("profileBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// CREDIT SYSTEM
function useCredit() {
  let c = parseInt(localStorage.getItem("credits"));
  if (c <= 0) {
    alert("No credits left!");
    return false;
  }
  localStorage.setItem("credits", c - 1);
  updateCredits();
  return true;
}

// PROMPTS
function generatePrompt() {
  if (!useCredit()) return;
  alert("Prompt generated successfully ✅");
}

function fixPrompt() {
  if (!useCredit()) return;
  alert("Prompt fixed successfully ✅");
}

// WATCH AD (FAKE)
function watchAd() {
  alert("Watching ad...");
  setTimeout(() => {
    let c = parseInt(localStorage.getItem("credits"));
    localStorage.setItem("credits", c + 3);
    updateCredits();
    alert("You earned 3 credits 🎉");
  }, 4000);
}

// PLANS
function activatePlan(credits) {
  localStorage.setItem("credits", credits);
  localStorage.setItem("plan", "Premium");
  updateCredits();
  alert("Plan activated!");
}

// LOGOUT (FAKE)
function logout() {
  alert("Logged out (fake)");
}
