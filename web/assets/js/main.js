(function () {
  // Pick a random tagline on each visit.
  const taglines = [
    "Forging pricing models in the fires of econometrics.",
    "One hour of deep work is worth seven years.",
    "Running the numbers at 88 miles per hour.",
    "The price must flow.",
    "Sailing toward the horizon. Savvy?",
    "Seize the day. Then optimize it.",
    "The best stories start with a few good friends."
  ];

  const tagline = document.getElementById("tagline");
  if (tagline) {
    const pick = taglines[Math.floor(Math.random() * taglines.length)];
    tagline.textContent = pick;
  }

  // Update the tab title when the page loses or gains visibility.
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "Come back to the Shire…" : "Baffo";
  });

  // Print the developer easter eggs to the console.
  console.log("%cOne engine to price them all.", "color:#E9C46A; font-size:16px; font-family:serif;");
  console.log("Curious? Try the code every 80s kid knows: ↑ ↑ ↓ ↓ ← → ← → B A");

  // Listen for the Konami code and wake the ring.
  const secret = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let progress = 0;

  document.addEventListener("keydown", (event) => {
    const expected = secret[progress];
    progress = event.key === expected ? progress + 1 : 0;

    if (progress === secret.length) {
      const ring = document.getElementById("ring");
      const status = document.getElementById("status");

      if (ring) {
        ring.classList.add("ring-awake");
      }

      if (status) {
        status.textContent = "You shall pass.";
      }

      progress = 0;
    }
  });
})();
