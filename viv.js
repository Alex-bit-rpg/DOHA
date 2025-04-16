// script.js

// 1. Change Text Content Dynamically
const changeTextButton = document.getElementById('change-text-button');
const dynamicTextElement = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicTextElement.textContent = 'Text content has been changed dynamically!';
});

// 2. Modify CSS Styles via JavaScript
const changeStyleButton = document.getElementById('change-style-button');
const contentSection = document.getElementById('content-section');

changeStyleButton.addEventListener('click', () => {
    contentSection.style.backgroundColor = '#f0f4c3'; // Change background color
    contentSection.style.padding = '20px';          // Add padding
    contentSection.style.borderRadius = '10px';    // Add rounded corners
});

// 3. Add or Remove an Element When a Button is Clicked
const addRemoveButton = document.getElementById('add-remove-button');
const itemList = document.getElementById('item-list');
let itemAdded = false;

addRemoveButton.addEventListener('click', () => {
    if (itemAdded) {
        const newItem = document.getElementById('new-item');
        itemList.removeChild(newItem);
        itemAdded = false;
        addRemoveButton.textContent = 'Add Element';
    } else {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item Added!';
        newItem.id = 'new-item';
        newItem.classList.add('list-item');  // Apply the list-item class
        itemList.appendChild(newItem);
        itemAdded = true;
        addRemoveButton.textContent = 'Remove Element';
    }
});
