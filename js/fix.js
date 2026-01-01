document.getElementById("fixBtn").addEventListener("click", () => {
  const rawPrompt = document.getElementById("fixInput").value.trim();
  const output = document.getElementById("outputFix");

  if (!rawPrompt) {
    output.innerText = "❌ Please paste a prompt to improve.";
    return;
  }

  const improvements = [
    "enhanced clarity",
    "better structure",
    "professional wording",
    "improved detail",
    "optimized for image generation",
    "balanced composition",
    "clear visual intent"
  ];

  const cleanedPrompt = rawPrompt
    .replace(/[,]+/g, ",")
    .replace(/\s+/g, " ")
    .trim();

  const improvedPrompt = `
${cleanedPrompt},
${improvements.sort(() => 0.5 - Math.random()).slice(0, 4).join(", ")},
high-quality output, visually refined
  `.trim();

  output.innerText = improvedPrompt;
});
