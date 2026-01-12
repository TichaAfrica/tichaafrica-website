// assets/js/include.js - Simple HTML partial loader
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(el => {
    const url = el.getAttribute('data-include');
    if (!url) return;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${url}: ${response.status}`);
        return response.text();
      })
      .then(html => {
        el.outerHTML = html; // Replace the element with the loaded content
      })
      .catch(err => {
        console.error('Include error:', err);
        el.innerHTML = `<p style="color:red;">Failed to load: ${url}</p>`;
      });
  });
});
