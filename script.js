// script.js
const form = document.getElementById("greetingForm");
const cardContainer = document.getElementById("cardContainer");
const greetingCard = document.getElementById("greetingCard");
const cardOccasion = document.getElementById("cardOccasion");
const cardMessage = document.getElementById("cardMessage");
const cardName = document.getElementById("cardName");
const generateButton = document.getElementById("generateCard");
const downloadButton = document.getElementById("downloadCard");

generateButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const occasion = document.getElementById("occasion").value;

  if (name && message && occasion) {
    cardOccasion.textContent = `Happy ${occasion}!`;
    cardMessage.textContent = message;
    cardName.textContent = `- ${name}`;
    cardContainer.style.display = "block";
  } else {
    alert("Please fill out all fields!");
  }
});

downloadButton.addEventListener("click", () => {
  html2canvas(greetingCard).then(canvas => {
    const link = document.createElement("a");
    link.download = "greeting-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});