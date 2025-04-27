document.addEventListener('DOMContentLoaded', () => {
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');

    // Change text content dynamically
    setTimeout(() => {
        dynamicTextElement.textContent = 'The text has been updated by JavaScript!';
    }, 2000);

    // Modify CSS styles via JavaScript
    styleButton.addEventListener('click', () => {
        dynamicTextElement.classList.toggle('styled');
    });

    // Add an element when a button is clicked
    addElementButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new paragraph added dynamically.';
        elementContainer.appendChild(newParagraph);
    });

    // Remove an element when a button is clicked
    removeElementButton.addEventListener('click', () => {
        const lastChild = elementContainer.lastElementChild;
        if (lastChild) {
            elementContainer.removeChild(lastChild);
        } else {
            alert('No more elements to remove!');
        }
    });
});