function calcCartPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach(function(item) {
    const amountElem = item.querySelector('[data-counter]');
    const priceElem = item.querySelector('.price__currency');

    const currentPrice = parseInt(amountElem.innerText) * parseInt(priceElem.innerText);
    totalPrice += currentPrice;

    console.log(totalPrice)
  }) 
}

