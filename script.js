// FIX: Prevent scroll to anchor on refresh
if (window.location.hash) {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  history.replaceState(null, null, window.location.pathname);
  document.documentElement.scrollTop = scrollTop;
  document.body.scrollTop = scrollTop;
}

// Optional: Lightbox effect
document.addEventListener("DOMContentLoaded", () => {
  const galleryLinks = document.querySelectorAll(".gallery-grid a");

  galleryLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (!link.href.endsWith('.jpg')) return;
      e.preventDefault();

      const overlay = document.createElement("div");
      overlay.id = "lightbox";
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 9999;

      const img = document.createElement("img");
      img.src = link.href;
      img.style.maxWidth = "90%";
      img.style.maxHeight = "90%";
      img.style.borderRadius = "8px";

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});