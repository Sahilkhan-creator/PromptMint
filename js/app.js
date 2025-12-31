let credits = 25;

function updateCredits() {
  const creditEl = document.getElementById("creditCount");
  if (creditEl) {
    creditEl.innerText = credits;
  }
}

function generatePrompt() {
  if (credits <= 0) {
    alert("No credits left.");
    return;
  }

  const idea = document.getElementById("ideaInput").value.trim();
  const style = document.getElementById("style").value;
  const platform = document.getElementById("platform").value;
  const quality = document.getElementById("quality").value;

  if (!idea) {
    alert("Please enter an idea");
    return;
  }

  credits--;
  updateCredits();

  let qualityText =
    quality === "Ultra"
      ? "ultra-detailed, 8k, professional lighting"
      : quality === "High"
      ? "high-quality, sharp focus"
      : "high quality";

  let platformText =
    platform === "Midjourney"
      ? "optimized for Midjourney v6"
      : platform === "DALL·E"
      ? "optimized for DALL·E"
      : "optimized for Stable Diffusion";

  const finalPrompt =
    `Create a ${style.toLowerCase()} image of ${idea}, ` +
    `${qualityText}, cinematic composition, realistic textures, ` +
    `clean background, depth of field, ${platformText}.`;

  document.getElementById("outputBox").value = finalPrompt;
}

function fixPrompt() {
  if (credits <= 0) {
    alert("No credits left.");
    return;
  }

  const badPrompt = document.getElementById("ideaInput").value.trim();
  if (!badPrompt) {
    alert("Paste a prompt to fix");
    return;
  }

  credits--;
  updateCredits();

  const fixedPrompt =
    `Rewrite and improve this AI image prompt:\n\n"${badPrompt}"\n\n` +
    `Add clarity, subject focus, lighting, environment, style, ` +
    `and high-quality rendering details.`;

  document.getElementById("outputBox").value = fixedPrompt;
}

updateCredits();
