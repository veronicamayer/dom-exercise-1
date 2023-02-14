const buttons = document.querySelector('div');
const list = document.querySelector('ul');

const firstButton = buttons.firstElementChild;
firstButton.addEventListener('click', () => {
    document.querySelector('output').innerHTML = list.firstElementChild.textContent;
});

const secondButton = firstButton.nextElementSibling.nextElementSibling;
secondButton.addEventListener('click', () => {
    document.querySelector('output').innerHTML = list.lastElementChild.textContent;
});

const thirdButton = secondButton.nextElementSibling.nextElementSibling;
thirdButton.addEventListener('click', () => {
    document.querySelector('output').innerHTML = list.firstElementChild.nextElementSibling.textContent;
});

const fourthButton = buttons.lastElementChild;
fourthButton.addEventListener('click', () => {
    document.querySelector('output').innerHTML = list.lastElementChild.previousElementSibling.textContent;
});

