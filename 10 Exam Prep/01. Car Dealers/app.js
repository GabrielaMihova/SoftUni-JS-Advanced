window.addEventListener("load", solve);

function solve() {
  // capture inputs
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");

  // capture other elements
  const publishButton = document.getElementById("publish");
  const tBody = document.getElementById("table-body");
  const profit = document.getElementById("profit");
  const carsListUl = document.getElementById("cars-list");

  // attach events
  publishButton.addEventListener("click", publish);

  //callbacks
  function publish(e) {
    e.preventDefault();

    const makeInputValue = makeInput.value;
    const modelInpurValue = modelInput.value;
    const yearInputValue = yearInput.value;
    const fuelInputValue = fuelInput.value;
    const originalCostValue = Number(originalCostInput.value);
    const sellingPriceValue = Number(sellingPriceInput.value);

    if (
      !makeInputValue ||
      !modelInpurValue ||
      !yearInputValue ||
      !fuelInputValue ||
      sellingPriceValue <= originalCostValue
    ) {
      return;
    }

    // tr
    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    //td's
    const makeTdEl = document.createElement("td");
    makeTdEl.textContent = makeInputValue;

    const modelTdEl = document.createElement("td");
    modelTdEl.textContent = modelInpurValue;

    const yearTdEl = document.createElement("td");
    yearTdEl.textContent = yearInputValue;

    const fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuelInputValue;

    const originalCostTdEl = document.createElement("td");
    originalCostTdEl.textContent = originalCostValue;

    const sellingPriceTdEl = document.createElement("td");
    sellingPriceTdEl.textContent = sellingPriceValue;

    const buttonsTdEl = document.createElement("td");

    //define buttons
    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";

    const sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.textContent = "Sell";

    //attach buttons to td
    buttonsTdEl.appendChild(editBtn);
    buttonsTdEl.appendChild(sellBtn);

    // attch created td's to the tr
    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalCostTdEl);
    trEl.appendChild(sellingPriceTdEl);
    trEl.appendChild(buttonsTdEl);

    // attach row to tbody
    tBody.appendChild(trEl);

    //clear
    clearAll();

    // inner callbacks
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();

      //map data
      makeInput.value = makeInputValue;
      modelInput.value = modelInpurValue;
      yearInput.value = yearInputValue;
      fuelInput.value = fuelInputValue;
      originalCostInput.value = originalCostValue;
      sellingPriceInput.value = sellingPriceValue;

      // remove tr
      trEl.remove();
    });

    sellBtn.addEventListener("click", (e) => {
      e.preventDefault();

      //create li
      const liEl = document.createElement("li");
      liEl.classList.add("each-list");

      // create span's
      const makeModelSpan = document.createElement("span");
      makeModelSpan.textContent = `${makeInputValue} ${modelInpurValue}`;

      const yearSpan = document.createElement("span");
      yearSpan.textContent = yearInputValue;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = sellingPriceValue - originalCostValue;

      //attach span's to li
      liEl.appendChild(makeModelSpan);
      liEl.appendChild(yearSpan);
      liEl.appendChild(priceSpan);

      // attach li to ul (cars list)
      carsListUl.appendChild(liEl);

      // remove tr
      trEl.remove();

      // populate the profit
      profit.textContent = (
        Number(profit.textContent) +
        sellingPriceValue -
        originalCostValue
      ).toFixed(2);
    });
  }

  function clearAll() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";
  }
}