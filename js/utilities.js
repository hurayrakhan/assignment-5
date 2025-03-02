function getElementTextById (id) {
    const elementsText = document.getElementById(id).innerText;
    const convertedElementsText = parseInt(elementsText);
    return(convertedElementsText);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}