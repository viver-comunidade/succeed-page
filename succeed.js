const backButton = document.getElementById("back-button");
const copyPixButton = document.getElementById("copy-pix-button");
const pixCodeInput = document.getElementById("pix-code");
const pixTooltip = document.getElementById("pix-tooltip");

backButton.addEventListener("click", () => {
  window.location.href = "https://viver-comunidade.github.io/inscricao-retiro/";
});

// Handle PIX code copy with tooltip display
copyPixButton.addEventListener(
  "click",
  () => {
    pixCodeInput.select();
    pixCodeInput.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard
      .writeText(pixCodeInput.value)
      .then(() => {
        pixTooltip.style.display = "block";
        pixTooltip.classList.add("show-tooltip");

        // Hide the tooltip after 2 seconds
        setTimeout(() => {
          pixTooltip.classList.remove("show-tooltip");
          setTimeout(() => {
            pixTooltip.style.display = "none";
          }, 300); // wait for transition to end before hiding
        }, 2000);
      })
      .catch((error) => {
        console.error("Erro ao copiar o código PIX:", error);
      });
  },
  { passive: true }
); // Passive listener added to avoid touch issues
