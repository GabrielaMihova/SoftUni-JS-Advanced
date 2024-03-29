function solve() {
  const textArea = document.getElementById("input");
  const textAreaValue = textArea.value;
  const resultDiv = document.getElementById("output");

  const sentencesArr = textAreaValue
    .split(".")
    .filter((s) => s.trim() !== "")
    .map((s) => s.trim() + ".");

  const paragraphRoof = Math.ceil(sentencesArr.length / 3);

  let paragraphsHtml = "";
  for (let i = 0; i < paragraphRoof; i++) {
    const joinedSentences = sentencesArr.splice(0, 3).join("");
    paragraphsHtml += `<p>${joinedSentences}</p>`;
  }

  resultDiv.innerHTML = paragraphsHtml;
}
