// Âm thanh mở đầu
const audio = new Audio("welcome.mp3");
audio.volume = 0.4;
audio.play().catch(() => {
  console.log("Trình duyệt chặn auto-play, sẽ phát khi user click");
});

const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");
const mainContent = document.querySelector(".main-content");

// Khi nhấn "Bắt đầu học"
if (startBtn) {
  startBtn.addEventListener("click", () => {
    welcome.classList.add("fade-out");
    audio.pause();

    welcome.addEventListener("animationend", () => {
      welcome.style.display = "none";
      mainContent.style.display = "grid"; // hiện nội dung
      mainContent.classList.add("fade-in");
    });
  });
}

// Điều hướng khi click card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});
