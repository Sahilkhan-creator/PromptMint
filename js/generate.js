/* ===============================
   PromptMint – Generate Engine
   =============================== */

/* ---------- Schema ---------- */
function createEmptyPrompt() {
  return {
    subject: [],
    environment: [],
    action: [],
    style: [],
    lighting: [],
    technical: [],
    negative: []
  };
}

/* ---------- Templates ---------- */
const TEMPLATES = {
  midjourney: (p) =>
    `${p.subject}, ${p.action}, ${p.environment}, ${p.style}, ${p.lighting}, ${p.technical} --v 6 --quality 2`,

  stableDiffusion: (p) =>
    `${p.subject}, ${p.style}, ${p.lighting}, ${p.environment}, ultra detailed`
};

/* ---------- Style presets ---------- */
const PRESETS = {
  cinematic: {
    style: ["cinematic", "dramatic composition"],
    lighting: ["moody lighting", "soft shadows"],
    technical: ["film grain", "35mm look"]
  },
  anime: {
    style: ["anime style", "clean line art"],
    lighting: ["soft ambient light"],
    technical: ["high saturation"]
  },
  studio: {
    style: ["professional photography"],
    lighting: ["studio lighting"],
    technical: ["sharp focus"]
  }
};

/* ---------- Defaults ---------- */
function applyDefaults(prompt) {
  if (!prompt.environment.length) {
    prompt.environment.push("minimal background");
  }

  if (!prompt.lighting.length) {
    prompt.lighting.push("soft studio lighting");
  }

  prompt.negative.push(
    "extra fingers",
    "bad anatomy",
    "distortion",
    "watermark"
  );
}

/* ---------- Generate ---------- */
function generatePrompt(options) {
  const p = createEmptyPrompt();

  p.subject.push(options.subject || "a detailed subject");
  p.action.push(options.action || "natural pose");

  if (PRESETS[options.preset]) {
    const preset = PRESETS[options.preset];
    p.style.push(...(preset.style || []));
    p.lighting.push(...(preset.lighting || []));
    p.technical.push(...(preset.technical || []));
  }

  applyDefaults(p);

  const model = options.model || "midjourney";
  return TEMPLATES[model](p);
}

/* ---------- Button hook ---------- */
document.getElementById("generateBtn")?.addEventListener("click", () => {
  const subject = document.getElementById("subjectInput").value;
  const preset = document.getElementById("stylePreset")?.value || "cinematic";
  const model = document.getElementById("modelSelect")?.value || "midjourney";

  const result = generatePrompt({
    subject,
    preset,
    model
  });

  document.getElementById("outputPrompt").value = result;
});
