let inputText = document.getElementById("inputText");
const resultSection = document.getElementById("result");

function addListItems(inputText) {
    const listItem = document.createElement("li");
    listItem.textContent = inputText;
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