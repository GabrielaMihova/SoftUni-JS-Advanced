function toggle() {
  const MORE = "More";
  const LESS = "Less";

  const buttonSpan = document.querySelector(".button");
  const divWrapeprText = document.querySelector("#extra");

  buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

  divWrapeprText.style.display =
    divWrapeprText.style.display === "none" ||
    divWrapeprText.style.display === ""
      ? "block"
      : "none";
}
