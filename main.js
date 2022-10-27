let cart = JSON.parse(localStorage.getItem('ikea-cart')) || [];
let inventory = JSON.parse(localStorage.getItem('ikea-inventory'));

if (!localStorage.getItem('ikea-inventory')) {
  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  inventory = [
    {
      section: 'housing',
      name: 'fridge',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'curtains',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'chair',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'dog bed',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'wardrobe',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'table',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'sofa',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'shelf',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'bookcase',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'housing',
      name: 'mirror',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'monitor',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'standing desk',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'video game',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'webcam',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'mouse',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'keyboard',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'cleaning robot',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'cell phone',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'headphone',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'notebook',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'ssd',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'RAM',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'router',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'electronics & gaming',
      name: 'water cooler',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'bag',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 't-shirt',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'jeans',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'jacket',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'boots',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'sandals',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'flip-flops',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'sneakers',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'cap',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'hat',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
    {
      section: 'fashion',
      name: 'sunglasses',
      inventory: randomIntFromInterval(0, 10),
      price: randomIntFromInterval(50, 1000)
    },
  ];

  localStorage.setItem('ikea-inventory', JSON.stringify(inventory));
};

const housingInventory = inventory.filter(product => product.section === 'housing');
const electronicsInventory = inventory.filter(product => product.section === 'electronics & gaming');
const fashionInventory = inventory.filter(product => product.section === 'fashion');

const shuffle = arr => {
  let currentIndex = arr.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  };

  return arr;
};

const homePageProducts = arr => {
  newArr = [...arr];
  return newArr.splice(0, 12);
};

let filteredHomePageProducts = [];
let sortedInventory = homePageProducts(shuffle(inventory));

const homePageProductsContainer = document.querySelector('#home-page-products-container');

const generateHomePageProductsList = () => {
  homePageProductsContainer.innerHTML = '';

  sortedInventory.forEach(product => {
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
      
      homePageProductsContainer.appendChild(productContainer);
  });
};

generateHomePageProductsList();

const filterBtn = document.querySelector('#home-page-filter-btn');

filterBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('#home-page-filter-input').value;

  filteredHomePageProducts = inventory.filter(product => product.name.includes(inputValue));
  
  sortedInventory = homePageProducts(filteredHomePageProducts);

  generateHomePageProductsList();
});

const filterBySection = section => {
  filteredHomePageProducts = inventory.filter(product => product.section === section);
  sortedInventory = homePageProducts(filteredHomePageProducts);

  generateHomePageProductsList();
};

document.getElementsByName('housing')[0].addEventListener('click', () => filterBySection('housing'));
document.getElementsByName('electronics & gaming')[0].addEventListener('click', () => filterBySection('electronics & gaming'));
document.getElementsByName('fashion')[0].addEventListener('click', () => filterBySection('fashion'));

const addToCart = (name) => {
  const product = inventory.filter(item => item.name === name)[0];
  const counter = document.querySelector(`#counter-${name.replace(' ', '-')}`);
  
  if ((product.inventory > 0) && (Number(counter.innerHTML) < product.inventory)) {
    cart.push(product);
  
    counter.innerHTML = Number(counter.innerHTML) + 1;

    localStorage.setItem('ikea-cart', JSON.stringify(cart));
  }
};

const removeFromCart = (name) => {
  const index = cart.findIndex(product => product.name === name);

  if (index > -1) {
    cart.splice(index, 1);
    const counter = document.querySelector(`#counter-${name.replace(' ', '-')}`);
    counter.innerHTML = Number(counter.innerHTML) - 1;
    localStorage.setItem('ikea-cart', JSON.stringify(cart));
  }
};