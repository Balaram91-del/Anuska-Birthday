const surpriseBtn = document.getElementById("surprise-btn");
const surpriseMessage = document.getElementById("surprise-message");
const confettiContainer = document.getElementById("confetti-container");

surpriseBtn.onclick = function () {
  surpriseMessage.textContent = "🎉 Happy Birthday Anuska! Keep shining! 🌟";

  // Create confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor = [
      "#ff69b4",
      "#ffd700",
      "#9370db",
      "#00ced1",
    ][Math.floor(Math.random() * 4)];

    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    confetti.style.animationDelay = Math.random() * 1 + "s";

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
};
