function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  // De + operator doet een bitoperatie en zet de true, false van checked om naar 0 en 1. Daarmee kan je een item uit de positie van de array ophalen (aan de hand van de index).
  // Dit is niet echt heel leesbaar, maar je kan heel kort een if-else vermijden.
  // Let er wel op dat de leesbaarheid van code altijd goed blijft.

  const passwordOptions = ["password", "text"];
  passwordToggle.addEventListener("change", function () {
    passwordInput.type = passwordOptions[+this.checked];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  handleFloatingLabel();
  handlePasswordSwitcher();
});
