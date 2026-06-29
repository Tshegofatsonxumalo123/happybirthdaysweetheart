function openGift() {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}

function showVideo() {
  document.getElementById("video").classList.remove("hidden");
}

function updateCountdown() {
  const now = new Date();

  // next midnight
  const target = new Date();
  target.setHours(24, 0, 0, 0);

  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("surprise").classList.remove("hidden");
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
