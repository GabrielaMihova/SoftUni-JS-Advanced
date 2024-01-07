function subtract() {
  const firstNumValue = Number(document.getElementById("firstNumber").value);
  const secondNumValue = Number(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = `${
    firstNumValue - secondNumValue
  }`;
}

/*
const sum = firstNumValue - secondNumValue;
document.getElementById('result').textContent = sum;
*/
