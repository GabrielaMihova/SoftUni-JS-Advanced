function search() {
  const listItems = document.querySelectorAll("#towns li");
  const inputValue = document.querySelector("input").value.toLowerCase();
  const result = document.getElementById("result");

  let sum = 0;

  for (const li of listItems) {
    const liText = li.textContent.toLowerCase();

    if (liText.includes(inputValue)) {
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
      sum++;
    } else {
      li.style.fontWeight = "";
      li.style.textDecoration = "";
    }
  }

  result.textContent = `${sum} matches found`;
}
