const inputHandler = () => {
    let inputElement = document.querySelector("#input");
    let initValue = inputElement.getAttribute("value");

    initValue !== inputElement.value ?
        inputElement.classList.add("red") : inputElement.classList.remove("red");
};
