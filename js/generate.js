document.getElementById("generateBtn").addEventListener("click", () => {
  const idea = document.getElementById("generateInput").value.trim().toLowerCase();
  const output = document.getElementById("output");

  if (!idea) {
    output.innerText = "❌ Please describe what you want to generate.";
    return;
  }

  const qualityModifiers = [
    "ultra-detailed",
    "high resolution",
    "cinematic lighting",
    "professional composition",
    "sharp focus",
    "dramatic shadows",
    "soft ambient light",
    "realistic textures",
    "studio quality",
    "8k quality"
  ];

  const styles = [
    "photorealistic",
    "digital art",
    "concept art",
    "cinematic scene",
    "hyper-realistic",
    "stylized illustration"
  ];

  function pickRandom(arr, count = 3) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, count).join(", ");
  }

  let prompt = "";

  // LOGO PROMPTS
  if (idea.includes("logo")) {
    prompt = `
Minimalist logo design for ${idea.replace("logo", "")},
clean vector style, flat design,
strong branding, modern typography,
high contrast, scalable, professional brand identity
    `;
  }

  // PORTRAIT PROMPTS
  else if (idea.includes("portrait") || idea.includes("face")) {
    prompt = `
${pickRandom(styles)}, portrait of ${idea},
detailed facial features, natural skin tones,
soft lighting, depth of field,
professional photography, studio background
    `;
  }

  // ANIME PROMPTS
  else if (idea.includes("anime")) {
    prompt = `
Anime-style illustration of ${idea},
vibrant colors, expressive eyes,
clean line art, dynamic pose,
high detail, modern anime aesthetics
    `;
  }

  // LANDSCAPE PROMPTS
  else if (idea.includes("landscape") || idea.includes("mountain") || idea.includes("city")) {
    prompt = `
Wide-angle landscape of ${idea},
epic scale, atmospheric depth,
dramatic sky, natural lighting,
high realism, cinematic environment design
    `;
  }

  // PRODUCT PROMPTS
  else if (idea.includes("product")) {
    prompt = `
Professional product photography of ${idea},
studio lighting, clean background,
sharp details, commercial quality,
perfect reflections, marketing ready
    `;
  }

  // DEFAULT SMART PROMPT
  else {
    prompt = `
${pickRandom(styles)} depiction of ${idea},
${pickRandom(qualityModifiers, 4)},
balanced composition, visually striking,
high quality, trending art style
    `;
  }

  output.innerText = prompt.trim();
});
