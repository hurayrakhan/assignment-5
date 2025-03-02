function getElementTextById (id) {
    const elementsText = document.getElementById(id).innerText;
    const convertedElementsText = parseInt(elementsText);
    return(convertedElementsText);
}