// Xử lý click cho menu và card
document.querySelectorAll("[data-link]").forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = el.getAttribute("data-link");
  });
});
