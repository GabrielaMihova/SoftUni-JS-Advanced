window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageNameInputEl = document.getElementById("age");
  const genderInputEl = document.getElementById("genderSelect");
  const dishDescrInputEl = document.getElementById("task");
  const submitBtnInputEl = document.getElementById("form-btn");
  const inProgressUlEl = document.getElementById("in-progress");
  const finishedUlEl = document.getElementById("finished");

  submitBtnInputEl.addEventListener("click", addDish);

  function createInProgressEl() {
    const listItemEl = document.createElement("li");
    listItemEl.className = "each-line";
    const articleEl = document.createElement("article");
    const heqadingEl = document.createElement("h4");
    const genderAndAgeEl = document.createElement("p");
    const dishDescrEl = document.createElement("p");

    const editBtntEl = document.createElement("button");
    editBtntEl.textContent = "Edit";
    editBtntEl.className = "edit-btn";
    const completeBtnEl = document.createElement("button");
    completeBtnEl.textContent = "Mark as complete";
    completeBtnEl.className = "complete-btn";

    editBtntEl.addEventListener("click", editDish);
    completeBtnEl.addEventListener("click", completeDish);

    heqadingEl.textContent = `${firstNameInputEl.value} ${lastNameInputEl.value}`;
    genderAndAgeEl.textContent = `${genderInputEl.value}, ${ageNameInputEl.value}`;
    dishDescrEl.textContent = `Dish description: ${dishDescrInputEl.value}`;

    articleEl.appendChild(heqadingEl);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(dishDescrEl);
    articleEl.appendChild(editBtntEl);
    articleEl.appendChild(completeBtnEl);
    listItemEl.appendChild(articleEl);

    return listItemEl;
  }

  function completeDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;

    finishedUlEl.appendChild(listItemEl);
    const listItemEl = createInProgressEl();
    inProgressUlEl.removeChild(editedDishEl);
  }

  function editDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;
    const headingText = editedDishEl.querySelector("h4");
    const firstAndLastNameText = headingText.textContent.split(" ");
    const firstNameText = firstAndLastNameText[0];
    const lastNameText = firstAndLastNameText[1];
    firstNameInputEl.value = firstNameText;
    lastNameInputEl.value = lastNameText;

    const genderAndAgeEl = editedDishEl
      .querySelector("p")
      .textContent.split(", ");
    const genderText = genderAndAgeEl[0];
    const ageText = genderAndAgeEl[1];
    genderInputEl.value = genderText;
    ageNameInputEl.value = ageText;

    const dishDecrText = editedDishEl
      .querySelectorAll("p")[1]
      .textContent.replace("Dish description: ", "");
    dishDescrInputEl.value = dishDecrText;

    removeItemFromInProgress(editedDishEl);
  }

  function removeItemFromInProgress(item) {
    inProgressUlEl.removeChild(item);
  }

  function addDish(e) {
    const listItemEl = createInProgressEl();
    inProgressUlEl.appendChild(listItemEl);
    clearInputFields();

    function clearInputFields() {
      firstNameInputEl.value = "";
      lastNameInputEl.value = "";
      ageNameInputEl.value = "";
      genderInputEl.value = "";
      dishDescrInputEl.value = "";
      submitBtnInputEl.value = "";
      inProgressUlEl.value = "";
    }
  }
}