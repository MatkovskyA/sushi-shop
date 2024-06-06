// function calcCartPrice() {
//   const cartWrapper = document.querySelector('.cart-wrapper');
//   const priceElem = cartWrapper.querySelectorAll('.price__currency');
//   const finalPrice = document.querySelector('.total-price');

//   let totalPrice = 0;

//   priceElem.forEach(function(item) {
//     const amountElem = item.closest('.cart-item').querySelector("[data-counter]");

//     totalPrice += parseInt(item.innerText) * parseInt(amountElem.innerText);

//     console.log(totalPrice)
//   }) 

//   finalPrice.innerText = totalPrice
// }
function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll('.cart-wrapper .cart-item');
  const finalPrice = document.querySelector('.total-price');

  const deliveryCost = document.querySelector('.delivery-cost')
  const cartDelivery = document.querySelector('.cart-delivery')

  let totalPrice = 0;

  cartItems.forEach(function(cartItem) {
      const priceElem = cartItem.querySelector('.price__currency');
      const amountElem = cartItem.querySelector("[data-counter]");

      const currentPrice = parseInt(amountElem.innerText) * parseInt(priceElem.innerText);
      totalPrice += currentPrice;
  });

  finalPrice.innerText = totalPrice;

  if(totalPrice > 0) {
    cartDelivery.classList.remove('none')
  } else {
    cartDelivery.classList.add('none')
  }

  if(totalPrice >= 1100) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = "250 ₽"
  }
}