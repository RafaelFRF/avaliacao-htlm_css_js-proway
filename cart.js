let cart = JSON.parse(localStorage.getItem('ikea-cart')) || [];
let inventory = JSON.parse(localStorage.getItem('ikea-inventory'));

if (cart.length === 0) document.querySelector('#empty-cart').style.display = 'block';

const singularizeCart = cart => {
  newCart = [];

  cart.forEach(product => {
    if (!newCart.includes(JSON.stringify(product))) newCart.push(JSON.stringify(product));
  });

  finalCart = [];

  newCart.forEach(product => {
    finalCart.push(JSON.parse(product));
  });

  return finalCart;
};

const parsedCart = singularizeCart(cart);
const cartProductsContainer = document.querySelector('#cart-products-container');

const generateCartProductsList = () => {
  cartProductsContainer.innerHTML = '';

  parsedCart.forEach(product => {
    const productContainer = document.createElement('div');
    const productCount = cart.filter(item => item.name === product.name).length;

    productContainer.classList.add(
      'product-container',
      'col-4'
      );
      productContainer.innerHTML = `
      <div class="d-flex flex-column gap-1 p-2">
        <p>${product.name}</p>
        <p>R$ ${product.price},00</p>
        <p>Quantidade em estoque: ${product.inventory}</p>
        <div class="d-flex gap-1">
          <button
            class="btn btn-outline-danger d-flex justify-content-center align-items-center"
            onclick="removeFromCart('${product.name}')"
          >
            <i class="fa-solid fa-minus fs-10"></i>
          </button>
          <div id="counter-${product.name.replace(' ', '-')}">${productCount}</div>
          <button
            class="btn btn-outline-success d-flex justify-content-center align-items-center"
            onclick="addToCart('${product.name}')"
          >
            <i class="fa-solid fa-plus fs-10"></i>
          </button>
        </div>
      </div>
      `;
      
      cartProductsContainer.appendChild(productContainer);
  });
};

generateCartProductsList();

const addToCart = (name) => {
  const product = inventory.filter(item => item.name === name)[0];
  const counter = document.querySelector(`#counter-${name.replace(' ', '-')}`);
  
  if ((product.inventory > 0) && (Number(counter.innerHTML) < product.inventory)) {
    cart.push(product);
    counter.innerHTML = Number(counter.innerHTML) + 1;
    localStorage.setItem('ikea-cart', JSON.stringify(cart));

    totalPrice();
  }
};

const removeFromCart = (name) => {
  const index = cart.findIndex(product => product.name === name);

  if (index > -1) {
    cart.splice(index, 1);

    const counter = document.querySelector(`#counter-${name.replace(' ', '-')}`);
  
    counter.innerHTML = Number(counter.innerHTML) - 1;

    localStorage.setItem('ikea-cart', JSON.stringify(cart));

    totalPrice();
  }
};

const totalPrice = () => {
  const totalPriceContainer = document.querySelector('#total-price');
  let totalPrice = 0;

  cart.forEach(product => totalPrice += product.price);

  totalPriceContainer.innerHTML = `R$ ${totalPrice},00`;
};

totalPrice();