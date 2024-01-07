window.addEventListener("load", solution);

function solution() {
  const addButton = document.getElementById("add-btn");
  const problemForm = document.querySelector("form");
  const previewList = document.querySelector(".preview-list");
  const pendingList = document.querySelector(".pending-list");
  const resolvedList = document.querySelector(".resolved-list");

  addButton.addEventListener("click", function (e) {
    e.preventDefault();

    const employee = document.getElementById("employee").value;
    const category = document.getElementById("category").value;
    const urgency = document.getElementById("urgency").value;
    const assignedTeam = document.getElementById("team").value;
    const descr = document.getElementById("description").value;

    if (employee && category && urgency && assignedTeam && descr) {
      const listItem = document.createElement("li");
      listItem.classList.add("problem", "content");

      const article = document.createElement("article");
      const pFrom = document.createElement("p");
      pFrom.textContent = `From: ${employee}`;
      const pCategory = document.createElement("p");
      pCategory.textContent = `Category: ${category}`;
      const pUrgency = document.createElement("p");
      pUrgency.textContent = `Urgency: ${urgency}`;
      const pAssignedTo = document.createElement("p");
      pAssignedTo.textContent = `Assigned to: ${assignedTeam}`;
      const pDescription = document.createElement("p");
      pDescription.textContent = `Description: ${descr}`;

      const editButton = document.createElement("button");
      editButton.classList.add("edit-btn");
      editButton.textContent = "Edit";

      const continueButton = document.createElement("button");
      continueButton.classList.add("continue-btn");
      continueButton.textContent = "Continue";

      // append elements to the document
      article.appendChild(pFrom);
      article.appendChild(pCategory);
      article.appendChild(pUrgency);
      article.appendChild(pAssignedTo);
      article.appendChild(pDescription);
      listItem.appendChild(article);
      listItem.appendChild(editButton);
      listItem.appendChild(continueButton);
      previewList.appendChild(listItem);

      // clear the input fields
      document.getElementById("employee").value = "";
      document.getElementById("category").value = "";
      document.getElementById("urgency").value = "";
      document.getElementById("team").value = "";
      document.getElementById("description").value = "";

      // disable the "Add" button
      addButton.disabled = false;
    }
  });

  // edit and continue buttons
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      const listItem = e.target.parentElement;
      const article = listItem.querySelector("article");
      const fields = article.querySelectorAll("p");

      // populate the form fields with the data from the selected item
      document.getElementById("employee").value =
        fields[0].textContent.split(": ")[1];
      document.getElementById("category").value =
        fields[1].textContent.split(": ")[1];
      document.getElementById("urgency").value =
        fields[2].textContent.split(": ")[1];
      document.getElementById("team").value =
        fields[3].textContent.split(": ")[1];
      const descriptionText = fields[4].textContent;

      // to check if descr has descr
      if (descriptionText.startsWith("Description: ")) {
        document.getElementById("description").value = descriptionText.replace(
          "Description: ",
          ""
        );
      } else {
        document.getElementById("description").value = descriptionText;
      }

      // add button
      addButton.disabled = false;

      // remove the selected item from the preview list
      previewList.removeChild(listItem);
    } else if (e.target.classList.contains("continue-btn")) {
      const listItem = e.target.parentElement;
      const article = listItem.querySelector("article").cloneNode(true);

      const resolveButton = document.createElement("button");
      resolveButton.classList.add("resolve-btn");
      resolveButton.textContent = "Resolved";

      listItem.innerHTML = ""; // clear the listItem
      listItem.appendChild(article);
      listItem.appendChild(resolveButton);

      // move the item to the pending list
      pendingList.appendChild(listItem);
    }
  });

  // resolved
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("resolve-btn")) {
      // to check if the item is not already in the resolved list
      if (
        !e.target.parentElement.parentElement.classList.contains(
          "resolved-list"
        )
      ) {
        const listItem = e.target.parentElement.cloneNode(true);
        const clearButton = document.createElement("button");
        clearButton.classList.add("clear-btn");
        clearButton.textContent = "Clear";
        listItem.appendChild(clearButton);

        // move the item to the resolved list
        resolvedList.appendChild(listItem);

        // remove the item from the pending list
        pendingList.removeChild(e.target.parentElement);
      }

      // remove the event listener to prevent multiple firings
      e.target.removeEventListener("click", this);
    }
  });

  // clear button in resolved tab
  resolvedList.addEventListener("click", function (e) {
    if (e.target.classList.contains("clear-btn")) {
      resolvedList.removeChild(e.target.parentElement);
    }
  });
}
solution();
