(function () {
  const STORAGE_KEY = "ticha_founder_flow";

  // Restore saved data
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  document.querySelectorAll("[data-save]").forEach(el => {
    if (saved[el.name]) {
      el.value = saved[el.name];
    }

    el.addEventListener("input", () => {
      saved[el.name] = el.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    });
  });

  // Prevent double submission
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      const btn = form.querySelector("button[type='submit']");
      if (btn.dataset.submitted) {
        e.preventDefault();
        return;
      }
      btn.dataset.submitted = "true";
      btn.disabled = true;
    });
  });
})();
