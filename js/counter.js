//ловим клики по минусу/плюсу
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
  const counterWrapper = event.target.closest(".counter-wrapper");
  const counter = counterWrapper.querySelector('[data-counter]')

  if(event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  if(event.target.dataset.action === "minus") {
    parseInt(counter.innerText) > 1 ? --counter.innerText : 1;
  }}
})


