<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    el.innerHTML = await res.text();

    const page = document.body.dataset.page;
    const active = el.querySelector(`[data-nav="${page}"]`);
    if (active) active.classList.add("active");
  });
});
</script>
