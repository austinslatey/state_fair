document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("state-fair-popup");
  const closeBtn = document.querySelector(".close-popup");

  if (!popup) return; // safety

  // Get how many times popup has shown this session
  let popupViews = sessionStorage.getItem("stateFairPopupViews") || 0;

  // Show popup only if less than 3 times this session
  if (popupViews < 3) {
    popup.style.display = "flex"; // or "block" depending on your CSS
    popupViews++;
    sessionStorage.setItem("stateFairPopupViews", popupViews);
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  // Optional: Close when clicking outside the popup-content
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
