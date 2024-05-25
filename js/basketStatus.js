const cartEmpty = document.querySelector("[data-cart-empty]")
const orderForm = document.querySelector("#order-form");


const getCartEmpty = () => {
  cartEmpty.classList.add('none');
  orderForm.classList.remove('none');
};
const showCartElements = () => {
  cartEmpty.classList.remove('none');
  orderForm.classList.add('none');
};

const basketStatus = () => {
  const cartWrapper = document.querySelector(".cart-wrapper");

  cartWrapper.children.length ? getCartEmpty() : showCartElements();
}



