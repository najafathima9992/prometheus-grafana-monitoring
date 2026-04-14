let allProducts = [];

async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  allProducts = products;
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';

    div.innerHTML = `
      <img src="https://picsum.photos/300?random=${p.id}">
      <div class="details">
        <h3>${p.name}</h3>
        <div class="price">₹${p.price}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;

    container.appendChild(div);
  });
}

async function addToCart(id) {
  await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  });

  updateCart();
}

async function updateCart() {
  const res = await fetch('/api/cart');
  const cart = await res.json();
  document.getElementById('cartCount').textContent = cart.length;
}

function searchProducts() {
  const value = document.getElementById('search').value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
}

// Init
loadProducts();
updateCart();
