let credits = localStorage.getItem("credits")
  ? parseInt(localStorage.getItem("credits"))
  : 25;

function updateCredits() {
  document.querySelectorAll("#creditCount").forEach(el => {
    el.innerText = credits;
  });
  localStorage.setItem("credits", credits);
}

function generatePrompt() {
  if (credits <= 0) return alert("No credits left");

  const idea = document.getElementById("ideaInput").value.trim();
  if (!idea) return alert("Enter an idea");

  credits--;
  updateCredits();

  document.getElementById("outputBox").value =
    `Create a cinematic, high-quality image of ${idea}, ultra-detailed, professional lighting, depth of field.`;
}

function fixPrompt() {
  if (credits <= 0) return alert("No credits left");

  const text = document.getElementById("ideaInput").value.trim();
  if (!text) return alert("Paste a prompt");

  credits--;
  updateCredits();

  document.getElementById("outputBox").value =
    `Improved AI image prompt:\n\n${text}\n\nAdd lighting, composition, realism, and clarity.`;
}

updateCredits();
