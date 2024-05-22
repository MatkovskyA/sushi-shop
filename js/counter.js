// Находим элементы счетчика карточки товаров 
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]')

// Клик на кнопку - и +
btnMinus.addEventListener('click', () => {
  parseInt(counter.innerText) > 1 ? --counter.innerText : 1;
})

btnPlus.addEventListener('click', () => {
  counter.innerText = ++counter.innerText;
})

