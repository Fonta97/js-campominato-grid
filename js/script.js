const gridElement = document.getElementById("grid");

for (let i = 0; i < 100; i++) {

    const newElement = createMyElement("div", "square");

    gridElement.append(newElement);

}

function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}