let inputText = document.getElementById("inputText");
const resultSection = document.getElementById("result");

function addListItems(inputText) {
    addListItems.counter = (addListItems.counter || 0) + 1;
    const listItem = document.createElement("li");
    const addInput = document.createElement("input");
    addInput.type = "checkbox";
    addInput.id = `item-${addListItems.counter}`;
    const addLabel = document.createElement("label");
    addLabel.for = `item-${addListItems.counter}`;
    addLabel.textContent = inputText;
    listItem.appendChild(addInput);
    listItem.appendChild(addLabel);
    let ul = resultSection.querySelector("ul");
    if (!ul) {
        ul = document.createElement("ul");
        resultSection.appendChild(ul);
    }
    ul.appendChild(listItem);
}

document.querySelector("#addBtn").addEventListener("click", function () {
    const getText = inputText.value.trim();
    if (getText != "") {
        addListItems(getText);
        inputText.value = '';
    }
});