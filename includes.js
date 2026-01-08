<script>
async function loadPartial(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "partials/header.html");
  loadPartial("site-footer", "partials/footer.html");
});
</script>
