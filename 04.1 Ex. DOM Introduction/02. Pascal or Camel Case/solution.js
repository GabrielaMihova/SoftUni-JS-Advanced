function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  const inputValueByLowerCase = document
    .getElementById("text")
    .value.toLowerCase();
  const currCaseValue = document.getElementById("naming-convention").value;
  const res = document.getElementById("result");

  if (currCaseValue !== CAMEL_CASE && currCaseValue !== PASCAL_CASE) {
    res.textContent = "Error!";
    return;
  }

  const arrOfStr = inputValueByLowerCase.split(" ");
  let output = "";
  let startingPoint = 0;

  if (currCaseValue === CAMEL_CASE) {
    output += arrOfStr[0];
    startingPoint = 1;
  }

  for (let i = startingPoint; i < arrOfStr.length; i++) {
    const currWord = arrOfStr[i];

    output += currWord[0].toUpperCase() + currWord.slice(1);
  }

  res.textContent = output;
}
